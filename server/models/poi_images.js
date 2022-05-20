const Sequelize = require('sequelize');
const db = require('../config/database')
const poi_images = db.define('poi_images', {
    image_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    path: {
      type: Sequelize.STRING,
      allowNull: false
    },
    poi_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "point_of_interest",
        key: "poi_id"
      }
    }
  }, {

    tableName: 'poi_images',
    schema: 'Alit',
    timestamps: false,
    freezeTableName: true
  });

  
  module.exports = poi_images;
