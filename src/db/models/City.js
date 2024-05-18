import Sequelize, { Model } from 'sequelize';

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        name: Sequelize.STRING,
        country_id: { type: Sequelize.UUID, allowNull: false },
      },
      {
        sequelize,
        paranoid: true,
        timestamps: true,
        underscored: true,
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Cinema, { foreignKey: 'city_id', as: 'cinemas' });
    this.belongsTo(models.Country, { foreignKey: 'country_id', as: 'country' });
  }
}

export default City;
