import Seat from '../../db/models/Seat.js'

export default {
  async getOne(id) {
    const seat = await Seat.findByPk(id)

    if (!seat) {
      throw new Error('seat not found')
    }

    return seat
  },

  async getList(list_size, page) {
    const seats = await Seat.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    })

    return seats
  },

  async create(createBody) {
    return await Seat.bulkCreate(createBody)
  },

  async update(id, updateBody) {
    const seat = await Seat.findByPk(id)

    if (!seat) {
      throw new Error('seat not found')
    }

    return await Seat.update(updateBody, {
      returning: true,
    })
  },

  async delete(id) {
    const seat = await Seat.findByPk(id)

    if (!seat) {
      throw new Error('seat not found')
    }

    await seat.destroy()
  },
}
