import Sequelize, { Model } from 'sequelize'

class Cinema extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        name: { type: Sequelize.STRING, allowNull: false },
        address: { type: Sequelize.STRING, allowNull: false },
        description: Sequelize.STRING,
        city_id: { type: Sequelize.UUID, allowNull: false },
      },
      {
        sequelize,
        tableName: 'Cinema',
        paranoid: true,
        timestamps: true,
        underscored: true,
      },
    )

    return this
  }

  static associate(models) {
    this.hasMany(models.CinemaHall, {
      foreignKey: 'cinema_id',
      as: 'cinema_halls',
    })
    this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city' })
  }
}

export default Cinema
