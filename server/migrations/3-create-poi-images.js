'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('poi_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      poi_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "point_of_interests",
          key: "id",
          as: "poi_id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('poi_images');
  }
};