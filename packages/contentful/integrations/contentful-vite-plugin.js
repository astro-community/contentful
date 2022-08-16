import { contentfulResponse } from './contentful-response.js'

export const contentfulVite = (/** @type {{ meta: Meta }} */ { meta }) => {
	/** Prefix used by this plugin to differentiate Contentful imports. */
	const virtualModuleId = '@astropub/contentful:'

	/** Prefix used by Vite to differentiate virtual modules. */
	const virtualPrefixId = '\0'

	return /** @type {VitePlugin} */ ({
		name: 'vite:contentful',
		enforce: 'pre',
		resolveId(importeeId) {
			if (importeeId.startsWith(virtualModuleId)) {
				return virtualPrefixId + importeeId
			}
		},
		async load(importeeId) {
			if (importeeId.startsWith(virtualPrefixId + virtualModuleId)) {
				const [ request, format ] = importeeId.slice(virtualModuleId.length + 1).split(/(?=\!astro$)/)

				return await contentfulResponse(
					`/spaces/${
						meta.env.CONTENTFUL_SPACE
					}/environments/${
						meta.env.CONTENTFUL_ENVIRONMENT
					}/${request}`,
					meta,
					format
				)
			}
		},
	})
}

/** @typedef {import('./createMeta').Meta} Meta */
/** @typedef {import('./contentful-response.js').ContentfulConfig} ContentfulConfig */
/** @typedef {Partial<ContentfulConfig> & { space: string, token: string }} VitePluginConfig */
/** @typedef {import('vite').Plugin} VitePlugin */
