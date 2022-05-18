const Sequelize = require('sequelize');
const db = require('../config/database')
const Itinerary = db.define('Itinerary', {
    itinerary_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {

    tableName: 'Itinerary',
    schema: 'Alit',
    timestamps: false
  });

Itinerary.getAllItineraries = async function () {
    try {
        //todo get poi list?
        const itineraries = await Itinerary.findAll({});
        return itineraries;
    } catch (error) {
        throw error;
    }
};

Itinerary.getInfo = async function (itinerary_id) {
    try {
        //todo get poi list?
        const itineraries = await Itinerary.findOne({
            where : {
                itinerary_id
            }
        });
        return itineraries;
    } catch (error) {
        throw error;
    }
};

  module.exports = Itinerary;
