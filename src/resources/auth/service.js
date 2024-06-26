import { Customer } from '@/database'
import authUtils from './utils'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export default {
  async signout(user) {
    const newAccessToken = authUtils.generateAccessToken({
      id: user.id,
      username: user.username,
    })

    return { newAccessToken }
  },

  async signin(username, password) {
    const user = await Customer.findOne({ where: { username } })

    if (user && bcrypt.compareSync(password, user.password)) {
      return authUtils.generateTokens({ id: user.id, username: user.username })
    } else {
      throw new Error('Invalid username or password.')
    }
  },

  async newToken(refreshToken) {
    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    const accessToken = authUtils.generateAccessToken({
      id: user.id,
      username: user.username,
    })

    return { accessToken }
  },

  async signup(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await Customer.create({ username, password: hashedPassword })

    const accessToken = authUtils.generateAccessToken({
      id: user.id,
      username: user.username,
    })
    const refreshToken = authUtils.generateRefreshToken({
      id: user.id,
      username: user.username,
    })

    return { accessToken, refreshToken }
  },
}
