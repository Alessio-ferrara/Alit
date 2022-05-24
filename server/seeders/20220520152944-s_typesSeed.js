'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('s_types', [
      {
        name: "Pharmacy",
        icon: "fa-thin fa-house-medical",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hotel",
        icon: "fa-thin fa-hotel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Resturant",
        icon: "fa-thin fa-utensils",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shopping center",
        icon: "fa-thin fa-shop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hospital",
        icon: "fa-thin fa-hospital",
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
