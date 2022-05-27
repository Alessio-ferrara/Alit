'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Contents', [
       {
         page: 'about_us',
         field: 'title',
         text: "About Us",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
      {
         page: 'about_us',
         field: 'image',
         text: "images/tirana.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'description',
         text: "Tirana is the capital of Albania and also the main economic , social and cultural center of the country. Tirana. A Dynamic Capital City. Tirana is the capital of Albania and also the main economic , social and cultural center of the country. Tirana is undoubtedly one of the liveliest and most transforming cities in Southeast Europe. A city that seemingly never sleeps, full of friendly faces and featuring surprises hidden around every corner in Tirana and its surroundings.",
         createdAt: new Date(),
         updatedAt: new Date(),
       }
   ], {});
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
