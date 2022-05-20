'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const poiType = [
      {
        name: "Museum",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Monument",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Church",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Park",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Square",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mosque",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Stadium",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lake",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    
    await queryInterface.bulkInsert("poi_types", poiType);
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
