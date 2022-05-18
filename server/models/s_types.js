const Sequelize = require('sequelize');
const db = require('../config/database')
const S_types = db.define('s_types', {
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

    tableName: 's_types',
    schema: 'Alit',
    timestamps: false
  });
module.exports = S_types;
