'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        name: "Sunny Hill Festival",
        description: "Sunny Hill Festival will be organized also in Tirana (as well as in Pristina)" +
                     " this August. The announcement was made by the official account of the " +
                    "festival that this year the festival will be also held in Tirana, " +
                    "Albania, on the 26th, 27th, 28th of August 2022. Albanian singer Dua Lipa " +
                    "will be holding her 3rd concert in Tirana. ",
        datetime: "2022-08-26T20:00:00",
        info: "https://ticketing.festtix.co.uk/e/15/embed-tickets",
        poi_id: 1,
        main_image: "images/events/sunnyHill.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Travel Fest-International Movie Week",
        description: "Travel Fest Albania in cooperation with the " +
            "Parks and Recreation Agency brings the international film festival " +
            "from 18 to 24 July. In total, about 128 films will be screened with " +
            "42 participating countries in two different locations, from 20:00 to 23:00.\n" +
            "The opening and closing of the festival will take place in the Tirana Amphitheater." +
            " Afterwards, the show will take place in Rinia Park (Youth Park). ",
        datetime: "2022-07-18T20:00:00",
        info: "No info available.",
        poi_id: 9,
        main_image: "images/events/movie_fest.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cloud Festival (6th Edition)",
        description: "The Cloud Festival is a contemporary and traditional festival that brings" +
            " international artists to Tirana to perform and display their art at the " +
            "Cloud Installation, located in front of the Art Gallery. The festival was " +
            "founded by Edit Pula and is organized by the Municipality of Tirana in collaboration" +
            " with DoArt.\n" + "The festival runs from May 26 to June 12, 2022. ",
        datetime: "2022-05-26T12:00:00",
        info: "Info",
        poi_id: 15,
        main_image: "images/events/cloud_fest.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "National Circus Exhibition",
        description: "The National Circus of Albania will entertain the audience at " +
            "the Tirana Amphitheater inside the Grand Park of Tirana every Saturday at 18.30.\n" +
            "Free entrance ",
        datetime: "2022-05-06T18:30:00",
        info: "Info",
        poi_id: 2,
        main_image: "images/events/circus.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Touch Exhibition",
        description: "Linda Guri, a talented young artist, " +
            "who in collaboration with the photographer Ergys Zhabjaku, brings her delicate and feminine" +
            " 'touches' through the medium of photography.\n" +
            "The exhibition entitled \"Touch\" will remain open to the public until February 28, 2022, " +
            "in the 'Forum' hall and the Enver Hoxha Villa. ",
        datetime: "2022-02-04T010:00:00",
        info: "Info",
        poi_id: 6,
        main_image: "images/events/touch.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "FemFest - dedicated to Albanian women ",
        description: "A festival dedicated to Albanian women\n" +
            "\n" +
            "FemFest brings together artists, activists, citizens who, through debates, exhibitions," +
            " shows, songs, slides, give voice to problems that are not spoken, give voice to those that " +
            "are not heard.\n" +
            "4 days with different programs in different locations, in ArTurbina, in the Destil Creative " +
            "Hub, the march in Skënderbej Square and the inauguration of the installation \"Red Shoes\".",
        datetime: "2022-03-05T010:00:00",
        info: "Info",
        poi_id: 1,
        main_image: "images/events/femfest.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maluma World Tour",
        description: "The date of the long-awaited concert of the world-famous singer Maluma is confirmed. On Summer Day, March 14, Maluma will be in Tirana to perform his hits. For those " +
            "who have booked in the previous canceled concerts, can still use their tickets for the " +
            "new confirmed date.",
        datetime: "2022-03-14T020:00:00",
        info: "Info",
        poi_id: 1,
        main_image: "images/events/maluma.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Grand Gala - the magician of Albanian traditional dances",
        description: "Experience the Albanian traditional dances. An event dedicated to " +
            "Panajot Kanaçi, one of the most prominent choreographers of Albanian traditional dances " +
            "“valle”. This event was staged in an " +
            "effort to remember, honor and keep alive the most important figures in the creation of the " +
            "Albanian tradition, culture and values." ,
        datetime: "2022-02-08T019:00:00",
        info: "Info",
        poi_id: 8,
        main_image: "images/events/gala.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rare collections Exhibition",
        description: "On the occasion of the 102nd anniversary of Tirana as a capital city of " +
            "Albania, in the Castle of Tirana is organized an event by the Association of " +
            "Albanian Collectors who will exhibit various objects from their collections",
        datetime: "2022-02-11T011:00:00",
        info: "Info",
        poi_id: 1,
        main_image: "images/events/collection.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Holocaust Day-Albanian survival stories ceremony",
        description: "On World Holocaust Day, January 27, we commemorate one of the most horrific events" +
            " in world history, the mass murder, persecution and torture of millions of innocent people " +
            " in 1933-1945. A moment of reflection that the world will no longer " +
            "allow such a machine of extermination and denigration of man to be repeated on that kind" +
            " of scale.\n" +
            "What did Albanians suffer from the Holocaust? So far there has been talk only of the fact" +
            " that the Albanians sheltered the Jews and did not hand them over. But the other part where" +
            " the Albanians themselves were interned in the Nazi concentration camps has not been shown." +
            "\n" +
            "A project of DMO ALBANIA, in cooperation with the National Historical Museum, funded by " +
            "the EVZ Stiftung foundation, has brought exactly for all Albanians, the arrests, the " +
            "sufferings of Albanians in the infamous Mauthausen prison in Austria. Most Albanians " +
            "suffered in Mauthausen, where a plaque on the Memorial today shows that 417 Albanians" +
            " were killed. Only 23 were able to return alive.\n" +
            "An exhibition at the National Museum tells exactly the stories of 8 of the survivors and " +
            "historical facts about the suffering of Albanians in Nazi camps ",
        datetime: "2022-01-27T11:00:00",
        info: "Info",
        poi_id: 8,
        main_image: "images/events/holocaust.jpg",
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
