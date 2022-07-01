'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event_images', [
      {
        name: "SunnyHillFest2022_1",
        path: "images/events/sunnyHill/SunnyHillFest2022_1.webp",
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SunnyHillFest2022_2",
        path: "images/events/sunnyHill/SunnyHillFest2022_2.webp",
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SunnyHillFest2022_3",
        path: "images/events/sunnyHill/SunnyHillFest2022_3.webp",
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SunnyHillFest2022_4",
        path: "images/events/sunnyHill/SunnyHillFest2022_4.webp",
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SunnyHillFest2022_5",
        path: "images/events/sunnyHill/SunnyHillFest2022_5.webp",
        event_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "filmFree_1",
        path: "images/events/filmFree/filmFree_1.jpeg",
        event_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "filmFree_2",
        path: "images/events/filmFree/filmFree_2.jpeg",
        event_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "filmFree_3",
        path: "images/events/filmFree/filmFree_3.jpeg",
        event_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "filmFree_4",
        path: "images/events/filmFree/filmFree_4.jpeg",
        event_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "filmFree_5",
        path: "images/events/filmFree/filmFree_5.jpeg",
        event_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cloudFestival_1",
        path: "images/events/cloudFestival/cloudFestival_1.jpeg",
        event_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cloudFestival_2",
        path: "images/events/cloudFestival/cloudFestival_2.jpeg",
        event_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nationalCircus_1",
        path: "images/events/nationalCircus/nationalCircus_1.jpeg",
        event_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nationalCircus_2",
        path: "images/events/nationalCircus/nationalCircus_2.jpeg",
        event_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nationalCircus_3",
        path: "images/events/nationalCircus/nationalCircus_3.jpeg",
        event_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nationalCircus_4",
        path: "images/events/nationalCircus/nationalCircus_4.webp",
        event_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "touchEx_1",
        path: "images/events/touchEx/touchEx_1.jpeg",
        event_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "touchEx_2",
        path: "images/events/touchEx/touchEx_2.jpeg",
        event_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "touchEx_3",
        path: "images/events/touchEx/touchEx_3.jpeg",
        event_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "touchEx_4",
        path: "images/events/touchEx/touchEx_4.jpeg",
        event_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "touchEx_5",
        path: "images/events/touchEx/touchEx_5.jpeg",
        event_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "femFest_1",
        path: "images/events/femFest/femFest_1.jpeg",
        event_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "femFest_2",
        path: "images/events/femFest/femFest_2.jpeg",
        event_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "femFest_3",
        path: "images/events/femFest/femFest_3.jpeg",
        event_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "femFest_4",
        path: "images/events/femFest/femFest_4.jpeg",
        event_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "femFest_5",
        path: "images/events/femFest/femFest_5.jpeg",
        event_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "maluma_1",
        path: "images/events/maluma/maluma_1.jpeg",
        event_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "maluma_2",
        path: "images/events/maluma/maluma_2.jpeg",
        event_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "maluma_3",
        path: "images/events/maluma/maluma_3.jpeg",
        event_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "maluma_4",
        path: "images/events/maluma/maluma_4.webp",
        event_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "gala_1",
        path: "images/events/gala/gala_1.jpeg",
        event_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "gala_2",
        path: "images/events/gala/gala_2.webp",
        event_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "museum_1",
        path: "images/events/museum/museum_1.jpeg",
        event_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "museum_2",
        path: "images/events/museum/museum_2.jpeg",
        event_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "museum_3",
        path: "images/events/museum/museum_3.jpeg",
        event_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "museum_4",
        path: "images/events/museum/museum_4.jpeg",
        event_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "holo_1",
        path: "images/events/holo/holo_1.jpeg",
        event_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "holo_2",
        path: "images/events/holo/holo_2.jpeg",
        event_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "holo_3",
        path: "images/events/holo/holo_3.jpeg",
        event_id: 10,
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
