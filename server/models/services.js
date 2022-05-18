const Sequelize = require('sequelize');
const db = require('../config/database')
const Services = db.define('services', {
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    tableName: 'services',
    schema: 'Alit',
    timestamps: false
  });
module.exports = Services