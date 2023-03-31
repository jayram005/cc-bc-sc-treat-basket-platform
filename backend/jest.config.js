module.exports = {
    verbose: true,
    globalSetup: "<rootDir>/tests/globalSetup.js",
    testMatch: [
        "<rootDir>/tests/unit/*.test.js"
    ],
    testEnvironment: 'node',
    testTimeout: 50000,
};