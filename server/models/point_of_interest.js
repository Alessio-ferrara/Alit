"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class point_of_interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      point_of_interest.hasMany(models.poi_image, {
        foreignKey: "poi_id",
      });
      point_of_interest.hasMany(models.event, {
        foreignKey: "poi_id",
      });
      point_of_interest.belongsTo(models.poi_types, {
        foreignKey: "type_id",
      });
      point_of_interest.belongsToMany(models.itinerary, {
        through: "poi_itinerary",
        foreignKey: "poi_id",
      });
    }

    static getInfo = async function (poi_id) {
      try {
        let info = await point_of_interest.findOne({
          where: {
            id: poi_id,
          },
          include: [
            { model: sequelize.model("poi_image"), attributes: ["path"] },
            { model: sequelize.model("poi_types"), attributes: ["name"] },
            {
              model: sequelize.model("event"),
              attributes: ["id", "name", "main_image", "datetime"],
            },
            {
              model: sequelize.model("itinerary"),
              include: [
                {
                  model: sequelize.model("point_of_interest"),
                  attributes: ["name", ["id", "poi_id"]],
                },
              ],
            },
          ],
        });

        let itinerariesLast = [];
        info.itineraries.forEach((itinerary) => {
          let itinerariesItem = {};
          itinerariesItem.id = itinerary.dataValues.id;
          itinerariesItem.name = itinerary.dataValues.name;
          itinerariesItem.duration = itinerary.dataValues.duration;
          const poi = itinerary.dataValues.point_of_interests;
          const size = poi.length;
          itinerariesItem.poi_start = poi[0];
          itinerariesItem.poi_end = poi[size - 1];
          itinerariesLast.push(itinerariesItem);
        });
        info.dataValues.itinerariesLast = itinerariesLast;
        return info;
      } catch (error) {
        throw error;
      }
    };

    static getPOIs = async function () {
      try {
        const pois = await point_of_interest.findAll({
          include: [
            { model: sequelize.model("poi_types"), attributes: ["name"] },
          ],
        });
        return pois;
      } catch (error) {
        throw error;
      }
    };
  }
  point_of_interest.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      visit_info: DataTypes.STRING,
      lat: DataTypes.STRING,
      lang: DataTypes.STRING,
      type_id: DataTypes.INTEGER,
      main_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "point_of_interest",
    }
  );
  return point_of_interest;
};
