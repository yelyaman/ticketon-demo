import jwt from 'jsonwebtoken'
import config from '@/config'

export default {
  generateTokens(user) {
    const accessToken = jwt.sign(user, config.auth.access_key, {
      expiresIn: '2m',
    })
    const refreshToken = jwt.sign(user, config.auth.refresh_key, {
      expiresIn: '5m',
    })
    return { accessToken, refreshToken }
  },

  // generateRefreshToken(user) {
  // },
}
