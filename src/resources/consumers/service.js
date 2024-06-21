import { Consumer } from '@/database'

export default {
  async getOne(id) {
    const consumer = await Consumer.findByPk(id)

    if (!consumer) {
      throw new Error('consumer not found')
    }

    return consumer
  },

  async getList(list_size, page) {
    const consumers = await Consumer.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    })

    return consumers
  },

  async create(createBody) {
    return await Consumer.bulkCreate(createBody)
  },

  async update(id, updateBody) {
    const consumer = await Consumer.findByPk(id)

    if (!consumer) {
      throw new Error('consumer not found')
    }

    return await consumer.update(updateBody, {
      returning: true,
    })
  },

  async delete(id) {
    const consumer = await Consumer.findByPk(id)

    if (!consumer) {
      throw new Error('consumer not found')
    }

    await consumer.destroy()
  },
}
