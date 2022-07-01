"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("itineraries", [
      {
        name: "Historical Itinerary",
        duration: 5,
        description:
          "Discover the history of Tirana by participating in the historical itinerary. It has a very old " +
            "history, dating back to the Palaeolithic, some 10,000 to 30,000 years ago. The oldest settlements are found " +
            "close to Mount Dajti and Pëllumbas Cave, while Tirana and its suburbs are filled with Illyrian toponyms." +
            "But the city itself is relatively new, about 400 years old, " +
            "founded in 1614 by Sulejman Pashe Bargjini a feudal lord from this region. " +
            "You will be able to see the National History Museum, to get a background on Tirana's history, then you'll " +
            "visit the oldest mosque in Tirana (recently rebuilt) very near the museum. Next you'll see the Clock Tower" +
            "the symbol of Tirana. And to conclude, you visit the ancient Tanner's brigde, a piece of ancient history right in the middle of Tirana.",
        short_description:"Discover the history of Tirana by participating in the historical itinerary. It has a very old " +
            "history, dating back to the Palaeolithic, some 10,000 to 30,000 years ago. The oldest settlements are found " +
            "close to Mount Dajti and Pëllumbas Cave, while Tirana and its suburbs are filled with Illyrian toponyms.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Communism Itinerary",
        duration: 4,
        description: "Get a sense of the communist legacy which is present in Albania. Together with a guide you will " +
            "travel to museums and galleries which display important elements of the country's communist history. You start " +
            "the itinerary by visiting the Pyramid of Tirana, a symbol of the communist regime which used to be a museum." +
            "Then you will visit the communist leader Enver Hoxha's Residence where he spent most of his life. Next stop " +
            "is the House of Leaves Museum, depicting surveillance and spying system in Albania during the communism era. " +
            "Lastly, you'll visit Bunk'art, an atomic bunker reshaped into a museum making you experience life in a " +
            "communism perspective. ",
        short_description : "Get a sense of the communist legacy which is present in Albania. Together with a guide you will " +
            "travel to museums and galleries which display important elements of the country's communist history.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nature Itinerary",
        duration: 6,
        description:
          "For all nature lovers, Tirana has extensive opportunities to bringing nature closer to the visitor. The start of this itinerary" +
            " is the Grand Park of Tirana near the artificial lake. You'll see a lot of local on their daily walks. The park creates a very" +
            " calming space inside a busy city like Tirana. After visiting the Grand Park, you'll visit the recently built Zoopark, with " +
            "tens of animal species living in a friendly zoo environment. When the zoo visit is over, you'll walk up to Tirana's Youth Park. " +
            " And saving the most important part of the itinerary for last, the ending stop of your itinerary is mount Dajt. A green space," +
            " especially popular during the summer for hikes, cable car rides, great quality restaurants in the middle of a mountainous landscape.",
        short_description :  "For all nature lovers, Tirana has extensive opportunities to bringing nature closer to the visitor. The start of this itinerary" +
            " is the Grand Park of Tirana near the artificial lake. You'll see a lot of local on their daily walks. The park creates a very" +
            " calming space inside a busy city like Tirana.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Youth Itinerary",
        duration: 3,
        description:
          "2022 is the European Year of Youth and Tirana is the European Youth Capital. This shines a light on the importance" +
            " of European youth in building a better future – greener, more inclusive and digital. This guide is intended " +
            "to show visitors and residents alike numerous opportunities to learn, share their vision, meet on another and " +
            "engage in activities. During this visit you start from the Skanderbeg Square, an important youth meeting point in " +
            "Tirana. The itinerary goes on with the Polytechnic University of Tirana, the second oldest university in Albania. " +
            "It is common for Albanian youngsters to meet in the square in front of UPT to drink, talk and laugh with each other. A five" +
            " minute walk from there will bring you to Air Albania, the largest football stadium in the country. And last on the list, " +
            "is the famous monument \"Reja\" or the Cloud, a beautiful, out of the ordinary concept monument hosting different youth " +
            "activities throughout the year.",
        short_description :  "2022 is the European Year of Youth and Tirana is the European Youth Capital. This shines a light on the importance" +
            " of European youth in building a better future – greener, more inclusive and digital. This guide is intended " +
            "to show visitors and residents alike numerous opportunities to learn, share their vision, meet on another and " +
            "engage in activities.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Religious Itinerary",
        duration: 4,
        description:
          "If you're interested in religion, Albania is the right country for you. It is known for it's religious tolerance. " +
            "Religious equality in Albania shows that several religious beliefs are currently " +
            "official, Sunni Muslims, Bektashis, Halvetis, Catholics, Orthodox and Protestants. In the last 2 decades, new " +
            "currents of faith have penetrated in different areas of the country. In this itinerary, you have the opportunity to " +
            "experience first hand the faith tolerance by seeing how people of different beliefs and religions coexist in a friendly " +
            "environment. You'll be able to visit a number of churches and mosques located very near each other.",
        short_description :  "If you're interested in religion, Albania is the right country for you. It is known for it's religious tolerance. " +
            "Religious equality in Albania shows that several religious beliefs are currently " +
            "official, Sunni Muslims, Bektashis, Halvetis, Catholics, Orthodox and Protestants.",
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
