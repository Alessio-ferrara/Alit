'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('point_of_interests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(10000)
      },
      visit_info: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      lang: {
        type: Sequelize.STRING
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "poi_types",
          key: "id",
          as: "type_id"
        }
      },
      main_image: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('point_of_interests');
  }
};