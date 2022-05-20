"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("itineraries", [
      {
        name: "Itinerary",
        duration: 3,
        description: "Itinerary description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Itinerary",
        duration: 4,
        description: "Itinerary description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Itinerary",
        duration: 3,
        description: "Itinerary description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Itinerary",
        duration: 5,
        description: "Itinerary description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Itinerary",
        duration: 3,
        description: "Itinerary description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Itinerary",
        duration: 4,
        description: "Itinerary description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
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
