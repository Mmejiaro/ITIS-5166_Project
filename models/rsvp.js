const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rsvpSchema = new Schema(
  {
    rsvp: { type: String, required: [true, "RSVP must be included"] },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    connection: { type: Schema.Types.ObjectId, ref: "Connection" },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Rsvp', rsvpSchema);
