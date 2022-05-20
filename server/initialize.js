export default async (models) => {
    const poiList = [
        {
            name: "POI 1",
            description: "Point of interest 1",
            visit_info: "Visit info of poi 1",
            lat: "-47.80734",
            lang: "-90.97483",
            type_id: "1",
            main_image: "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000"
        },
        {
            name: "POI 2",
            description: "Point of interest 2",
            visit_info: "Visit info of poi 2",
            lat: "-47.80734",
            lang: "-90.97483",
            type_id: "1",
            main_image: "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000"
        },{
            name: "POI 3",
            description: "Point of interest 3",
            visit_info: "Visit info of poi 3",
            lat: "-47.80734",
            lang: "-90.97483",
            type_id: "1",
            main_image: "https://www.akamai.com/site/im-demo/media-viewer/10.jpg?imwidth=5000"
        },
    ]
    await models.Point_of_interest.bulkCreate(poiList)

    const catList = [
        {
            name: "Cat 1",
            breed: "Siberian",
            description: "Details about cat 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 2",
            breed: "Birman",
            description: "Details about cat 2",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 3",
            breed: "Bombay",
            description: "Details about cat 3",
            img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 4",
            breed: "Calico",
            description: "Details about cat 4",
            img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
            locationId: location1.id
        },
        {
            name: "Cat 5",
            breed: "Maine Coon",
            description: "Details about cat 5",
            img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
            locationId: location1.id
        },
    ]
    await models.Cat.bulkCreate(catList)
}
