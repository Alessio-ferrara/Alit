const HttpError = require("../http-error");

const Event = require("../models").event;
const EventInfo = async (req, res, next) => {
  const { event_id } = req.params;
  try {
    const event_info = await Event.getInfo(event_id);
    res.status(200).json(event_info);
  } catch (err) {
    return next(new HttpError(err, 500));
  }
};

const GetEvents = async (req, res, next) => {
  try {
    let events = await Event.getAllEvents();
    let summer_events = await Event.getSummerEvents();
    let winter_events = await Event.getWinterEvents();
    let year_events = await Event.getYearEvents();

    const all_events = {};
    all_events["summer_events"] = summer_events;
    all_events["winter_events"] = winter_events;
    all_events["year_events"] = year_events;
    all_events["all_events"] = events;
    res.status(200).json(all_events);
  } catch (err) {
    return next(new HttpError(err, 500));
  }
};

exports.EventInfo = EventInfo;
exports.GetEvents = GetEvents;
