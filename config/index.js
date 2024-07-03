import 'dotenv/config'

export default {
  postgres: {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'ticketon_db',
    port: +process.env.DB_PORT || 5433,
    // logging: process.env.NODE_ENV === "dev",
    logging: false,
    define: {
      timestamps: true,
    },
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  },
  auth: {
    access_key: process.env.ACCESS_KEY,
    refresh_key: process.env.REFRESH_KEY,
  },
}
