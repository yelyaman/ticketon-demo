import Client from "../../db/models/Movie.js";

export default {
  async getOne(id) {
    const client = await Client.findByPk(id);

    if (!client) {
      throw new Error("Client not found");
    }

    return client;
  },

  async getList(list_size, page) {
    const clients = await Client.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
    });

    return clients;
  },

  async create(createBody) {
    return await Client.bulkCreate(createBody);
  },

  async update(id, updateBody) {
    const client = await Client.findByPk(id);

    if (!client) {
      throw new Error("cClient not found");
    }

    return await client.update(updateBody, {
      returning: true,
    });
  },

  async delete(id) {
    const client = await Client.findByPk(id);

    if (!client) {
      throw new Error("Client not found");
    }

    await client.destroy();
  },
};
