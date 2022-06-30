'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('s_types', [
      {
        name: "Pharmacy",
        icon: "fa-solid fa-lg fa-house-medical",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hotel",
        icon: "fa-solid fa-lg fa-hotel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Resturant",
        icon: "fa-solid fa-lg fa-utensils",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shopping center",
        icon: "fa-solid fa-lg fa-shop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hospital",
        icon: "fa-solid fa-lg fa-hospital",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Emergecy numbers",
        icon: "fa-solid fa-lg fa-phone",
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
