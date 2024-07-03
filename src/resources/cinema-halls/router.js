import express from 'express'
import controller from './controller'
import { checkAuth } from '@/src/middlewares'

const router = express.Router()

router.get('/', checkAuth, controller.getList)
router.get('/:id', checkAuth, controller.getOne)
router.post('/', checkAuth, controller.create)
router.patch('/:id', checkAuth, controller.update)
router.delete('/delete/:id', checkAuth, controller.delete)

export default router
