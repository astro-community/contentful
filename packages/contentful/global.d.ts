declare namespace Contentful {
	interface Locales {
		sys: object,
		total: number,
		skip: number,
		limit: number,
		items: {
			name: string,
			internal_code: string,
			code: string,
			fallbackCode: unknown,
			default: boolean,
			contentManagementApi: boolean,
			contentDeliveryApi: boolean,
			optional: boolean,
			sys: object[]
		}[]
	}

	interface Sys {
		type: string
		linkType: string
		id: string
	}

	interface PlainTextField {
		[key: string]: string
	}

	interface RichTextField {
		nodeType: string
		data: {}
		content: {
			nodeType: string
			data: {}
			value: string
			marks: {
				type: string
			}[]
		}[]
	}

	interface Entry {
		metadata: {
			tags: []
		}
		sys: {
			space: {
				sys: Sys
			}
			id: string
			type: string
			createdAt: string
			updatedAt: string
			environment: {
				sys: Sys
			}
			publishedVersion: number
			publishedAt: string
			firstPublishedAt: string
			createdBy: {
				sys:Sys
			}
			updatedBy: {
				sys: Sys
			}
			publishedCounter: number
			version: number
			publishedBy: {
				sys: Sys
			}
			contentType: {
				sys: Sys
			}
		}
		fields: {
			[key: string]: PlainTextField | RichTextField
		}
	}

	interface EntryList {
		sys: {
			type: 'Array'
		}
		total: number
		skip: number
		limit: number
		items: Entry[]
	}

	interface EntryProps {
		of: string
	}

	interface EntryComponent {
		(props: EntryProps): any

		of(name: string): string | null
	}

	interface EntryListComponent {
		<P>(props: EntryListProp<P>): any

		None(props: Record<string, any>): any
	}

	type EntryListProp<T extends Record<string, any>> = {
		[K in keyof T]: K extends 'children'
			? {
				(entry: any): any
			}
		: T[K]
	} & {
		children?: {
			(item: typeof EntryComponent): any
		}
	}

	interface Fields {
		[name: string]: string | null
	}

	var EntryList: EntryList
	var Entry: Entry
	var EntryComponent: EntryComponent
	var EntryListComponent: EntryListComponent
	var Fields: Fields
	var Locales: Locales
}

// Entry
// -----------------------------------------------------------------------------

declare module '@astropub/contentful:entries/*!astro' {
	export type Props = Contentful.EntryProps

	export var Entry: Contentful.EntryComponent
	export var entry: Contentful.Entry

	export default Contentful.EntryComponent
}

declare module '@astropub/contentful:entries/*' {
	export type Props = Contentful.EntryProps

	export var Entry: Contentful.EntryComponent
	export var entry: Contentful.Entry

	export default Contentful.Entry
}

// EntryList
// -----------------------------------------------------------------------------

declare module '@astropub/contentful:entries*!astro' {
	export type Props = Contentful.EntryProps

	export var EntryList: Contentful.EntryListComponent
	export var entryList: Contentful.Entry

	export default Contentful.EntryListComponent
}

declare module '@astropub/contentful:entries*' {
	export type Props = Contentful.EntryProps

	export var EntryList: Contentful.EntryListComponent
	export var entryList: Contentful.EntryList

	export default Contentful.EntryList
}

// -----------------------------------------------------------------------------

declare module '@astropub/contentful:locales*' {
	export var locales: Contentful.Locales

	export default Contentful.Locales
}

declare module '@astropub/contentful:content_types/*' {
	const exports: any

	export default exports
}
