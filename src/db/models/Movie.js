import Sequelize, { Model } from 'sequelize';
import { SEAT_STATUSES } from '../../utils/enums';

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        numeration: { type: Sequelize.NUMBER, allowNull: false },
				seat_status_id: { type: Sequelize.STRING, allowNull: false, defaultValue: SEAT_STATUSES },
        hall_id: { type: Sequelize.UUID, allowNull: false },
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
    this.hasMany(models.Seat, { foreignKey: 'cinema_hall_id', as: 'hall_seats' });
    this.belongsTo(models.CinemaHall, { foreignKey: 'hall_id', as: 'cinema_hall' });
  }
}

export default Movie;
