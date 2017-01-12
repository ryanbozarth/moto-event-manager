const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    attendees: {
      type: Array
    }

});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
