"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("op_hours", [
      {
        service_id: 1,
        day: "Monday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        day: "Tusday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        day: "Friday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Monday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Tusday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Friday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Monday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Tusday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Friday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Monday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Tusday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Friday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",
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
