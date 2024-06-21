import Sequelize, { Model } from 'sequelize'

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
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

  // static associate(models) {}
}

export default Transaction
