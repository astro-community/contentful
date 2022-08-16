// @ts-check
import { defineConfig } from 'astro/config'
import contentfulIntegration from '@astropub/contentful'

export default defineConfig({
	integrations: [
		contentfulIntegration()
	],
	server: {
		host: true,
	},
	vite: {
		ssr: {
			noExternal: '@astropub/contentful'
		}
	}
})
