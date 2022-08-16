// @ts-check

import { fileURLToPath, pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'

/** Returns context-specific metadata about the current process. */
export const createMeta = /** @type {() => Meta} */ () => {
	/** Current working directory of the Node.js Process. */
	const cwd = pathToFileURL(process.cwd())

	/** Environment variables. */
	const env = /** @type {EnvironmentVariables} */ (Object.assign(
		Object.create(null),
		process.env
	))

	/** Mode the app is running in. */
	const mode = env.MODE || 'development'

	/** @type {Meta} */
	const meta = {
		cwd,
		mode,
		port: env.PORT || '3000',
		protocol: env.PROTOCOL || 'http:',
		hostname: env.HOSTNAME || 'localhost',
		get env() {
			return env
		},
		set env(value) {
			Object.assign(env, value)
		},
		get origin() {
			return `${this.protocol}//${this.hostname}:${this.port}`
		},
		/** Updates the internals. */
		update(cwd) {
			// update the current working directory (`root`).
			this.cwd = cwd

			// clear the existing environment variables
			for (const name in env) {
				delete env[name]
			}

			// update the environment variables
			Object.assign(env, loadEnv(this.mode, fileURLToPath(this.cwd), ''))
		},
	}

	return meta
}

/** @typedef {import('./createMeta.d').EnvironmentVariables} EnvironmentVariables */
/** @typedef {import('./createMeta.d').Meta} Meta */
/** @typedef {import('./createMeta.d').UpdateInit} UpdateInit */
