import express from 'express'
import controller from './controller'
import middlewares from '@/src/middlewares'

const router = express.Router()

router.get('/', middlewares.authMiddleware, controller.getList)
router.get('/:id', middlewares.authMiddleware, controller.getOne)
router.post('/', middlewares.authMiddleware, controller.create)
router.patch('/:id', middlewares.authMiddleware, controller.update)
router.delete('/delete/:id', middlewares.authMiddleware, controller.delete)

export default router
