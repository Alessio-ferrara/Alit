'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 7,
        main_image: "path/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 7,
        main_image: "path/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 7,
        main_image: "path/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 8,
        main_image: "path/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 8,
        main_image: "path/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 8,
        main_image: "path/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ] )
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
