import db from './init'

export const sequelize = db.sequelize
export const Sequelize = db.Sequelize
export const QueryTypes = db.QueryTypes
export const Op = db.Op

export const {
  Cinema,
  CinemaHall,
  City,
  Consumer,
  Country,
  Customer,
  TicketonFile,
  Movie,
  Reservation,
  Schedule,
  Seat,
  Transaction,
} = db

sequelize.sync({ alter: true })

db.ping().then(status => {
  if (status.working) {
    console.log('[Database] Connected')
  } else {
    console.error('[Database] Not Connected', status)
  }
})

export default db
