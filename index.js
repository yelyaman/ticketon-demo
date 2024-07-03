import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import api from './src'
import RedisCacheClient from './src/services/cache.service'

dotenv.config()

try {
  const app = express()

  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())

  app.use('/ticketon', api)
  app.use('/', (req, res, next) => {
    res.send('I am running')
  })

  app.listen(process.env.NODE_DOCKER_PORT || 3000, () =>
    console.log(`[App] connected on port ${process.env.NODE_DOCKER_PORT}!`),
  )
} catch (error) {
  console.log(error)
  process.exit(1)
}
