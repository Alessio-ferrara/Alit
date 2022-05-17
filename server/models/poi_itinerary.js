const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poi_itinerary', {
    itinerary_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    poi_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'poi_itinerary',
    schema: 'Alit',
    timestamps: false
  });
};
