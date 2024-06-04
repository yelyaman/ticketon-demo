import Sequelize, { Model } from 'sequelize'

class Country extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        name: Sequelize.STRING,
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
    this.hasMany(models.City, { foreignKey: 'country_id', as: 'cities' })
  }
}

export default Country
