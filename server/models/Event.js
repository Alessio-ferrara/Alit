'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.hasMany(models.event_image, {
        foreignKey: "event_id"
      })
      event.belongsTo(models.point_of_interest, {
        foreignKey: "poi_id"
      })
    }
  }
  event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    main_image: DataTypes.STRING,
    datetime: DataTypes.DATE,
    info: DataTypes.STRING,
    poi_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};