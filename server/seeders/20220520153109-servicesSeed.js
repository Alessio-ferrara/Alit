"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("services", [
      {
        type_id: 1,
        name: "Phara1",
        address: "Random address 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: "Phara2",
        address: "Random address 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: "Phara3",
        address: "Random address 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: "Hotel1",
        address: "Random address ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: "Hotel2",
        address: "Random address ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: "Hotel3",
        address: "Random address ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3,
        name: "Resturant1",
        address: "Random address ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3,
        name: "Resturant2",
        address: "Random address ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3,
        name: "Resturant3",
        address: "Random address ",
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
