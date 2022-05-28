'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      service.belongsTo(models.s_type, {
        foreignKey: "type_id"
      })
      service.hasMany(models.op_hours, {
        foreignKey: "service_id" 
      })
    }

  }
  service.init({
    type_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'service',
  });
  return service;
};