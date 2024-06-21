import 'dotenv/config'

export default {
  postgres: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: +process.env.DB_PORT,
    // logging: process.env.NODE_ENV === "dev",
    logging: false,
    define: {
      timestamps: true,
    },
  },
  auth: {
    access_key: process.env.ACCESS_KEY,
    refresh_key: process.env.REFRESH_KEY,
  },
}
