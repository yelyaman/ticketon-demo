import express from 'express'
import controller from './controller'
import { validatePayload, checkAuth } from '@/src/middlewares'
import { CreateBranchSchema } from './validator'

const router = express.Router()

router.get('/', checkAuth, controller.getList)
router.get('/:id', checkAuth, controller.getOne)
router.post(
  '/',
  checkAuth,
  validatePayload(CreateBranchSchema),
  controller.create,
)
router.patch('/:id', checkAuth, controller.update)
router.delete('/delete/:id', checkAuth, controller.delete)

export default router
