"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("poi_itineraries", [
      {
        itinerary_id: 1,
        poi_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 1,
        poi_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 1,
        poi_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 1,
        poi_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 2,
        poi_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 2,
        poi_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 2,
        poi_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 2,
        poi_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 3,
        poi_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 3,
        poi_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 3,
        poi_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 3,
        poi_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 4,
        poi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 4,
        poi_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 4,
        poi_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 4,
        poi_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 5,
        poi_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 5,
        poi_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itinerary_id: 5,
        poi_id: 18,
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
