// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Payroll = require("./models/payroll");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Payroll route
app.post("/api/payroll", async (req, res) => {
  try {
    const payroll = new Payroll(req.body);
    await payroll.save();
    res.json({ message: "Payroll form submitted & saved successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ message: "Error saving payroll data", error: error.message });
  }
});

// Get all payroll submissions (optional)
app.get("/api/payroll", async (req, res) => {
  try {
    const data = await Payroll.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching payroll data" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

//andrewmjr2_db_user
//zYrkrlUxrgSOAMch
//mongodb+srv://andrewmjr2_db_user:zYrkrlUxrgSOAMch@cluster0.higszmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
