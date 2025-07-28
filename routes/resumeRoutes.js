const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");

// Create Resume
router.post("/create", async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (err) {
    res.status(500).json({ error: "Failed to create resume" });
  }
});

// Get All Resumes for a User
router.get("/user/:userId", async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.params.userId });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});

// Get Single Resume
// GET /api/resumes/:id
router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    res.json(resume);
  } catch (err) {
    res.status(404).json({ error: "Resume not found" });
  }
});


// Update Resume
router.put("/:id", async (req, res) => {
  try {
    const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update resume" });
  }
});

// Delete Resume
router.delete("/:id", async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);
    res.json({ message: "Resume deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete resume" });
  }
});

module.exports = router;
