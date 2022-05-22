'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class poi_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      poi_image.belongsTo(models.point_of_interest, {
        foreignKey: "poi_id"
      })
    }
  }
  poi_image.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    poi_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'poi_image',
  });
  return poi_image;
};