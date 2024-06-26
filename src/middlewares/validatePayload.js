export default validator => {
  return async (req, res, next) => {
    try {
      const validated = await validator(req.body)
      req.body = validated
      next()
    } catch (err) {
      next(err)
    }
  }
}
