"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("op_hours", [
      {
        service_id: 1,
        day: "Monday",
        s_hour: "07:00:00",
        c_hour: "03:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        day: "Tuesday",
        s_hour: "07:00:00",
        c_hour: "03:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        day: "Wednesday",
        s_hour: "07:00:00",
        c_hour: "03:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        day: "Thursday",
        s_hour: "07:00:00",
        c_hour: "03:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        day: "Friday",
        s_hour: "07:00:00",
        c_hour: "03:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        day: "Saturday",
        s_hour: "07:00:00",
        c_hour: "03:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 1,
        day: "Sunday",
        s_hour: "07:00:00",
        c_hour: "03:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Monday",
        s_hour: "09:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Tuesday",
        s_hour: "09:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Wednesday",
        s_hour: "09:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Thursday",
        s_hour: "09:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Friday",
        s_hour: "09:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 2,
        day: "Saturday",
        s_hour: "09:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Monday",
        s_hour: "08:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Tuesday",
        s_hour: "08:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Wednesday",
        s_hour: "08:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Thursday",
        s_hour: "08:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Friday",
        s_hour: "08:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Saturday",
        s_hour: "10:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 3,
        day: "Sunday",
        s_hour: "10:00:00",
        c_hour: "18:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Monday",
        s_hour: "06:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Tuesday",
        s_hour: "06:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Wednesday",
        s_hour: "06:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Thursday",
        s_hour: "06:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Friday",
        s_hour: "06:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Saturday",
        s_hour: "05:00:00",
        c_hour: "23:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 4,
        day: "Sunday",
        s_hour: "05:00:00",
        c_hour: "23:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Monday",
        s_hour: "07:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Tuesday",
        s_hour: "07:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Wednesday",
        s_hour: "07:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Thursday",
        s_hour: "07:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Friday",
        s_hour: "07:00:00",
        c_hour: "21:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Saturday",
        s_hour: "06:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 5,
        day: "Sunday",
        s_hour: "06:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Monday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Tuesday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Wednesday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Thursday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Friday",
        s_hour: "08:00:00",
        c_hour: "20:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Saturday",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 6,
        day: "Sunday",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        day: "Monday",
        s_hour: "11:30:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        day: "Tuesday",
        s_hour: "11:30:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        day: "Wednesday",
        s_hour: "11:30:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        day: "Thursday",
        s_hour: "11:30:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        day: "Friday",
        s_hour: "11:30:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        day: "Saturday",
        s_hour: "11:30:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 7,
        day: "Sunday",
        s_hour: "11:30:00",
        c_hour: "23:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        day: "Monday",
        s_hour: "11:00:00",
        c_hour: "23:45:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        day: "Tuesday",
        s_hour: "11:00:00",
        c_hour: "23:45:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        day: "Wednesday",
        s_hour: "11:00:00",
        c_hour: "23:45:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        day: "Thursday",
        s_hour: "11:00:00",
        c_hour: "23:45:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        day: "Friday",
        s_hour: "11:00:00",
        c_hour: "23:45:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        day: "Saturday",
        s_hour: "11:00:00",
        c_hour: "23:45:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 8,
        day: "Sunday",
        s_hour: "11:00:00",
        c_hour: "23:45:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        day: "Monday",
        s_hour: "12:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        day: "Tuesday",
        s_hour: "12:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        day: "Wednesday",
        s_hour: "12:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        day: "Thursday",
        s_hour: "12:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        day: "Friday",
        s_hour: "12:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        day: "Saturday",
        s_hour: "12:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 9,
        day: "Sunday",
        s_hour: "12:00:00",
        c_hour: "23:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        day: "Monday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        day: "Tuesday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        day: "Wednesday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        day: "Thursday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        day: "Friday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        day: "Saturday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 10,
        day: "Sunday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        day: "Monday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        day: "Tuesday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        day: "Wednesday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        day: "Thursday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        day: "Friday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        day: "Saturday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 11,
        day: "Sunday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        day: "Monday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        day: "Tuesday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        day: "Wednesday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        day: "Thursday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        day: "Friday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        day: "Saturday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 12,
        day: "Sunday",
        s_hour: "00:00:00",
        c_hour: "00:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Monday",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Tuesday",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Wednesday",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Thursday",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Friday",
        s_hour: "10:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Saturday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 13,
        day: "Sunday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Monday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Tuesday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Wednesday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Thursday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Friday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Saturday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 14,
        day: "Sunday",
        s_hour: "09:00:00",
        c_hour: "22:00:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Monday",
        s_hour: "10:00:00",
        c_hour: "21:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Tuesday",
        s_hour: "10:00:00",
        c_hour: "21:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Wednesday",
        s_hour: "10:00:00",
        c_hour: "21:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Thursday",
        s_hour: "10:00:00",
        c_hour: "21:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Friday",
        s_hour: "10:00:00",
        c_hour: "21:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Saturday",
        s_hour: "10:00:00",
        c_hour: "21:30:00",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        service_id: 15,
        day: "Sunday",
        s_hour: "10:00:00",
        c_hour: "21:30:00",

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
