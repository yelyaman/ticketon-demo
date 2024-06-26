import jwt from 'jsonwebtoken'
import config from '@/config'
import ServerError from "../utils/error"

export default (req, res, next) => {
  const token = req.header('Authorization')
  if (!token) throw new ServerError(401, 'Unauthorized')
  jwt.verify(token.split(' ')[1], config.auth.access_key, (err, user) => {
    if (err) return res.status(403).send({ msg: 'jwt error' })

    req.user = user
    next()
  })
}
