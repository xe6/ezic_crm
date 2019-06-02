require("dotenv").config();

module.exports = {
    DEVELOPMENT: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: "mysql",
        multipleStatements: true
    },
    PRODUCTION: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: "mysql",
        multipleStatements: true
    }
};