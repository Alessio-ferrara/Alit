'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const poiType = [
      {
        name: "Museum",
        icon: "fa-solid fa-landmark",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Monument",
        icon: "fa-solid fa-monument",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Church",
        icon: "fa-solid fa-church",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Park",
        icon:"fa-solid fa-bench-tree",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Square",
        icon:"fa-solid fa-map-location-dot",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mosque",
        icon:"fa-solid fa-mosque",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Stadium",
        icon:"fa-solid fa-futbol",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lake",
        icon:"fa-solid fa-water",
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
