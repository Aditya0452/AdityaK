require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

// ✅ Updated MongoDB Connection (Remove Deprecated Options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define Schema & Model
const visitorSchema = new mongoose.Schema({ count: Number });
const Visitor = mongoose.model("Visitor", visitorSchema);

// Initialize visitor count if not exists
const initViews = async () => {
  let visitors = await Visitor.findOne();
  if (!visitors) {
    await new Visitor({ count: 0 }).save();
  }
};
initViews();

// API to update visitor count
app.get("/update-visit", async (req, res) => {
  let visitors = await Visitor.findOne();
  visitors.count += 1;
  await visitors.save();
  res.json({ count: visitors.count });
});

// API to fetch visitor count
app.get("/get-visits", async (req, res) => {
  let visitors = await Visitor.findOne();
  res.json({ count: visitors ? visitors.count : 0 });
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
