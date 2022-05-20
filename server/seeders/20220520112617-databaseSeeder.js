'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /*
    const poiType = [
      {
        name: "Museum",
      },
      {
        name: "Monument",
      },
      {
        name: "Church",
      },
      {
        name: "Park",
      },
      {
        name: "Square",
      },
      {
        name: "Mosque",
      },
      {
        name: "Stadium",
      },
      {
        name: "Lake",
      },
    ];
    await queryInterface.bulkInsert("poi_types", poiType);
    const poiList = [
      {
        name: "POI 1",
        description: "Point of interest 1",
        visit_info: "Visit info of poi 1",
        lat: "-47.80734",
        lang: "-90.97483",
        type_id: "1",
        main_image:
          "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000",
      },
      {
        name: "POI 2",
        description: "Point of interest 2",
        visit_info: "Visit info of poi 2",
        lat: "-47.80734",
        lang: "-90.97483",
        type_id: "1",
        main_image:
          "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000",
      },
      {
        name: "POI 3",
        description: "Point of interest 3",
        visit_info: "Visit info of poi 3",
        lat: "-47.80734",
        lang: "-90.97483",
        type_id: "1",
        main_image:
          "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000",
      },
    ];
    await Point_of_interest.bulkCreate(poiList);
    const poiImages = [
      { name: "Photo1", path: "/path/photo", poi_id: "1" },
      { name: "Photo2", path: "/path/photo", poi_id: "1" },
      { name: "Photo3", path: "/path/photo", poi_id: "1" },
      { name: "Photo1", path: "/path/photo", poi_id: "2" },
      { name: "Photo2", path: "/path/photo", poi_id: "2" },
      { name: "Photo3", path: "/path/photo", poi_id: "2" },
      { name: "Photo1", path: "/path/photo", poi_id: "3" },
      { name: "Photo2", path: "/path/photo", poi_id: "3" },
      { name: "Photo3", path: "/path/photo", poi_id: "3" },
    ];
    await Poi_images.bulkCreate(poiImages);
    const serviceyTypeList = [
      {
        name: "Pharmacy",
      },
      {
        name: "Hotel",
      },
      {
        name: "Resturant",
      },
      {
        name: "Shopping center",
      },
      {
        name: "Hospital",
      },
    ];
    await S_types.bulkCreate(serviceyTypeList);
    const serviceList = [
      { type_id: 1, name: "Phara1", address: "Random address 1" },
      { type_id: 1, name: "Phara2", address: "Random address 2" },
      { type_id: 1, name: "Phara3", address: "Random address 3" },
      { type_id: 2, name: "Hotel1", address: "Random address " },
      { type_id: 2, name: "Hotel2", address: "Random address " },
      { type_id: 2, name: "Hotel3", address: "Random address " },
      { type_id: 3, name: "Resturant1", address: "Random address " },
      { type_id: 3, name: "Resturant2", address: "Random address " },
      { type_id: 3, name: "Resturant3", address: "Random address " },
    ];
    await Services.bulkCreate(serviceList);
    /*const opHoursList = [
      { service_id: 1, day: "Monday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 1, day: "Tusday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 1, day: "Friday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 2, day: "Monday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 2, day: "Tusday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 2, day: "Friday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 3, day: "Monday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 3, day: "Tusday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 3, day: "Friday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 4, day: "Monday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 4, day: "Tusday", s_hour: "08:00:00", c_hour: "20:00:00" },
      { service_id: 4, day: "Friday", s_hour: "08:00:00", c_hour: "20:00:00" },
    ];
    await Op_hours.bulkCreate(opHoursList);
    
    const eventList = [
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 1,
        main_image: "path/image",
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 1,
        main_image: "path/image",
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 1,
        main_image: "path/image",
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 2,
        main_image: "path/image",
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 2,
        main_image: "path/image",
      },
      {
        name: "Random event name",
        description: "Description ",
        datetime: "2022-05-03T08:00:00",
        info: "Info",
        poi_id: 2,
        main_image: "path/image",
      },
    ];
    await Event.bulkCreate(eventList);
    const eventImagesList = [
      {
        name: "Image",
        path: "path/image",
        event_id: 1,
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 1,
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 1,
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 2,
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 2,
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 2,
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 3,
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 3,
      },
      {
        name: "Image",
        path: "path/image",
        event_id: 3,
      },
    ];
    await Event_images.bulkCreate(eventImagesList);
    */
  
    const itineraryList = [
      {
        name: "Itinerary",
        duration: 3,
        description: "Itinerary description",
      },
      {
        name: "Itinerary",
        duration: 4,
        description: "Itinerary description",
      },
      {
        name: "Itinerary",
        duration: 3,
        description: "Itinerary description",
      },
      {
        name: "Itinerary",
        duration: 5,
        description: "Itinerary description",
      },
      {
        name: "Itinerary",
        duration: 3,
        description: "Itinerary description",
      },
      {
        name: "Itinerary",
        duration: 4,
        description: "Itinerary description",
      },
    ];
    await queryInterface.bulkInsert("Itinerary", itineraryList);
   /*
    const poi_itList = [
      {
        itinerary_id: 1,
        poi_id: 1,
      },
    ];
  
    await Poi_itinerary.bulkCreate(poi_itList);
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
