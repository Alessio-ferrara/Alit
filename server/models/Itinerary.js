'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itinerary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      itinerary.belongsToMany(models.point_of_interest, {
        through: "poi_itinerary",
        foreignKey: "itinerary_id"
      })
    }
  }
  itinerary.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'itinerary',
  });
  return itinerary;
};