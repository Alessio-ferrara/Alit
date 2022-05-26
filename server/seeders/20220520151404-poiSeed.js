"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("point_of_interests", [
      {
        name: "Skanderbeg Square",
        description:
          "The Skanderbeg Square is the main plaza in the centre of Tirana, Albania. The square is named after the Albanian national hero Gjergj Kastrioti Skënderbeu. The total area is about 40,000 square metres. The Skanderbeg Monument dominates the square.The city plan for Tirana was initially designed by Armando Brasini in 1925 and continued by Florestano Di Fausto in a Neo-Renaissance style with articulate angular solutions and giant order fascias. Following the Italian invasion of Albania the master plan was updated in 1939 by Gherardo Bosio. Many buildings including the Tirana International Hotel, the Palace of Culture, the National Opera, the National Library, the National Bank, the Ethem Bey Mosque, the Clock Tower, the City Hall, the Ministry of Infrastructure, the Ministry of Agriculture, the Ministry of Economy, the Ministry of Energy, and the National Historical Museum are situated at the square.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.328333",
        lang: "19.818333",
        type_id: "5",
        main_image: "images/pois/skanderbeg_square.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Arena Kombëtare",
        description:
          "Arena Kombëtare known for sponsorship reasons as the Air Albania Stadium) is an all-seater, multi-purpose football stadium located in the capital city of Tirana which was built on the ground of the former Qemal Stafa Stadium.[2] The stadium has a seating capacity of 21,690 constituting the largest stadium in Albania." +
          "The stadium is owned by the governing body of Albanian football, the Albanian Football Association (FSHF) and the Albanian State through Shoqëria Sportive Kuq e Zi Sh.A, a subsidiary established for the purpose of building, managing and maintaining the structure." +
          "Designed by Marco Casamonti of Archea Associati, the structure of the stadium is a peculiar multi-faceted form (an 8-faceted rectangle) so that each side allows access to distinct functions. At one corner of the stadium structure is an 112-metre tall tower (24 floors). Each facet accommodates different streams, thus identifying users of private areas, such as the hotel tower, shopping areas and stadium spectators." +
          "In May 2022, the stadium hosted the first ever Europa Conference League final between AS Roma and Feyenoord Rotterdam.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.318314",
        lang: "19.824075",
        type_id: "7",
        main_image: "images/pois/stadium.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "House of Leaves (Museum of Secret Surveillance)",
        description:
          "The building known as the “House of Leaves” (so called because of the clambering plant covering its facade) has now returned to the Museum of Secret Surveillance. Opened on 23rd of May, it is the newest museum in Albania and certainly the most intriguing one that tries to narrate to young people and to foreigners, one of the darkest periods of the country’s history." +
          "Located in the center of Tirana, in front of Orthodox Church: “The Resurrection of Christ” and near the National Bank, the building that temporarily housed Gestapo during the occupation of Albania in WWII was the Central Directorate of the Secret Service from 1944 to 1991. " +
          "As the history of Albania itself under the Communist dictatorship that was installed at the end of World War II and continued for almost half a century, the House of Leaves also, was covered for a long time with all sorts of legends and it comprised the unknown, a mystery. Whispers of people and rustling of leaves… By opening the doors of this house, presenting the activities that were conducted in it and many other things related to it, this museum will unfold simultaneously aspects of Albanian society in the conditions of a regime that aimed at the total control over the human bodies and souls.",
        visit_info:
          "To get more information on how to visit this museum check that link : http://muzeugjethi.gov.al/turi-virtual/?lang=en",
        lat: "41.32667",
        lang: "19.81647",
        type_id: "1",
        main_image: "images/pois/house_of_leaves.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bunk'Art",
        description:
          "The BUNK'ART project started in November 2014 with the opening to the public of BUNK'ART 1, a video museum exhibition situated inside the atomic bunker of the dictator Enver Hoxha, on the outskirts of Tirana and continues with the opening of BUNK'ART 2, on the 19th of November 2016 in the capital center. While BUNK'ART 1 is dedicated to the history of the Albanian communist army and to the daily lives of Albanians during the regime, BUNK'ART 2 reconstructs the history of the Albanian Ministry of Internal Affairs from 1912 to 1991 and reveals the secrets of “Sigurimi”, the political police that was the harsh persecution weapon used by the regime of Enver Hoxha. The originator and general curator of BUNK'ART project is the Italian journalist Carlo Bollino, while the staff of the historical research is led by the journalist Admirina Peçi. BUNK'ART project is supported by the Albanian NGO “Qendra Ura”.",
        visit_info:
          "Opening hours: \n Wednesday - Thursady 09:00-16:00 \n Friday - Sunday 09:00-17:00",
        lat: "41.34997610564417",
        lang: "19.860917735302063",
        type_id: "3",
        main_image: "images/pois/bunk'art.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Et`hem Bey Mosque",
        description:
          "Construction was started in 1791 or 1794 by Molla Bey and it was finished in 1819 or 1821 by his son Haxhi Ethem Bey, grand-grandson of Sulejman Pasha." +
          "At the time it was built it was part of complex buildings that compose the historical center of Tirana. In front of mosque was the old Bazaar, in east the Sulejman Pasha Mosque, which was built on 1614 and destroyed during World War II, and in the north-west the Karapici mosque" +
          "During the totalitarianism of the Socialist People's Republic of Albania, the mosque was closed. On January 18, 1991, despite opposition from communist authorities, 10,000 people entered carrying flags. This was at the onset of the fall of communism in Albania. The event was a milestone in the rebirth of religious freedom in Albania." +
          "The Mosque today, consists of an architectural complex together with the Clock Tower of Tirana. Tours of the mosque are given daily, though not during prayer service.[6] Visitors must take their shoes off before entering the inner room.",
        visit_info: "Opening hours: \n Every day 05:00-22:30",
        lat: "41.327778",
        lang: "19.819167",
        type_id: "6",
        main_image: "images/pois/et'hem.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Clock Tower",
        description:
          "The Clock Tower of Tirana (Albanian: Kulla e Sahatit), was built in 1822 in Tirana, Albania by Etëhem Bey Mollaj, a Bejtexhinj poet who also finished the Et'hem Bey Mosque next to the clock tower.[2] Watchmaster Ismail Tufina was the first to assemble the Tirana clock mechanism in 1822. It is a monument of culture of first category, approved on 24 May 1948. " +
          "The stairs have 90 steps that go in a spiral fashion. It is 35 metres (115 ft) tall and was the tallest building in the city at the time. Since the restoration of 2016, 9,833 visitors were counted, who have visited the tower.[3] The installation of the clock was done by the renowned Tufina watchmakers.  The Tufina's took care of the clock from 1822 until 1973 when forcefully removed by the communist regime.",
        visit_info: "Visit info of poi 6",
        lat: "41.32791448452915",
        lang: "19.819775783700685",
        type_id: "2",
        main_image: "images/pois/clock_tower.jpeg",
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
