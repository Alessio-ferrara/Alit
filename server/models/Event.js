const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const db = require("../config/database");
const Event_images = require("./Event_images");

const Event = db.define(
  "Event",
  {
    event_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    main_image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    datetime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    info: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    poi_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Event",
    schema: "Alit",
    timestamps: false,
  }
);

Event.getInfo = async function (event_id) {
  try {
    const infoEvent = await Event.findOne({
      where: {
        event_id,
      },
      include: [{ model: Event_images, attributes: ["path"] }],
    });
    return infoEvent;
  } catch (error) {
    throw error;
  }
};

Event.getAllEvents = async function () {
  try {
    const events = await Event.findAll();
    return events;
  } catch (error) {
    throw error;
  }
};
Event.getSummerEvents = async function () {
  try {
    const summerEvents = await Event.findAll({
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("date_part", "month", Sequelize.col("datetime")),
            {
              [Op.in]: [6, 7, 8],
            }
          ),
          Sequelize.where(
            Sequelize.fn("date_part", "year", Sequelize.col("datetime")),
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
Event.getWinterEvents = async function () {
  try {
    const winterEvents = await Event.findAll({
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("date_part", "month", Sequelize.col("datetime")),
            {
              [Op.in]: [1, 2, 12],
            }
          ),
          Sequelize.where(
            Sequelize.fn("date_part", "year", Sequelize.col("datetime")),
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
Event.getYearEvents = async function () {
  try {
    const yearEvents = await Event.findAll({
      where: Sequelize.where(
        Sequelize.fn("date_part", "year", Sequelize.col("datetime")),
        new Date().getFullYear()
      ),
    });
    return yearEvents;
  } catch (error) {
    throw error;
  }
};

Event.hasMany(Event_images, {
  foreignKey: "event_id",
  sourceKey: "event_id",
});
Event_images.belongsTo(Event, { foreignKey: "event_id" });

module.exports = Event;
