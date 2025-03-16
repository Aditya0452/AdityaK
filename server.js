//Mango DB
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors()); // Allow requests from frontend

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const visitorSchema = new mongoose.Schema({ count: Number });
const Visitor = mongoose.model("Visitor", visitorSchema);

// API to update visitor count
app.get("/update-visit", async (req, res) => {
  let visitors = await Visitor.findOne();
  if (!visitors) {
    visitors = new Visitor({ count: 1 });
  } else {
    visitors.count += 1;
  }
  await visitors.save();
  res.json({ count: visitors.count });
});

// API to fetch visitor count
app.get("/get-visits", async (req, res) => {
  let visitors = await Visitor.findOne();
  res.json({ count: visitors ? visitors.count : 0 });
});

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
