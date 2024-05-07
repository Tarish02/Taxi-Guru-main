const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passwordSchema = new Schema({
  passCode: String,
});
const passwordModel = mongoose.model("Password", passwordSchema);
module.exports = passwordModel;