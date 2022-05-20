'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class point_of_interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      point_of_interest.hasMany(models.poi_image, {
        foreignKey: "poi_id"
      })
      point_of_interest.hasMany(models.event, {
        foreignKey: "poi_id"
      })
      point_of_interest.belongsTo(models.poi_types, {
        foreignKey: "type_id"
      })
      point_of_interest.belongsToMany(models.itinerary, {
        through: "poi_itinerary",
        foreignKey: "poi_id"
      })
    }
  }
  point_of_interest.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    visit_info: DataTypes.STRING,
    lat: DataTypes.STRING,
    lang: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    main_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'point_of_interest',
  });
  return point_of_interest;
};