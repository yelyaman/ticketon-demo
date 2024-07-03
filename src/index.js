import express from 'express'

import auth from './resources/auth/router'
import cinema from './resources/cinema-halls/router'
import cinemas from './resources/cinemas/router'
import consumers from './resources/consumers/router'
import countries from './resources/countries/router'
import customers from './resources/customers/router'
import files from './resources/files/router'
import movies from './resources/movies/router'
import reservations from './resources/reservations/router'
import schedule from './resources/schedule/router'
import seats from './resources/seats/router'

const router = express.Router()

router.use('/auth', auth)
router.use('/cinema', cinema)
router.use('/cinemas', cinemas)
router.use('/consumers', consumers)
router.use('/countries', countries)
router.use('/customers', customers)
router.use('/files', files)
router.use('/movies', movies)
router.use('/reservations', reservations)
router.use('/schedule', schedule)
router.use('/seats', seats)

export default router
