const Sequelize = require('sequelize');
const db = require('../config/database')
const s_types = require('./s_types')
const Services = db.define('services', {
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: "s_types",
          key: "type_id"
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    tableName: 'services',
    schema: 'Alit',
    timestamps: false
  });


s_types.hasMany(Services, {
    foreignKey: "type_id",
    sourceKey: "type_id",
});
Services.belongsTo(s_types, { foreignKey: "type_id" });

Services.getAllServices = async function () {
    try {
        const types = await s_types.findAll({
            include : [
                {
                    model : Services
                }
            ]
        });
        return types;
    } catch (error) {
        throw error;
    }
};

Services.getServicesByType = async function (type) {
    try {
        const types = await s_types.findAll({
            include : [
                {
                    model : Services,
                    where: {type_id: type}
                }
            ]
        });
        return types;
    } catch (error) {
        throw error;
    }
};

Services.getMainServices = async function () {
    try {
        const types = await s_types.findAll({
            include : [
                {
                    model : Services,
                    where : {
                        service_id: [1,3,4]
                    }
                }
            ]
        });
        return types;
    } catch (error) {
        throw error;
    }
};


module.exports = Services