const Sequelize = require('sequelize');
const db = require('../config/database')
const Op_hours = db.define('Op_hours', {
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'Op_hours',
    schema: 'Alit',
    timestamps: false
  });

  module.exports = Op_hours;
