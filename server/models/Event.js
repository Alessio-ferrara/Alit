const Sequelize = require('sequelize');
const db = require('../config/database')
const Event = db.define('Event', {
    event_id: {
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
    datetime: {
      type: Sequelize.DATE,
      allowNull: false
    },
    info: {
      type: Sequelize.STRING,
      allowNull: true
    },
    poi_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Event',
    schema: 'Alit',
    timestamps: false
  });

module.exports = Event;
