// @ts-check

import { createMeta } from './createMeta.js'
import { contentfulMiddleware } from './contentful-middleware.js'
import { contentfulVite } from './contentful-vite-plugin.js'

export const contentfulIntegration = (/** @type {AstroIntegrationOpts} */ opts = any) => {
	const meta = createMeta()

	/** @type {AstroIntegration} */
	const integration = {
		name: 'astro:contentful',
		hooks: {
			'astro:config:setup'({ config, updateConfig }) {
				meta.update(config.root)

				updateConfig({
					vite: {
						plugins: [
							contentfulVite({ meta })
						],
					}
				})
			},
			'astro:config:done'({ config }) {
				meta.protocol = config.vite?.server?.https ? 'https:' : 'http:'

				meta.hostname = (
					typeof config.server.host === 'string'
						? config.server.host
					: 'localhost'
				)

				meta.port = String(config.server.port || meta.port)
			},
			'astro:server:setup'({ server }) {
				if (!meta.env.CONTENTFUL_ACCESS_TOKEN) {
					server.middlewares.use(contentfulMiddleware({ meta }))
				}
			},
			async 'astro:server:start'(options) {
				meta.port = String(options.address.port || meta.port)
			},
		},
	}

	return integration
}

const any = /** @type {any} */ (null)

/** @typedef {ReturnType<createMeta>} Meta */
/** @typedef {import('astro').AstroIntegration} AstroIntegration */
/** @typedef {Partial<ContentfulConfig>} AstroIntegrationOpts */
/** @typedef {import('vite').Plugin} VitePlugin */
/** @typedef {import('./contentful-vite-plugin').ContentfulConfig} ContentfulConfig */
