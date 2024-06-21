import Sequelize, { Model } from 'sequelize'

class Consumer extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        middle_name: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
        paranoid: true,
        timestamps: true,
        underscored: true,
      },
    )

    return this
  }
}

export default Consumer
