import { Movie } from "@/database"

export default {
  async getOne(id) {
    const movie = await Movie.findByPk(id)

    if (!movie) {
      throw new Error('Movie not found')
    }

    return movie
  },

  async getList(list_size, page) {
    const movies = await Movie.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    })

    return movies
  },

  async create(createBody) {
    return await Movie.bulkCreate(createBody)
  },

  async update(id, updateBody) {
    const movie = await Movie.findByPk(id)

    if (!movie) {
      throw new Error('Movie not found')
    }

    return await movie.update(updateBody, {
      returning: true,
    })
  },

  async delete(id) {
    const movie = await Movie.findByPk(id)

    if (!movie) {
      throw new Error('Movie not found')
    }

    await movie.destroy()
  },
}
