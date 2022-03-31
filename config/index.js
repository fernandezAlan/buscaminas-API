import dotenv from 'dotenv'
dotenv.config()

export default {
    NODE_ENV: process.env.NODE_ENV || 'local',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 8080
}