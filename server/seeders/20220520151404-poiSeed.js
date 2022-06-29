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
        name: "Grand Park of Tirana",
        description:
          "The Grand Park of Tirana (Albanian: Parku i Madh i Tiranës), or the Park on the Artificial Lake, is a 289 hectare public park situated on the southern part of Tirana, Albania, and administered by the Agency of Parks and Recreation of the Municipality of Tirana." +
          "The Park includes an artificial lake and many other landmarks such as the Saint Procopius Church, the Presidential Palace, and memorials to several Albanian personalities. It remains one of the most relaxing places in the city, despite increasing buildings being developed near the park, an early-morning run or promenade is a daily routines for many citizens. To the southern end of the Park, there is the Zoo and the Botanical Garden. The latter includes many flowers and plants that are common to the Albanian environment. " +
          "There are almost 120 species of trees, bushes and flowers. The Botanical Garden area is of 14.5 hectares and the lake's size is of 55 hectares, whereas the area of the Park itself is of 230 hectares. " +
          "The Park was built between 1955 and 1956 based on a Bulgarian plan and used to be called the Gogo stable, in a green area. The Park starts at the southern end of the Dëshmorët e Kombit Boulevard, after the University of Tirana, south of the main Skanderbeg Square. It was formerly called 'Park of Saint Procopius' (Albanian: Parku i Shën Prokopit) from the Saint Procopius Church, which is located in the area. In the internal parts, there can be found the memorials of 45 British and Australian[3] soldiers fallen during World War II, as well as a memorial of hundreds of German soldiers from the same war.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.312778",
        lang: "19.822222",
        type_id: "4",
        main_image: "images/pois/park_tirana.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pyramid of Tirana",
        description:
          "The Pyramid of Tirana  is a structure and former museum located in Tirana, the capital of Albania. It opened as a museum in 1988 and became a conference center in 1991 following the collapse of Communism. During the 1999 Kosovo War, the building was used as a NATO base. In 2018, a new project was unveiled that would open for Creative Technologies under the name of TUMO Center turning the Pyramid into an IT center for youth with a focus on computer programming, robotics, and start ups.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.323411",
        lang: "19.821247",
        type_id: "1",
        main_image: "images/pois/piramide_tirana.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Resurrection Cathedral",
        description:
          "The Resurrection Cathedral (Katedralja Ngjallja e Krishtit) is an Albanian Orthodox church situated in the center of Tirana, Albania. It is considered among the largest Eastern Orthodox churches in the Balkans.[1]" +
          "It was officially opened on June 24, 2012, to celebrate the 20th anniversary of the revival of the Albanian Orthodox Church and the election of Archbishop Anastasios of Albania.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.326389",
        lang: "19.8175",
        type_id: "3",
        main_image: "images/pois/orthodox_cathedral.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Polytechnic University of Tirana",
        description:
          "The Polytechnic University of Tirana is the oldest and the second largest university in Albania, after the University of Tirana.[citation needed] It was founded in 1951 and now has approximately 10,000 students, who come from Albania, Kosovo, Montenegro, and North Macedonia. In 2012, at the occasion of the 100th Anniversary of the Independence of Albania, UPT was awarded a high honour badge by the President of Albania, Bujar Nishani.[2] The university is fully accredited by the Albanian Public Agency for Accreditation of Higher Education",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.3172",
        lang: "19.8213",
        type_id: "9",
        main_image: "images/pois/politeknik_tirana.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Enver Hoxha's Villa",
        description:
          "This was the house of Enver Halil Hoxha, that was an Albanian communist politician. He was First Secretary of the Party of Labour of Albania from 1941 until his death in 1985. He was also a member of the Politburo of the Party of Labour of Albania, chairman of the Democratic Front of Albania, and commander-in-chief of the armed forces and ruled the country from 1944 until his death in 1985. He was the 22nd Prime Minister of Albania from 1944 to 1954 and at various times was both foreign minister and defence minister of the People's Socialist Republic of Albania.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.66292509926658",
        lang: "19.818731022648976",
        type_id: "1",
        main_image: "images/pois/dictator_house.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zoopark Tirana",
        description:
          "Zoopark Tirana  is a public zoo located in Tirana, Albania. It is the only zoo of its kind in the country. Built during 1960–1961, the zoo is concentrated in an area of 6.09 ha (15.0 acres) in the southern part of the city, between the Grand Park and the Botanical Gardens.",
        visit_info: "Opening hours: \n Every day 09:00-20:00 \n Monday: Closed",
        lat: "41.307806",
        lang: "19.809389",
        type_id: "4",
        main_image: "images/pois/zoologic_park.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "National History Museum",
        description:
          "The National History Museum (Albanian: Muzeu Historik Kombëtar) is a historical museum in Tirana, Albania. It was opened on 28 October 1981 and is 27,000 square metres in size, while 18,000 square metres are available for expositions." +
          "Above the entrance of the museum is a large mural mosaic titled The Albanians that depicts purported ancient to modern figures from Albania's history.[2][3] The museum includes the following pavilions: the Pavilion of Antiquity, Middle Ages, Renaissance, Independence, Iconography, National Liberation Antifascist War, Communist Terror, and Mother Teresa.",
        visit_info: "Opening hours: \n Every day 09:00-20:00",
        lat: "41.329167",
        lang: "19.816944",
        type_id: "1",
        main_image: "images/pois/national_museum.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rinia Park",
        description:
          "Rinia Park is the central public park of Tirana, Albania. Built in 1950 during the communist era, it covers an area of 2.98 hectares (7.4 acres)." +
          "The park, 500 metres (1,600 ft) from the central square, is bordered by Dëshmorët e Kombit Boulevard to the east, Bulevardi Gjergi Fishta and Bajram Curri Boulevard to the south, Rruga Ibrahim Rugova to the west and Rruga Myslym Shyri to the north.[1] Immediately to the north is the Teatri i Kukullave and the Orthodox Cathedral. The Taivani Center and water fountain are located on the western perimeter of the park.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.324722",
        lang: "19.818056",
        type_id: "4",
        main_image: "images/pois/youth_park.jpeg",
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
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.32791448452915",
        lang: "19.819775783700685",
        type_id: "2",
        main_image: "images/pois/clock_tower.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Cloud (Reja)",
        description:
          "REJA-The Serpentine Gallery Pavilion 2013 is designed by multi award-winning Japanese architect Sou Fujimoto. He was the thirteenth and, at 41, the youngest architect to have accepted the invitation from the Serpentine Gallery to design a temporary structure for the SerThe most ambitious architectural programme of its kind worldwide, the Serpentine’s annual Pavilion commisspentine Gallery in 2013.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.325708853221656",
        lang: "19.81973993185982",
        type_id: "2",
        main_image: "images/pois/cloud_monument.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tanner's Bridge",
        description:
          "The Tanners' Bridge is an 18th-century Ottoman period stone footbridge located in Tirana, Albania. The bridge, built near the Tanners' Mosque, was once part of the Saint George Road that linked Tirana with the eastern highlands. The road was the rout by which livestock and produce entered the city. The bridge crossed the Lanë stream near the area where butcher shops and leather workers were located. The bridge fell into disrepair when the Lanë was diverted in the 1930s. In the 1990s the bridge was restored for use by pedestrians.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.32645970595197",
        lang: "19.82606825331918",
        type_id: "2",
        main_image: "images/pois/tanner_bridge.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mount Dajt Park",
        description:
          "Mount Dajti National Park (1,611m above sea level) is easily accessible from the city, just 25 km to its east. A weekend trip there is a very popular activity for people from Tirana. The cable car station is just 20 minutes by car or bus from centre of Tirana, and from where you take the cable car to have a wonderful experience. A quarter of an hour later and you are near the top of the mountain where there are wonderful panoramic views of the city, villages, forests, the sea, and traditional houses, as well as quirky idiosyncrasies such as the bunkers.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.71215150300809",
        lang: "19.854998418590547",
        type_id: "4",
        main_image: "images/pois/mount_dajt.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "St. Paul's Cathedral",
        description:
          "St Paul's Cathedral is a cathedral in Tirana, Albania. It belongs to the Roman Catholic Archdiocese of Tiranë-Durrës. The stained glass window to the left of the front door features Pope John Paul II and Mother Teresa.[1] Also a statue of Mother Teresa can be found at the entrance of the cathedral. It is a modern-looking building and does not resemble a traditional church.",
        visit_info: "No visit info are available for this point of interest.",
        lat: "41.324722",
        lang: "19.821389",
        type_id: "3",
        main_image: "images/pois/cath_cattolic.jpeg",
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
