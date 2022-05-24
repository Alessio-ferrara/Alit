'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const poiType = [
      {
        name: "Museum",
        icon: "fa-thin fa-landmark",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Monument",
        icon: "fa-thin fa-monument",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Church",
        icon: "fa-thin fa-church",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Park",
        icon:"fa-thin fa-bench-tree",
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
        icon:"fa-thin fa-mosque",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Stadium",
        icon:"fa-thin fa-futbol",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lake",
        icon:"fa-thin fa-water",
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
