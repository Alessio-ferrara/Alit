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
       },{
         page: 'about_us',
         field: 'find_out_more',
         text: "Find out more below",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
      {
         page: 'about_us',
         field: 'image',
         text: "images/about/gradient.png",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
           page: 'about_us',
           field: 'cards_title',
           text: "Tirana's faces",
           createdAt: new Date(),
           updatedAt: new Date(),
       },
       {
         page: 'about_us',
         field: 'description',
         text: '<p>\n' +
             '          Albania is considered the <mark>bridge</mark> between western and\n' +
             '          easter Europe, mixing the two different culture in an unique one.\n' +
             '        </p>\n' +
             '        <p>\n' +
             '          <mark>Tirana</mark> is the capital of Albania and also the main\n' +
             '          economic, social and cultural center of the country. Tirana is one of\n' +
             '          the country\'s <mark> leading business </mark> and cultural centers\n' +
             '          including\n' +
             '          <mark> entertainment, music, media, fashion, </mark>\n' +
             '          and the arts all contribute to its status as Albania\'s largest city.\n' +
             '        </p>\n' +
             '        <p>\n' +
             '          The city environment and its attraction provide one of the most\n' +
             '          fascinating places to <mark> visit </mark> in eastern Europe.\n' +
             '          <mark>Explore</mark> some the faces of this polyedric\n' +
             '          <mark>city</mark>, feel welcomed thanks to the\n' +
             '          <mark>hospitality</mark> of the city and his inhabitants.\n' +
             '        </p>\n' +
             '        <p class="pt-3">What are you waiting for?</p>',
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'museum_description',
         text: "Tirana's museums and monuments are among its most highly esteemed attractions. The National Historical " +
             "Museum is the largest Museum in the country and details the history of the country. The Natural Sciences " +
             "Museum was founded in 1948 is affiliated with the University of Tirana and has branches in zoology, botany " +
             "and geology. The former Enver Hoxha Museum is a pyramid-shaped structure dedicated to the communist dictator" +
             " Enver Hoxha.It served as a museum about his legacy, but after the Fall of communism in Albania, it became " +
             "a conference center and exhibition venue.",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'museum_title',
         text: "Museums",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'museum_image',
         text: "images/about/museums.jpeg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'tourism_description',
         text: "Tourism in Tirana is developing year by year and the capital city of Tirana become a very popular " +
             "tourist destinations after the southern Albanian Riviera and northern part of the country. Tirana has " +
             "a majority of luxury hotels, modern restaurants, bars, pubs and very big nightclubs. Tirana is a place " +
             "that is known as a university center of students from regional countries like Kosovo, Macedonia, " +
             "Montenegro and Greece. According to the Polish Tour Operators Association, Tirana has entered into " +
             "the 10th most visited cities by the Poles. The French Télérama ranked Tirana also to the Top 10 of best" +
             " destination to be visited in 2017",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'tourism_title',
         text: "Tourism",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'tourism_image',
         text: "images/about/tourism.jpeg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'festivals_description',
         text: "Festivals are one of several things that locals enjoy well. The diversity of festivals makes it " +
             "possible for people of different tastes to find themselves in a city this small. Festivals in the " +
             "city provide entertainment for the youth as well as for adults. The Summer Festival takes place every " +
             "year on March 14, celebrating the Spring Day, the country's largest pagan festival. It is widely " +
             "celebrated in Tirana and as well as in other cities in Albania and the Arbëresh colonies in Italy." +
             " Another major event, the Tirana International Film Festival takes place in Tirana each year, which" +
             " brings a large number of artists to produce a wide range of interesting film works.",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'festivals_title',
         text: "Festivals",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'festivals_image',
         text: "images/about/festivals.jpeg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'nightlife_description',
         text: "Tirana has a diverse and vibrant nightlife. Among the youth, the most popular destination is the Blloku " +
             "area. There are many pubs, bars, clubs, cafes, restaurants can be found throughout the area. Blloku is " +
             "quite a small, walking neighborhood, easily accessible from different parts of the city. The entrance is" +
             " only 10 minutes by foot from the city centre. Among the most popular nightclubs are Folie Terrace, Cinco" +
             " Cavalli, Lollipop, Moscow, Arena and Mumja Club, where world-famous disc jockeys and idiosyncratic local " +
             "performances are frequent. Some of the most popular cafés in Tirana are Mon Chéri Coffee Shop, Sophie " +
             "Caffe, Cioccolat Italiani Tirana, D'angelo Coffee Shop and The Tea Room.",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'nightlife_title',
         text: "Nightlife",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'nightlife_image',
         text: "images/about/nightlife.webp",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'visitor_title',
         text: "Visitors per year",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'visitors_number',
         text: "6.000.000",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'visitors_icon',
         text: "fa-solid fa-2xl fa-chart-line text-success float-left",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'posts_title',
         text: "Posts per month",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'posts_number',
         text: "15.780",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'posts_icon',
         text: "fa-regular fa-2xl fa-comment text-warning float-left",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'users_title',
         text: "Monthly users",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'users_number',
         text: "132",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'users_icon',
         text: "fa-regular fa-2xl fa-eye text-primary float-left",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'attractions_title',
         text: "Attractions",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'attractions_number',
         text: "180",
         createdAt: new Date(),
         updatedAt: new Date(),
       },{
         page: 'about_us',
         field: 'attractions_icon',
         text: "fa fa-2xl fa-location-dot text-danger float-left",
         createdAt: new Date(),
         updatedAt: new Date(),
       },


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
