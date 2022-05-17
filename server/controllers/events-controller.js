const Event = require("../models/Event")

const EventInfo = async (req, res, next) => {
  const {event_id}  = req.params;
  try {
    const event_info = await Event.getInfo(event_id);
    res.status(200).json(event_info);
  } catch (err) {
    throw err;
  }
};

exports.EventInfo = EventInfo;

