import dotenv from 'dotenv'
import express from 'express'
import authorization from './src/resources/auth/router.js'
import files from './src/resources/files/router.js'
import db from './database/index.js'
import helmet from 'helmet'
import cors from 'cors'
import { RedisCacheClient } from './src/utils/cache.js'
dotenv.config()

try {
  const app = express()

  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors)

  db.init()

  app.use('/auth', authorization)
  app.use('/file', files)

  // RedisCacheClient.connect()
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Express app running on port ${process.env.PORT}!`),
  )
} catch (error) {
  console.log(error)
  process.exit(1)
}
