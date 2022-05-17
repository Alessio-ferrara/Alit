const Event = require("../models/Event");

const EventInfo = async (req, res, next) => {
  const { event_id } = req.params;
  try {
    const event_info = await Event.getInfo(event_id);
    res.status(200).json(event_info);
  } catch (err) {
    throw err;
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
    throw err;
  }
};

exports.EventInfo = EventInfo;
exports.GetEvents = GetEvents;
