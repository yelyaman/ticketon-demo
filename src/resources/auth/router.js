import express from 'express'
import controller from './controller'
import middlewares from '@/src/middlewares'

const router = express.Router()

router.get('/info', middlewares.authMiddleware, controller.getInfo)
router.get('/signout', middlewares.authMiddleware, controller.signout)
router.post('/signin', controller.signin)
router.post('/signin/new_token', controller.newToken)
router.post('/signup', controller.signup)

export default router
