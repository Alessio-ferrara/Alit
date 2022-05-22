"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("poi_images", [
      {
        name: "Photo1",
        path: "/path/photo",
        poi_id: "7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo2",
        path: "/path/photo",
        poi_id: "7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo3",
        path: "/path/photo",
        poi_id: "7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo1",
        path: "/path/photo",
        poi_id: "8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo2",
        path: "/path/photo",
        poi_id: "8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo3",
        path: "/path/photo",
        poi_id: "8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo1",
        path: "/path/photo",
        poi_id: "9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo2",
        path: "/path/photo",
        poi_id: "9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photo3",
        path: "/path/photo",
        poi_id: "9",
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
