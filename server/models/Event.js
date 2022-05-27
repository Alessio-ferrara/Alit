"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.hasMany(models.event_image, {
        foreignKey: "event_id",
      });
      event.belongsTo(models.point_of_interest, {
        foreignKey: "poi_id",
      });
    }

    static getInfo = async function (event_id) {
      try {
        const infoEvent = await event.findOne({
          where: {
            id: event_id,
          },
          include: [{ model: sequelize.model('event_image'), attributes: ["path"] }, {model: sequelize.model('point_of_interest'), attributes: ["name"]}],
        });
        return infoEvent;
      } catch (error) {
        throw error;
      }
    };
    static getAllEvents = async function () {
      try {
        const events = await event.findAll();
        return events;
      } catch (error) {
        throw error;
      }
    };

    static getSummerEvents = async function () {
      try {
        const summerEvents = await event.findAll({
          where: {
            [Op.and]: [
              sequelize.where(
                sequelize.fn("date_part", "month", sequelize.col("datetime")),
                {
                  [Op.in]: [6, 7, 8],
                }
              ),
              sequelize.where(
                sequelize.fn("date_part", "year", sequelize.col("datetime")),
                new Date().getFullYear()
              ),
            ],
          },
        });
        return summerEvents;
      } catch (error) {
        throw error;
      }
    };
    static getWinterEvents = async function () {
      try {
        const winterEvents = await event.findAll({
          where: {
            [Op.and]: [
              sequelize.where(
                sequelize.fn("date_part", "month", sequelize.col("datetime")),
                {
                  [Op.in]: [1, 2, 12],
                }
              ),
              sequelize.where(
                sequelize.fn("date_part", "year", sequelize.col("datetime")),
                new Date().getFullYear()
              ),
            ],
          },
        });
        return winterEvents;
      } catch (error) {
        throw error;
      }
    };
    static getYearEvents = async function () {
      try {
        const yearEvents = await event.findAll({
          where: sequelize.where(
            sequelize.fn("date_part", "year", sequelize.col("datetime")),
            new Date().getFullYear()
          ),
        });
        return yearEvents;
      } catch (error) {
        throw error;
      }
    };
  }
  event.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      main_image: DataTypes.STRING,
      datetime: DataTypes.DATE,
      info: DataTypes.STRING,
      poi_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "event",
    }
  );

  
  
  return event;
};
