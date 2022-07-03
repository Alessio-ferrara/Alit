"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("op_hours", [
      {
        service_id: 1,
        day: "Mon-Sun",
        s_hour: "07:00:00",
        c_hour: "03:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Mon-Sun",
        s_hour: "09:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Mon-Sun",
        s_hour: "08:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Mon-Fri",
        s_hour: "06:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Sat-Sun",
        s_hour: "05:00:00",
        c_hour: "23:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Mon-Fri",
        s_hour: "07:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Sat-Sun",
        s_hour: "06:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Mon-Fri",
        s_hour: "08:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Sat-Sun",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        day: "Mon-Sun",
        s_hour: "11:30:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        day: "Mon-Sun",
        s_hour: "11:00:00",
        c_hour: "23:45:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        day: "Mon-Sun",
        s_hour: "12:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        day: "Mon-Sun",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        day: "Mon-Sun",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        day: "Mon-Sun",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Mon-Fri",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Sat-Sun",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Mon-Fri",
        s_hour: "09:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Sat-Sun",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Monday-Fri",
        s_hour: "10:00:00",
        c_hour: "21:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Sat-Sun",
        s_hour: "09:30:00",
        c_hour: "22:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
