import Reservation from '../../db/models/Reservation.js'

export default {
  async getOne(id) {
    const reservation = await Reservation.findByPk(id)

    if (!reservation) {
      throw new Error('reservation not found')
    }

    return reservation
  },

  async getList(list_size, page) {
    const reservations = await Reservation.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    })

    return reservations
  },

  async create(createBody) {
    return await Reservation.bulkCreate(createBody)
  },

  async update(id, updateBody) {
    const reservation = await Reservation.findByPk(id)

    if (!reservation) {
      throw new Error('Movie not found')
    }

    return await Reservation.update(updateBody, {
      returning: true,
    })
  },

  async delete(id) {
    const reservation = await Reservation.findByPk(id)

    if (!reservation) {
      throw new Error('reservation not found')
    }

    await reservation.destroy()
  },
}
