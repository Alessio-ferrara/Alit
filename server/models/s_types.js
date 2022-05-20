const Sequelize = require('sequelize');
const db = require('../config/database')
const Services = require("./services");

const s_types = db.define('s_types', {
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {

    tableName: 's_types',
    schema: 'Alit',
    timestamps: false,
    freezeTableName: true
  });

  
module.exports = s_types;
