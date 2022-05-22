"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("point_of_interests", [
      {
        name: "POI 1",
        description: "Point of interest 1",
        visit_info: "Visit info of poi 1",
        lat: "-47.80734",
        lang: "-90.97483",
        type_id: "3",
        main_image:
          "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "POI 2",
        description: "Point of interest 2",
        visit_info: "Visit info of poi 2",
        lat: "-47.80734",
        lang: "-90.97483",
        type_id: "4",
        main_image:
          "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "POI 3",
        description: "Point of interest 3",
        visit_info: "Visit info of poi 3",
        lat: "-47.80734",
        lang: "-90.97483",
        type_id: "3",
        main_image:
          "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000",
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
