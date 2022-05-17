const Sequelize = require("sequelize");
const db = require("../config/database");
const Event_images = require("./Event_images");

const Event = db.define(
  "Event",
  {
    event_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
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
        event_id
      },
      include: [{ model: Event_images, attributes: ['path'] }],
    });
    return infoEvent;
  } catch (error) {
    throw error;
  }
};

Event.hasMany(Event_images, {
  foreignKey : "event_id",
  sourceKey: "event_id"
});
Event_images.belongsTo(Event ,{foreignKey: "event_id"})

module.exports = Event;
