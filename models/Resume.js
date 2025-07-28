const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  personal: {
    name: String,
    phone: String,
    email: String,
    linkedin: String,
    github: String,
    leetcode: String,
    location: String
  },
  objective: String,
  education: [
    {
      degree: String,
      institution: String,
      year: String,
      grade: String
    }
  ],
  skills: {
    frontend: [String],
    backend: [String],
    languages: [String],
    tools: [String],
    cs_fundamentals: [String]
  },
  experience: [
    {
      title: String,
      company: String,
      period: String,
      description: String
    }
  ],
  projects: [
    {
      name: String,
      description: String,
      github: String
    }
  ],
  certifications: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Resume", resumeSchema);
