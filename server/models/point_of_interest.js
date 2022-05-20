const Sequelize = require("sequelize");
const db = require("../config/database");
const Poi_images = require("./poi_images");
const Poi_types = require("./poi_types");
const point_of_interest = db.define(
  "point_of_interest",
  {
    poi_id: {
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
      references: {
        model: "poi_types",
        key: "type_id"

      }
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
    freezeTableName: true
  }
);

point_of_interest.getInfo = async function (poi_id) {
  try {
    const info = await point_of_interest.findOne({
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

point_of_interest.getPOIs = async function() {
  try {
    const pois = await point_of_interest.findAll({
      include: [{model: Poi_types, attributes: ['name']}]
    })
    return pois;
  } catch (error) {
    throw error
  }
}

point_of_interest.hasMany(Poi_images, {
  foreignKey: "poi_id",
  sourceKey: "poi_id",
});
Poi_images.belongsTo(point_of_interest, { foreignKey: "poi_id" });

Poi_types.hasMany(Point_of_interest, {
  foreignKey: "type_id",
  sourceKey: "type_id",
});
point_of_interest.belongsTo(Poi_types, { foreignKey: "type_id" });



module.exports = point_of_interest;
