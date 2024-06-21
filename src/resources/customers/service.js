import { Customer } from "@/database"

export default {
  async getOne(id) {
    const customer = await Customer.findByPk(id)

    if (!customer) {
      throw new Error('Customer not found')
    }

    return customer
  },

  async getList(list_size, page) {
    const customers = await Customer.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    })

    return customers
  },

  async create(createBody) {
    return await Customer.bulkCreate(createBody)
  },

  async update(id, updateBody) {
    const customer = await Customer.findByPk(id)

    if (!customer) {
      throw new Error('Customer not found')
    }

    const updatedCustomer = await customer.update(updateBody, {
      returning: true,
    })

    return updatedCustomer
  },

  async delete(id) {
    const customer = await Customer.findByPk(id)

    if (!customer) {
      throw new Error('Customer not found')
    }

    await customer.destroy()
  },
}
