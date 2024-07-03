import createHttpError from 'http-errors'

export default validator => {
  return async (req, res, next) => {
    try {
      const validated = await validator(req.body)
      req.body = validated
      next()
    } catch (err) {
      if (err.isJoi) return next(createHttpError(422, { message: err.message }))
      next(createHttpError(500))
    }
  }
}
