const Sequelize = require('sequelize')
const db = require('../config/database')
const poi_types = db.define('poi_types', {
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'poi_types',
    schema: 'Alit',
    timestamps: false
  });

  module.exports = poi_types;
