"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class s_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      s_type.hasMany(models.service, {
        foreignKey: "type_id",
      });
    }

    static getAllServices = async function () {
      try {
        const types = await s_type.findAll({
          include: [
            {
              model: sequelize.model("service"),
            },
          ],
        });
        return types;
      } catch (error) {
        throw error;
      }
    };

    static getServicesByType = async function (type) {
      try {
        const types = await s_type.findAll({
          include: [
            {
              model: sequelize.model('service'),
              where: { type_id: type },
            },
          ],
        });
        return types;
      } catch (error) {
        throw error;
      }
    };
    
    static getMainServices = async function () {
      try {
        const types = await s_type.findAll({
          include: [
            {
              model: sequelize.model('service'),
              where: {
                id: [1, 3, 4],
              },
            },
          ],
        });
        return types;
      } catch (error) {
        throw error;
      }
    };
    }
  
  s_type.init(
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "s_type",
    }
  );
  return s_type;
};
