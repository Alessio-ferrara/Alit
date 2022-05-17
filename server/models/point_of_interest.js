const Sequelize = require('sequelize');
const db = require('../config/database')
const point_of_interest = db.define('point_of_interest', {
    poi_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    visit_info: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lat: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lang: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'point_of_interest',
    schema: 'Alit',
    timestamps: false
  });
module.exports = point_of_interest;
