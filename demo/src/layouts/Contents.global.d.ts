declare module 'astro/server/render/index.js' {
	const exports: any

	export function renderTemplate(htmlParts: TemplateStringsArray, ...expressions: any[]): Promise<string>

	export function renderSlot(result: any, slotted: string, fallback?: any): Promise<string>
}
