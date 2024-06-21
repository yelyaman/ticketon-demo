import Sequelize, { Model } from 'sequelize'

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        cinema_id: Sequelize.UUID,
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

  static associate(models) {
    this.belongsTo(models.Cinema, { foreignKey: 'cinema_id', as: 'cinema' })
  }
}

export default Customer
