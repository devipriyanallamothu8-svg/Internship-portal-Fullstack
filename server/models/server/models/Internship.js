const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  stipend: String
});

module.exports = mongoose.model("Internship", InternshipSchema);
