const Sequelize = require('sequelize');
const db = require('../config/database')
const services = db.define('services', {
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false
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
    sequelize,
    tableName: 'services',
    schema: 'Alit',
    timestamps: false
  });
module.exports = services