const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserRequestSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: false },
  email: { type: String, require: true },
  phoneNumber: { type: String, require: true },
  journeyType: { type: String, default: "Single" },
  seen: { type: Boolean, default: false },
  dateTime: { type: Date, default: Date.now },
  pickupAddress: { type: String, require: true },
  dropAddress: { type: String, require: true },
});

module.exports = mongoose.model("userRequest", UserRequestSchema);
