import Event from "./models/event";
import Event_images from "./models/event_images";
import Itinerary from "./models/Itinerary";
import Op_hours from "./models/op_hours";
import Point_of_interest from "./models/point_of_interest";
import Poi_images from "./models/poi_images";
import Poi_itinerary from "./models/poi_itinerary";
import Poi_types from "./models/poi_types";
import Services from "./models/services";
import S_types from "./models/s_types";

const express = require("express");
const app = express();
const db = require("./config/database.js");
const HttpError = require("./models/http-error");
const initialize = require("./initialize").default;
app.use(express.json());

db.authenticate()
  .then(async () => {
      
    await Poi_types.sync();
    await Point_of_interest.sync();
    await Poi_images.sync();
    await Itinerary.sync();
    await Poi_itinerary.sync();
    await S_types.sync();
    await Services.sync();
    await Op_hours.sync();
    await Event.sync();
    await Event_images.sync();
    
    
  })
  .catch((err) => console.log("Errore" + err));


const eventsRoutes = require("./routes/events-route");
const poisRoutes = require("./routes/pois-route");
const itinerariesRoutes = require("./routes/itineraries-route");
const servicesRoutes = require("./routes/services-route");

app.use("/events", eventsRoutes);
app.use("/pois", poisRoutes);
app.use("/itineraries", itinerariesRoutes);
app.use("/services", servicesRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Route not found", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    //cancella il file (immagine) nel caso in cui ci fosse un problema
    fs.unlink(req.file.path, (err) => {});
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Generic error!" });
});

/*
// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Cat = database.define("cat", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const Location  = database.define("location", {
        name: DataTypes.STRING,
        city: DataTypes.STRING,
    })
    Location.hasMany(Cat)
    Cat.belongsTo(Location)
    await database.sync({ force: true })
    return {
        Cat,
        Location
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
    index: {
        title: "Homepage",
        image: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
    about: {
        title: "About",
        image: "https://fs.i3lab.group/hypermedia/images/about.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    app.get('/cats/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Cat.findOne({ where: { id }, include: [{model: models.Location}] })
        return res.json(result)
    })

    // HTTP GET api that returns all the cats in our actual database
    app.get("/cats", async (req, res) => {
        const result = await models.Cat.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                breed: element.breed,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // HTTP POST api, that will push (and therefore create) a new element in
    // our actual database
    app.post("/cats", async (req, res) => {
        const { body } = req
        await models.Cat.create(body);
        return res.sendStatus(200)
    })
}

runMainApi()
*/

export default app;
