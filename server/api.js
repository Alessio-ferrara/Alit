const express = require("express");
const app = express();
const db = require("./config/database.js");
const HttpError = require("./http-error");
//const initialize = require("./initialize").default;
app.use(express.json());

db.authenticate().catch((err) => console.log("Errore" + err));

const eventsRoutes = require("./routes/events-route");
const poisRoutes = require("./routes/pois-route");
const itinerariesRoutes = require("./routes/itineraries-route");
const servicesRoutes = require("./routes/services-route");
const contentRoutes = require("./routes/content-route");
const contactRoutes = require("./routes/contact-route");

app.use("/events", eventsRoutes);
app.use("/pois", poisRoutes);
app.use("/itineraries", itinerariesRoutes);
app.use("/services", servicesRoutes);
app.use("/content", contentRoutes);
app.use("/contact-us", contactRoutes);

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

export default app;
