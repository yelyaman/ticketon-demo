import express from 'express'
import controller from './controller'
import {checkAuth} from '@/src/middlewares'

const router = express.Router()

router.get('/info', checkAuth, controller.getInfo)
router.get('/signout', checkAuth, controller.signout)
router.post('/signin', controller.signin)
router.post('/signin/new_token', controller.newToken)
router.post('/signup', controller.signup)

export default router
