const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('point_of_interest', {
    poi_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    visit_info: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lang: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'point_of_interest',
    schema: 'Alit',
    timestamps: false
  });
};
