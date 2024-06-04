import Sequelize, { Model } from 'sequelize'

class CinemaHall extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        numeration: { type: Sequelize.INTEGER, allowNull: false },
        cinema_id: { type: Sequelize.UUID, allowNull: false },
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
    this.hasMany(models.Seat, {
      foreignKey: 'cinema_hall_id',
      as: 'hall_seats',
    })
    this.belongsTo(models.Cinema, { foreignKey: 'cinema_id', as: 'cinema' })
  }
}

export default CinemaHall
