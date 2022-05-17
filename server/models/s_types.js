const Sequelize = require('sequelize');
const db = require('../config/database')
const s_types = db.define('s_types', {
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
    tableName: 's_types',
    schema: 'Alit',
    timestamps: false
  });
module.exports = s_types;
