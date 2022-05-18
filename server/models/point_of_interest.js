const Sequelize = require("sequelize");
const db = require("../config/database");
const Poi_images = require("./poi_images");
const Poi_types = require("./poi_types");
const Point_of_interest = db.define(
  "point_of_interest",
  {
    poi_id: {
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
    visit_info: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lang: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    main_image: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    tableName: "point_of_interest",
    schema: "Alit",
    timestamps: false,
  }
);

Point_of_interest.getInfo = async function (poi_id) {
  try {
    const info = await Point_of_interest.findOne({
      where: {
        poi_id,
      },
      include: [
        { model: Poi_images, attributes: ["path"] },
        { model: Poi_types, attributes: ["name"] },
      ],
    });
    return info;
  } catch (error) {
    throw error;
  }
};

Point_of_interest.getPOIs = async function() {
  try {
    const pois = await Point_of_interest.findAll({
      include: [{model: Poi_types, attributes: ['name']}]
    })
    return pois;
  } catch (error) {
    throw error
  }
}

Point_of_interest.hasMany(Poi_images, {
  foreignKey: "poi_id",
  sourceKey: "poi_id",
});
Poi_images.belongsTo(Point_of_interest, { foreignKey: "poi_id" });

Poi_types.hasMany(Point_of_interest, {
  foreignKey: "type_id",
  sourceKey: "type_id",
});
Point_of_interest.belongsTo(Poi_types, { foreignKey: "type_id" });

module.exports = Point_of_interest;
