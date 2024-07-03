import express from 'express'
import controller from './controller'
import { checkAuth } from '@/src/middlewares'
import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage })

const router = express.Router()

router.get('/list', checkAuth, controller.getList)
router.get('/:id', checkAuth, controller.getOne)
router.get('/download/:id', checkAuth, controller.download)
router.post('/upload', checkAuth, upload.array('files'), controller.upload)
router.put('/update/:id', checkAuth, upload.single('file'), controller.update)
router.delete('/delete/:id', checkAuth, controller.delete)

export default router
