"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("poi_itineraries", [
      {
        itinerary_id: 1,
        poi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 1,
        poi_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 1,
        poi_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 1,
        poi_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 2,
        poi_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 2,
        poi_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 3,
        poi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 3,
        poi_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 3,
        poi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 4,
        poi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 5,
        poi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 5,
        poi_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 5,
        poi_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 5,
        poi_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 6,
        poi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        itinerary_id: 6,
        poi_id: 4,
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
