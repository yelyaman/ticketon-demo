import { TicketonFile } from '@/database'

export default {
  async getOne(id, excludeBuffer) {
    const file = await TicketonFile.findByPk(id)

    if (!file) {
      throw new Error('File not found')
    }

    if (excludeBuffer) {
      delete file.dataValues.buffer
    }

    return file.dataValues
  },

  async getList(list_size, page) {
    const files = await TicketonFile.findAll({
      limit: list_size,
      offset: (page - 1) * list_size,
      attributes: { exclude: ['buffer'] },
    })

    return files
  },

  async upload(files) {
    const uploadedFiles = await TicketonFile.bulkCreate(files, {
      returning: true,
      raw: true,
    })

    return uploadedFiles.map(file => {
      const { buffer, ...rest } = file.dataValues
      return rest
    })
  },

  async update(id, newFile) {
    const file = await TicketonFile.findByPk(id)

    if (!file) {
      throw new Error('File not found')
    }

    const updatedFile = await file.update(newFile, {
      returning: true,
    })

    delete updatedFile.dataValues.buffer
    return updatedFile
  },

  async delete(id) {
    const file = await TicketonFile.findByPk(id)

    if (!file) {
      throw new Error('File not found')
    }

    await file.destroy()
  },
}
