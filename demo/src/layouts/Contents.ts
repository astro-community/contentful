import { renderTemplate, renderSlot } from 'astro/server/render/index.js'

export const Contents = async (result: any, props: any, slots: any): Promise<string> => {
	return renderTemplate`${
		props.of
			? new String(props.of)
		: renderSlot(result, slots.default)
	}`;
}

Contents.isAstroComponentFactory = true

export default new Proxy(Contents, {
	get(target, name) {
		// pass through any existing properties or asynchronous `.then` check
		if (name in target || name === 'then') return target[name]

		return Object.assign(
			async (result: any, props: any, slots: any) => await target(
				result,
				{
					// pre-define the `of` attribute, still allowing overrides
					'of': name,
					...props,
				},
				slots
			),
			// identify this function as an astro component
			{
				isAstroComponentFactory: true,
			}
		)
	},
})
