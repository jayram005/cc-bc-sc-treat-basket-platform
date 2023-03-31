const dotenv = require('dotenv')
const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error("@  Couldn't find .env file  @");
}

const databaseName = (process.env.DB_NAME)
const databaseUser= (process.env.DB_USER)
const databasePassword = (process.env.DB_PASSWORD)

module.exports = {
    app_setting: {
        port: process.env.SERVER_PORT,
        appName: process.env.SERVER_NAME,
        env: process.env.NODE_ENV || 'development',
    },
    db_setting: {
        connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10),
        queueLimit: parseInt(process.env.DB_QUEUE_LIMIT, 10),
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        user: databaseUser,
        password: databasePassword,
        database: databaseName,
        connectTimeout: parseInt(process.env.DB_CONNECTION_TIMEOUT, 10),
        waitForConnections: process.env.DB_WAIT_FOR_CONNECTION || true,
        acquireTimeout: parseInt(process.env.DB_ACQUIRE_TIMEOUT),
        debug: process.env.DB_DEBUG || false
    }
}