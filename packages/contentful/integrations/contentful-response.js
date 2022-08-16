export const contentfulResponse = async (
	/** @type {string} */ input,
	/** @type {Meta} */ meta,
	/** @type {string} */ format
) => {
	const requestURL = new URL(input, 'https://api.contentful.com')

	const request = new Request(requestURL, {
		cache: 'no-cache',
		headers: {
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + meta.env.CONTENTFUL_ACCESS_TOKEN,
			'Accept-Encoding': 'gzip',
			'User-Agent': 'node.js/',
			'x-contentful-user-agent': 'sdk contentful-management.js/10.12.0;',
		},
	})

	/** Cached JSON response. */
	let json = throttled[input] || null

	// cache the json response
	if (json === null) {
		const response = await fetch(request)

		json = throttled[input] = await response.json()

		setTimeout(() => {
			delete throttled[input]
		}, 200)
	}

	const isComponent = format === '!astro'

	const isEntry = requestURL.pathname.includes('/entries/')
	const isEntryList = requestURL.pathname.endsWith('/entries')

	const data = JSON.stringify(json, null, '\t')

	const code = (
		isComponent && isEntry
			? [
				`import { renderTemplate, renderSlot } from 'astro/server/render/index.js';`,
				`import { richtexttohtml } from '@astropub/contentful';`,
				`export const locale = ${JSON.stringify(meta.env.CONTENTFUL_LOCALE)};`,
				`export const entry = ${data};`,
				toHTML,
				exportEntry,
				`export default Entry;`,
			].join('\n')
		: isComponent && isEntryList
			? [
				`import { renderTemplate, renderSlot } from 'astro/server/render/index.js';`,
				`import { richtexttohtml } from '@astropub/contentful';`,
				`export const locale = ${JSON.stringify(meta.env.CONTENTFUL_LOCALE)};`,
				`export const entryList = ${data};`,
				toHTML,
				exportEntryList,
				`export default EntryList;`,
			].join('\n')
		: `export default ${data};`
	)

	return { code }
}

const throttled = Object.create(null)

const toHTML = `const toHTML = (entry, name) => {
	let html = '';

	html = entry?.[name]?.[locale] || null;
	html = html ? html.nodeType ? richtexttohtml(html) : html : null;

	return new String(html);
};`

const exportEntry = `export const Entry = async (result, attrs, slots) => {
	return renderTemplate\`\${
		attrs.of in Object(entry.fields)
			? toHTML(entry.fields, attrs.of)
		: renderSlot(result, slots.default)
	}\`;
};

Entry.of = (of) => (
	of in Object(entry.fields)
		? toHTML(entry.fields, of)
	: null
);

Entry.isAstroComponentFactory = true`

const exportEntryList = `export const EntryList = (_result, attrs, slots) => {
	const render = slots.default?.().then(
		(result) => result.expressions.at(0),
		() => null
	)

	return {
		get [Symbol.toStringTag]() {
			return 'AstroComponent'
		},
		async *[Symbol.asyncIterator]() {
			const normalizedGenerator = getNormalizedGenerator(await render)

			if (entryList.items?.length) for (const itemdata of entryList.items) {
				const Entry = async (result, attrs, slots) => {
					return renderTemplate\`\${
						attrs.of in Object(itemdata.fields)
							? toHTML(itemdata.fields, attrs.of)
						: renderSlot(result, slots.default)
					}\`;
				};

				Entry.of = (name) => (
					name in Object(itemdata.fields)
						? toHTML(itemdata.fields, name)
					: null
				);

				Entry.isAstroComponentFactory = true

				yield * normalizedGenerator(Entry)
			}
		},
	}
};

EntryList.isAstroComponentFactory = true

EntryList.None = async (result, attrs, slots) => {
	return renderTemplate\`\${
		entryList.items === Object(entryList.items)
			? ''
		: renderSlot(result, slots.default)
	}\`;
};

EntryList.None.isAstroComponentFactory = true

const isIterable = (value) => (
	value != null &&
	(
		typeof value[Symbol.iterator] === 'function' ||
		typeof value[Symbol.asyncIterator] === 'function'
	)
)

export const getNormalizedGenerator = (fn) => (
	typeof fn !== 'function'
		? async function * (value) {
			yield await value
		}
	: (
		fn instanceof GeneratorFunction ||
		fn instanceof AsyncGeneratorFunction
	)
		? fn
	: async function * (value) {
		yield await fn(await value)
	}
)

const GeneratorFunction = (function * () {}).constructor

const AsyncGeneratorFunction = (async function * () {}).constructor`

/** @typedef {{ space: string, environment: string, origin: string, locale: string, token: string }} ContentfulConfig */
/** @typedef {import('./createMeta.d').Meta} Meta */
