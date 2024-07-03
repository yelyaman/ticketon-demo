import { Cinema } from '@/database'

export default {
  async getOne(id) {
    const cinema = await Cinema.findByPk(id)

    if (!cinema) {
      throw new Error('Cinema not found')
    }

    return cinema
  },

  async getList(list_size, page) {
    const cinemas = await Cinema.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    })

    return cinemas
  },

  async create(createBody) {
    return await Cinema.create(createBody)
  },

  async update(id, updateBody) {
    const cinema = await Cinema.findByPk(id)

    if (!cinema) {
      throw new Error('Movie not found')
    }

    return await cinema.update(updateBody, {
      returning: true,
    })
  },

  async delete(id) {
    const cinema = await Cinema.findByPk(id)

    if (!cinema) {
      throw new Error('Cinema not found')
    }

    await cinema.destroy()
  },
}
