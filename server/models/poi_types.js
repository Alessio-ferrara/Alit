"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class poi_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      poi_type.hasMany(models.point_of_interest, {
        foreignKey: "type_id",
      });
    }
  }
  poi_type.init(
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "poi_types",
    }
  );
  return poi_type;
};
