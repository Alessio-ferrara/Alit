'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event_image.belongsTo(models.event, {
        foreignKey: 'event_id'
      })
    }
  }
  event_image.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    event_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event_image',
  });
  return event_image;
};