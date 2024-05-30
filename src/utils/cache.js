import Redis from 'redis'

export const RedisCacheClient = Redis.createClient({
    url: '',
    password: ''
})

RedisCacheClient.on('connect', () => {
    console.log('Redis client started')
})

RedisCacheClient.on('error', (error) => {
    console.log(error)
})
