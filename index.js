const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

app.use("/api/users", userRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/resume", require("./routes/resumeRoutes"));
app.use(cors({
  origin: "https://poornima-resume-generator.vercel.app", // replace with actual Vercel URL
  credentials: true
}));


// DB + Server Start
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on 5000")))
  .catch((err) => console.error(err));
