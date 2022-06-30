"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("services", [
      {
        type_id: 1,
        name: "Farmaci DITE e NATE",
        address: "Rruga Mine Peza, Tiranë 1028, Albania",
        telephone: "+355 45629666",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: "Farmaci Milano",
        address: "Rruga Mikel Maruli, Tirana, Albania",
        telephone: "+355 45629665",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 1,
        name: "Orange Farmaci",
        address: "Rr. Irfan Tomini, Pallat 12 kate, kati 1",
        telephone: "+355 5694030070",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: "Arté Boutique Hotel",
        address: "Rruga Ibrahim Rugova 32",
        telephone: "+355 684099222",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: "Hotel Maritim Plaza",
        address: "Rruga Abdi Toptani 18",
        telephone: "+355 42211221",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 2,
        name: "Xheko Imperial Hotel",
        address: "Rruga Ibrahim Rugova Nr.56/H2",
        telephone: "+355 42259574",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3,
        name: "Artigiano at Vila",
        address: "Rruga Papa Gjon Pali II 9, Tirana 1001, Albania",
        telephone: "+355 676000480",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3,
        name: "Restaurant Piceri Era 'Blloku'",
        address: "Rruga Ismail Qemali",
        telephone: "+355 672065000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 3,
        name: "Restaurant Tradicional Oda",
        address: "Rruga Luigj Gurakuqi 3",
        telephone: "+355 699668881",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5,
        name: "Qendra Spitalore Universitare Nënë Tereza",
        address: "Rruga e Dibrës 372",
        telephone: "+355 42349209",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5,
        name: "American Hospital",
        address: "Rruga Sabaudin Gabrani, Nr. 2",
        telephone: "+355 42357535",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 5,
        name: "Hygeia Hospital",
        address: "Tiranë Kashar MËZEZ KM 01 i Rrugës dytësore të Autostradës",
        telephone: "+355 42390000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4,
        name: "Tirana East Gate",
        address: "Rruga Nacionale, Autostrada Tiranë - Elbasan",
        telephone: "+355 42395001",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4,
        name: "Toptani Shopping Center",
        address: "Rruga Abdi Toptani 1001",
        telephone: "+355 44540999",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 4,
        name: "City Park Albania",
        address: "Vorë 1032",
        telephone: "+355 44540999",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 6,
        name: "Ambulance",
        telephone: "127",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 6,
        name: "Firefighter",
        telephone: "128",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 6,
        name: "Police",
        telephone: "129",
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
