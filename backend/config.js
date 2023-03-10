const dotenv = require("dotenv")
dotenv.config();
module.exports = {
    SERVER_PORT: process.env.SERVER_PORT || 3000,
    DB_HOST: process.env.DB_HOST || '31.170.167.204',
    DB_NAME: process.env.DB_NAME || '',
    DB_USER: process.env.DB_USER || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    EMAIL_USERNAME: process.env.EMAIL_USERNAME || '',
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',
}