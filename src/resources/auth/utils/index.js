import jwt from 'jsonwebtoken'

export default {
  generateTokens(user) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '2m',
    })
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '5m',
    })
    return { accessToken, refreshToken }
  },

  // generateRefreshToken(user) {
  // },
}
