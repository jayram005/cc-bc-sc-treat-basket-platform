module.exports = {
	verbose: true,
	globalSetup: "<rootDir>/globalSetup.js",
	globalTeardown: "<rootDir>/globalTeardown.js",
	testMatch: [
		"<rootDir>/**/*.test.js"
	],
	testEnvironment: 'node',
	testTimeout: 50000,
};
