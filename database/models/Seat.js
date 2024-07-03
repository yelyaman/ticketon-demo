import { SEAT_STATUSES } from '@/src/utils/enums'
import Sequelize, { Model } from 'sequelize'

class Seat extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        numeration: { type: Sequelize.INTEGER, allowNull: false },
        seat_status: {
          type: Sequelize.ENUM({values: Object.values(SEAT_STATUSES)}),
          allowNull: false,
          defaultValue: SEAT_STATUSES.FREE,
        },
        hall_id: { type: Sequelize.UUID, allowNull: false },
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
    this.belongsTo(models.CinemaHall, {
      foreignKey: 'hall_id',
      as: 'cinema_hall',
    })
  }
}

export default Seat
