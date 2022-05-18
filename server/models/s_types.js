const Sequelize = require('sequelize');
const db = require('../config/database')
const Services = require("./services");

const S_types = db.define('s_types', {
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {

    tableName: 's_types',
    schema: 'Alit',
    timestamps: false
  });

S_types.hasMany(Services, {
    foreignKey: "type_id",
    sourceKey: "type_id",
});
Services.belongsTo(S_types, { foreignKey: "type_id" });

module.exports = S_types;
