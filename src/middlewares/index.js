import jwt from 'jsonwebtoken'
import ServerError from '../utils/error'

export default {
  authMiddleware(req, res, next) {
    const token = req.header('Authorization')
    if (!token) throw new ServerError(401, 'Unauthorized')
    jwt.verify(
      token.split(' ')[1],
      process.env.ACCESS_TOKEN_SECRET,
      (err, user) => {
        if (err) return res.status(403).send({ msg: 'jwt error' })

        req.user = user
        next()
      },
    )
  },
}
