const Sequelize = require('sequelize');
const db = require('../config/database')
const op_hours = db.define('op_hours', {
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "services",
        key: "service_id"
      }
    },
    day: {
      type: Sequelize.STRING,
      allowNull: false
    },
    s_hour: {
      type: Sequelize.TIME,
      allowNull: false
    },
    c_hour: {
      type: Sequelize.TIME,
      allowNull: true
    }
  }, {
    tableName: 'op_hours',
    schema: 'Alit',
    timestamps: false,
    freezeTableName: true
  });

  

  module.exports = op_hours;
