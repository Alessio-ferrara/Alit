const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Op_hours', {
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    s_hour: {
      type: DataTypes.TIME,
      allowNull: false
    },
    c_hour: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Op_hours',
    schema: 'Alit',
    timestamps: false
  });
};
