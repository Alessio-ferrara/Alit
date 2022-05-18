const Sequelize = require('sequelize');
const db = require('../config/database')
const s_types = require('s_types')
const Services = db.define('services', {
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false
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


Services.getAllServices = async function () {
    try {
        const services = await Services.findAll();
        return services;
    } catch (error) {
        throw error;
    }
};

Services.getServicesByType = async function (type) {
    try {
        const services = await Services.findAll({
            include: [{
                model: s_types,
                where: {name: type}
            }],
        });
        return services;
    } catch (error) {
        throw error;
    }
};
//todo think about this :)
Services.getMainServices = async function () {
    try {
        const services = await Services.findAll({
            where: {
                service_id: [1,2,3,4]
            },
        });
        return services;
    } catch (error) {
        throw error;
    }
};


module.exports = Services