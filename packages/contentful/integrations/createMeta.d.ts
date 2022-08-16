export interface UpdateInit {
	/** Current working directory of the Node.js Process. */
	cwd: URL

	/** Environment variables. */
	env: EnvironmentVariables

	/** Mode the app is running in. */
	mode: string
}

export interface Meta {
	/** Current working directory of the Node.js Process. */
	cwd: URL

	/** Environment variables. */
	env: EnvironmentVariables

	/** Mode the app is running in. */
	mode: string

	/** Mode the server is running in. */
	port: string

	/** Protocol the server is running as. */
	protocol: string

	/** Hostname the server is running as. */
	hostname: string

	/** Origin the server is running as. */
	readonly origin: string

	update(init: URL): void
}

/** Environment variables. */
export interface EnvironmentVariables {
	[variable: string]: string
}

export declare function createMeta(): Meta
