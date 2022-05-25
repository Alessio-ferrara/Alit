'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itinerary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      itinerary.belongsToMany(models.point_of_interest, {
        through: "poi_itinerary",
        foreignKey: "itinerary_id"
      })
    }

    static getAllItineraries = async function () {
      try {
        var itineraries = await itinerary.findAll({
          include: [
            {
              model: sequelize.model('point_of_interest'),
              attributes: ['name', ['id', 'poi_id']]
            },
          ]
        });

        // for (let i in itineraries) {
        //     const poi = itineraries[i]['point_of_interests'];
        //     const size = poi.length;
        //     itineraries[i].poi_start = poi[0];
        //     itineraries[i].poi_end = poi[size - 1];
        // }

        let itinerariesLast = [];
        itineraries.forEach(itinerary => {
          let itinerariesItem = {};
          itinerariesItem.id = itinerary.dataValues.id;
          itinerariesItem.name = itinerary.dataValues.name;
          itinerariesItem.description = itinerary.dataValues.description;
          itinerariesItem.duration = itinerary.dataValues.duration;
          const poi = itinerary.dataValues.point_of_interests;
          const size = poi.length;
          itinerariesItem.poi_start = poi[0];
          itinerariesItem.poi_end = poi[size - 1];
          itinerariesLast.push(itinerariesItem)
        });
        return itinerariesLast;
      } catch (error) {
        throw error;
      }
    };
    
    static getInfo = async function (itinerary_id) {
      try {
        const itineraries = await itinerary.findOne({
          include: [
            {
              model: sequelize.model('point_of_interest'),
              attributes: ['name', 'id', 'main_image']
            },
          ],
          where: {
            id: itinerary_id,
          },
        });
        return itineraries;
      } catch (error) {
        throw error;
      }
    };
  }
  itinerary.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'itinerary',
  });
  return itinerary;
};