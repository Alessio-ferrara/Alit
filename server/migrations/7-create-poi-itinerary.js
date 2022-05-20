'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('poi_itineraries', {
      itinerary_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "itineraries",
          key: "id",
          as: "itinerary_id"
        }
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
    await queryInterface.dropTable('poi_itineraries');
  }
};