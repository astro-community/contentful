import { AstroIntegration } from 'astro'

export const contentfulIntegration: () => AstroIntegration

/** Current working directory of the Node.js Process. ([reference](https://nodejs.org/api/process.html#processcwd)) */
export type CurrentWorkingDirectory = string

/** Environment variables. ([reference](https://en.wikipedia.org/wiki/Environment_variable)) */
export interface EnvironmentVariables {
	[variable: string]: string
}

/** Mode the app is running in. ([reference](https://vitejs.dev/guide/env-and-mode.html#modes)) */
export type Mode = string

export interface Internals {
	/** Current working directory of the Node.js Process. ([reference](https://nodejs.org/api/process.html#processcwd)) */
	cwd: CurrentWorkingDirectory

	/** Environment variables. ([reference](https://en.wikipedia.org/wiki/Environment_variable)) */
	env: EnvironmentVariables

	/** Mode the app is running in. ([reference](https://vitejs.dev/guide/env-and-mode.html#modes)) */
	mode: Mode
}
