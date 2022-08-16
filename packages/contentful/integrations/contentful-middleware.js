import * as fs from 'node:fs'
import { parseEnv } from '../bundled/dotenv.js'

export const contentfulMiddleware = (/** @type {{ meta: Meta }} */ { meta }) => {
	const middleware = /** @type {ContentfulMiddleware} */ ((req, res, next) => {
		const url = new URL(req.url, meta.origin)

		if (url.pathname === middlewareConfig.pathToHTML) {
			res.setHeader('Content-Type', 'text/html;charset=utf-8')

			return res.end(
				fs.readFileSync(pathToHtml, 'utf-8').replace(/\{\{([\w_]+)\}\}/g, ($0, $1) => {
					return (
						$1 in meta.env
							? meta.env[$1]
						: $1 in middlewareConfig
							? middlewareConfig[$1]
						: ''
					)
				})
			)
		}

		if (url.pathname === middlewareConfig.pathToJSON) {
			if (req.method == 'POST') {
				let body = '';

				req.on('data', function (data) {
					body += data
				})

				req.on('end', async () => {
					res.setHeader('Content-Type', 'application/json;charset=utf-8')

					try {
						const update = JSON.parse(body)

						if (update.token && update.space) {
							const checkURL = new URL(`https://api.contentful.com/spaces/${update.space}`)
							const checkReq = new Request(checkURL, {
								cache: 'no-cache',
								headers: {
									'Accept': 'application/json',
									'Authorization': 'Bearer ' + update.token,
									'Accept-Encoding': 'gzip',
									'User-Agent': 'node.js/',
									'x-contentful-user-agent': 'sdk contentful-management.js/10.12.0;',
								},
							})

							res.setHeader('Content-Type', 'application/json;charset=utf-8')

							const checkRes = await fetch(checkReq)
							const checkJSO = await checkRes.json()

							if (checkJSO?.sys?.type === 'Space') {
								const envValu = {
									CONTENTFUL_SPACE: update.space,
									CONTENTFUL_ACCESS_TOKEN: update.token,
									CONTENTFUL_ENVIRONMENT: 'master',
									CONTENTFUL_LOCALE: 'en-US',
								}
								const envPath = new URL('.env.local', meta.cwd)

								touchFileSync(envPath)

								const envOpts = parseEnv(fs.readFileSync(envPath))

								envOpts.CONTENTFUL_SPACE = update.space
								envOpts.CONTENTFUL_ACCESS_TOKEN = update.token
								envOpts.CONTENTFUL_ENVIRONMENT = 'master'
								envOpts.CONTENTFUL_LOCALE = 'en-US'

								const envText = Object.entries(envOpts).reduce(
									(all, [ name, data ]) => all.concat(
										`${name}=${
											/\s/.test(data)
												? JSON.stringify(data)
											: data
										}`
									),
									[]
								).join('\n')

								fs.writeFileSync(envPath, envText)

								Object.assign(meta.env, envValu)

								res.end(JSON.stringify(checkJSO))
							} else {
								res.end(JSON.stringify({ sys: { type: 'Error' }}))
							}

							return
						}

						if (update.token && !update.space) {
							const checkURL = new URL('https://api.contentful.com/spaces')
							const checkReq = new Request(checkURL, {
								cache: 'no-cache',
								headers: {
									'Accept': 'application/json',
									'Authorization': 'Bearer ' + update.token,
									'Accept-Encoding': 'gzip',
									'User-Agent': 'node.js/',
									'x-contentful-user-agent': 'sdk contentful-management.js/10.12.0;',
								},
							})

							res.setHeader('Content-Type', 'application/json;charset=utf-8')

							const checkRes = await fetch(checkReq)
							const checkJSO = await checkRes.json()

							if (checkJSO?.sys?.type === 'Array') {
								res.end(JSON.stringify(checkJSO))
							} else {
								res.end(JSON.stringify({ sys: { type: 'Error' }}))
							}

							return
						}
					} catch (error) {
						res.end(JSON.stringify({ sys: { type: 'Error' } }))

						return
					}
				});
			}

			return
		}

		if (!meta.env.CONTENTFUL_ACCESS_TOKEN) {
			res.writeHead(302, {
				Location: middlewareConfig.pathToHTML
			}).end()

			return
		}

		return next()
	})

	return middleware
}

const middlewareConfig = {
	pathToHTML: '/@contentful/',
	pathToJSON: '/@contentful/api'
}
const pathToHtml = new URL('./contentful-middleware.html', import.meta.url)
const touchFileSync = (/** @type {fs.PathLike} */ path) => {
	const time = new Date()

	try {
		fs.utimesSync(path, time, time)
	} catch (err) {
		fs.closeSync(fs.openSync(path, 'w'))
	}
}

/** @typedef {(req: Connect.IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => void} ContentfulMiddleware */
/** @typedef {import('./createMeta.d').Meta} Meta */
