'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class poi_itinerary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  poi_itinerary.init({
    itinerary_id: DataTypes.INTEGER,
    poi_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'poi_itinerary',
  });
  return poi_itinerary;
};