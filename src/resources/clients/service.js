import Customer from "../../db/models/Customer.js";

export default {
  async getOne(id, excludeBuffer) {
    const customer = await Customer.findByPk(id);

    if (!customer) {
      throw new Error("Customer not found");
    }

    if (excludeBuffer) {
      delete customer.dataValues.buffer;
    }

    return customer.dataValues;
  },

  async getList(list_size, page) {
    const customers = await Customer.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
      attributes: { exclude: ["buffer"] },
    });

    return customers;
  },

  async create(createCustomerBody) {
    return await Customer.bulkCreate(createCustomerBody, { returning: true });
  },

  async update(id, newFile) {
    const file = await Customer.findByPk(id);

    if (!file) {
      throw new Error("File not found");
    }

    const updatedFile = await file.update(newFile, {
      returning: true,
    });

    delete updatedFile.dataValues.buffer;
    return updatedFile;
  },

  async delete(id) {
    const file = await Customer.findByPk(id);

    if (!file) {
      throw new Error("File not found");
    }

    await file.destroy();
  },
};
