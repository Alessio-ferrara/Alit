'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class op_hours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      op_hours.belongsTo(models.service, {
        foreignKey: "service_id"
      })
    }
  }
  op_hours.init({
    day: DataTypes.STRING,
    s_hour: DataTypes.TIME,
    c_hour: DataTypes.TIME,
    service_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'op_hours',
  });
  return op_hours;
};