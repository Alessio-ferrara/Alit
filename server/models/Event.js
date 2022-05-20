const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const db = require("../config/database");
const event_images = require("./event_images");

const event = db.define(
  "event",
  {
    event_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
      references: {
        model: "point_of_interest",
        key: "poi_id"
      }
    },
  },
  {
    tableName: "event",
    schema: "Alit",
    timestamps: false,
    freezeTableName: true
  }
);

event.getInfo = async function (event_id) {
  try {
    const infoEvent = await event.findOne({
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

event.getAllEvents = async function () {
  try {
    const events = await event.findAll();
    return events;
  } catch (error) {
    throw error;
  }
};
event.getSummerEvents = async function () {
  try {
    const summerEvents = await event.findAll({
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
event.getWinterEvents = async function () {
  try {
    const winterEvents = await event.findAll({
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
event.getYearEvents = async function () {
  try {
    const yearEvents = await event.findAll({
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

event.hasMany(event_images, {
  foreignKey: "event_id",
  sourceKey: "event_id",
});
event_images.belongsTo(event, { foreignKey: "event_id" });



module.exports = event;
