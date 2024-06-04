import service from './service.js'

export default {
  async getOne(req, res) {
    try {
      const { id } = req.params
      const customer = await service.getOne(id, true)

      return res.status(200).send(customer)
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },

  async getList(req, res) {
    try {
      const { list_size = 10, page = 1 } = req.query

      const customers = await service.getList(list_size, page)
      return res.status(200).send(customers)
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },

  async create(req, res) {
    try {
      const createBody = req.body
      const result = await service.create(createBody)

      return res.status(200).send(result)
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id
      const updateBody = req.body

      const updated = await service.update(id, updateBody)

      return res.status(200).send(updated)
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id
      await service.delete(id)

      return res.status(200).send({ msg: 'successed' })
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },
}
