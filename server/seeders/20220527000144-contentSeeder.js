"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Contents", [
      {
        page: "index",
        field: "description",
        text: "Tirana is the capital of Albania and also the main economic , social and cultural center of the country. Tirana. A Dynamic Capital City. Tirana is the capital of Albania and also the main economic , social and cultural center of the country. Tirana is undoubtedly one of the liveliest and most transforming cities in Southeast Europe. A city that seemingly never sleeps, full of friendly faces and featuring surprises hidden around every corner in Tirana and its surroundings.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "index",
        field: "title",
        text: "Tirana",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "index",
        field: "short_description",
        text: "Discover more about the gorgeous capital city of Albania.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "index",
        field: "short_description",
        text: "Discover more about the gorgeous capital city of Albania.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "index",
        field: "short_description",
        text: "Discover more about the gorgeous capital city of Albania.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "poi",
        field: "title",
        text: "Points of interest",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "poi",
        field: "description",
        text: "Page to see all the points of interest (POI) related to a specific group",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "event",
        field: "title",
        text: "All Events",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "event",
        field: "description",
        text: "Discover the events that are held in Tirana!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "itinerary",
        field: "title",
        text: "Itineraries",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "itinerary",
        field: "description",
        text: "Choose an itinerary and discover all the attractions of Tirana!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "service",
        field: "title",
        text: "All Services",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "service",
        field: "description",
        text: "Select a service to get useful informations and contacts!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "contact_us",
        field: "title",
        text: "Contact Us",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: "contact_us",
        field: "description",
        text: "You need help? Fill the fields below and contact our team!",
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
