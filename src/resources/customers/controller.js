import service from "./service.js";

export default {
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const customer = await service.getOne(id, true);

      return res.status(200).send(customer);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },

  async getList(req, res) {
    try {
      const { list_size = 10, page = 1 } = req.query;

      const customers = await service.getList(list_size, page);
      return res.status(200).send(customers);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },

  async create(req, res) {
    try {
      const result = await service.create(req.body);

      return res.status(200).send(result);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const updateCustomerBody = req.body;

      const updatedCustomer = await service.update(id, updateCustomerBody);

      return res.status(200).send(updatedCustomer);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      await service.delete(id);

      return res.status(200).send({ msg: "successed" });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },
};
