import service from './service'

export default {
  async getOne(req, res) {
    try {
      const { id } = req.params
      const movie = await service.getOne(id)

      return res.status(200).send(movie)
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },

  async getList(req, res) {
    try {
      const { list_size = 10, page = 1 } = req.query

      const list = await service.getList(list_size, page)
      return res.status(200).send(list)
    } catch (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  },

  async create(req, res) {
    try {
      const createBody = req.body
      const created = await service.create(createBody)

      return res.status(200).send(created)
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
