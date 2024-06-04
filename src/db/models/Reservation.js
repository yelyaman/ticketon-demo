import Sequelize, { Model } from 'sequelize'

class Reservation extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        client_id: Sequelize.UUID,
        customer_id: Sequelize.UUID,
        schedule_id: Sequelize.UUID,
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

export default Reservation
