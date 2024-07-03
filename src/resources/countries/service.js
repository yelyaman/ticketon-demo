import { Country } from "@/database"

export default {
  async getOne(id) {
    const country = await Country.findByPk(id)

    if (!country) {
      throw new Error('country not found')
    }

    return country
  },

  async getList(list_size, page) {
    const countries = await Country.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    })

    return countries
  },

  async create(createBody) {
    console.log(createBody)
    return await Country.create(createBody)
  },

  async update(id, updateBody) {
    const country = await Country.findByPk(id)

    if (!country) {
      throw new Error('country not found')
    }

    return await country.update(updateBody, {
      returning: true,
    })
  },

  async delete(id) {
    const country = await Country.findByPk(id)

    if (!country) {
      throw new Error('country not found')
    }

    await country.destroy()
  },
}
