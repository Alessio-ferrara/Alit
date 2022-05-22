'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('s_types', [
      {
        name: "Pharmacy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hotel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Resturant",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shopping center",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hospital",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])

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
