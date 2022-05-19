const Event = require("../models/Event");
const HttpError = require("../models/http-error");

const EventInfo = async (req, res, next) => {
  const { event_id } = req.params;
  try {
    const event_info = await Event.getInfo(event_id);
    res.status(200).json(event_info);
  } catch (err) {
    return next(
      new HttpError("Error in retrieving the event info, try again later", 500)
    );
  }
};

const GetEvents = async (req, res, next) => {
  const { type } = req.params;
  try {
    let events;
    if (type === "summer") {
      events = await Event.getSummerEvents();
    }
    if (type === "winter") {
      events = await Event.getWinterEvents();
    }
    if (type === "year") {
      events = await Event.getYearEvents();
    }
    if (!type) {
      events = await Event.getAllEvents();
    }

    res.status(200).json(events);
  } catch (err) {
    return next(
      new HttpError("Error in retrieving the events, try again later", 500)
    );
  }
};

exports.EventInfo = EventInfo;
exports.GetEvents = GetEvents;
