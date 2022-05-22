'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event_images', [
      {
        name: "Image",
        path: "path/image",
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 3,
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
