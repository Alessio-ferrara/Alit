'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      s_type.hasMany(models.service, {
        foreignKey: "type_id"
      })
    }
  }
  s_type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 's_type',
  });
  return s_type;
};