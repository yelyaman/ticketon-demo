import Sequelize, { Model } from 'sequelize'

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        name: Sequelize.STRING,
        kinopoisk_id: Sequelize.STRING,
        rating: Sequelize.FLOAT,
        rated_count: Sequelize.INTEGER,
        ratingAgeLimit: Sequelize.INTEGER,
        genres: Sequelize.ARRAY(Sequelize.STRING),
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
    this.belongsTo(models.CinemaHall, {
      foreignKey: 'hall_id',
      as: 'cinema_hall',
    })
  }
}

export default Movie
