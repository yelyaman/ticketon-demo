import Sequelize, { Model } from 'sequelize';

class Schedule extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        cinema_id: Sequelize.UUID,
        movie_id: Sequelize.UUID,
        start_at: Sequelize.DATEONLY,
        end_at: Sequelize.DATEONLY

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
  }
}

export default Schedule;
