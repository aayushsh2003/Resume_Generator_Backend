const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  education: Array,
  experience: Array,
  skills: [String],
  summary: String,
  projects: Array,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  resumes: [resumeSchema] // supports multiple resumes
});

module.exports = mongoose.model("User", userSchema);
