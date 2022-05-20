const Sequelize = require('sequelize')
const db = require('../config/database')
const Poi_types = db.define('poi_types', {
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    tableName: 'poi_types',
    schema: 'Alit',
    timestamps: false
  });

  module.exports = Poi_types;
