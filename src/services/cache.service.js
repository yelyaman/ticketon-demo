import Redis from 'ioredis'
import config from '@/config'

const { redis } = config
const redisClient = new Redis({
  host: redis.host,
  port: +redis.port,
  password: redis.password
})

redisClient.on('connect', () => {
  console.log('[Redis] connected')
})

redisClient.on('error', error => {
  console.log(error)
})

export default redisClient
