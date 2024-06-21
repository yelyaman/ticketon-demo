import { Schedule } from "@/database"

export default {
  async getOne(id) {
    const schedule = await Schedule.findByPk(id)

    if (!schedule) {
      throw new Error('schedule not found')
    }

    return schedule
  },

  async getList(list_size, page) {
    const schedules = await Schedule.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    })

    return schedules
  },

  async create(createBody) {
    return await Schedule.bulkCreate(createBody)
  },

  async update(id, updateBody) {
    const schedule = await Schedule.findByPk(id)

    if (!schedule) {
      throw new Error('Movie not found')
    }

    return await Schedule.update(updateBody, {
      returning: true,
    })
  },

  async delete(id) {
    const schedule = await Schedule.findByPk(id)

    if (!schedule) {
      throw new Error('schedule not found')
    }

    await schedule.destroy()
  },
}
