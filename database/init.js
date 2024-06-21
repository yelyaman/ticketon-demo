'use strict'
import config from '@/config'
import fs from 'fs'
import path from 'path'
import { DataTypes, Op, QueryTypes, Sequelize } from 'sequelize'
const { postgres } = config

const basename = path.basename(__filename)
const modelsPath = path.join(__dirname + '/models')

const sequelize = new Sequelize({
  ...config.postgres,
  dialectOptions: {
    application_name: postgres.applicationName,
  },
  pool: {
    // process count = 9 (tws;c2c;soap;bpm;v1;pos-proker;technodom;cron;smartbank)
    // max = pg max connections / process count
    // max = 100/9 = ~11
    max: postgres.maxPoolSize || 11,
    min: 0,
    acquire: 160000,
  },
})

const db = { sequelize, Sequelize, QueryTypes, Op }

fs.readdirSync(modelsPath)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .map(async file => {
    try {
      const model = require(path.join(modelsPath, file)).default
      db[model.name] = model.init(sequelize, DataTypes)
    } catch (err) {
      console.log(err)
    }
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.ping = async () => {
  const baseURL = `${postgres.host}:${postgres.port}`
  const date = new Date()
  try {
    await sequelize.authenticate()
    return {
      working: true,
      date,
      baseURL,
    }
  } catch (err) {
    return {
      working: false,
      reason: err.message,
      date,
      baseURL,
    }
  }
}

export default db
