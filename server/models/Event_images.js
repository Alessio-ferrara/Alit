const Sequelize = require('sequelize');
const db = require("../config/database")

const event_images = db.define('event_images', {
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
    event_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "event",
        key: "event_id"
      }
    }
  }, {
    tableName: 'event_images',
    schema: 'Alit',
    timestamps: false,
    freezeTableName: true
  });

  module.exports = event_images;