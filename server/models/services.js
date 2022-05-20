const Sequelize = require("sequelize");
const db = require("../config/database");
const s_types = require("./s_types");
const services = db.define(
  "services",
  {
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "s_types",
        key: "type_id",
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "services",
    schema: "Alit",
    timestamps: false,
    freezeTableName: true
  }
);

s_types.hasMany(services, {
  foreignKey: "type_id",
  sourceKey: "type_id",
});
services.belongsTo(s_types, { foreignKey: "type_id" });

services.getAllServices = async function () {
  try {
    const types = await s_types.findAll({
      include: [
        {
          model: services,
        },
      ],
    });
    return types;
  } catch (error) {
    throw error;
  }
};

services.getServicesByType = async function (type) {
  try {
    const types = await s_types.findAll({
      include: [
        {
          model: services,
          where: { type_id: type },
        },
      ],
    });
    return types;
  } catch (error) {
    throw error;
  }
};

services.getMainServices = async function () {
  try {
    const types = await s_types.findAll({
      include: [
        {
          model: services,
          where: {
            service_id: [1, 3, 4],
          },
        },
      ],
    });
    return types;
  } catch (error) {
    throw error;
  }
};


module.exports = services;
