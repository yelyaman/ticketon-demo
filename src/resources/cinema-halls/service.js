import CinemaHall from "../../db/models/CinemaHall.js";

export default {
  async getOne(id) {
    const cinemaHall = await CinemaHall.findByPk(id);

    if (!cinemaHall) {
      throw new Error("Cinema hall not found");
    }

    return cinemaHall;
  },

  async getList(list_size, page) {
    const cinemaHalls = await CinemaHall.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    });

    return cinemaHalls;
  },

  async create(createBody) {
    return await CinemaHall.bulkCreate(createBody);
  },

  async update(id, updateBody) {
    const cinemaHall = await CinemaHall.findByPk(id);

    if (!cinemaHall) {
      throw new Error("Cinema hall not found");
    }

    return await cinemaHall.update(updateBody, {
      returning: true,
    });
  },

  async delete(id) {
    const cinemaHall = await CinemaHall.findByPk(id);

    if (!cinemaHall) {
      throw new Error("Cinema hall not found");
    }

    await cinemaHall.destroy();
  },
};
