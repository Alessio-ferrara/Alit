"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("poi_images", [
      {
        name: "Photo1",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo2",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo3",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo1",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo2",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo3",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo1",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo2",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo3",
        path: "images/pois/skanderbeg_square.jpeg",
        poi_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
