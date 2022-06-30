'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(10000)
      },
      description: {
        type: Sequelize.STRING(10000)
      },
      main_image: {
        type: Sequelize.STRING
      },
      datetime: {
        type: Sequelize.DATE
      },
      info: {
        type: Sequelize.STRING
      },
      poi_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('events');
  }
};