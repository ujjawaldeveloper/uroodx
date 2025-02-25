const mongoose = require("mongoose");

const CourierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shipping_modes: { type: [String], default: [] },
  coverage_area: { type: String },
  booking_url: { type: String },
  tracking_url: { type: String },
  api_key: { type: String },
  discount_rate: { type: Number, default: 2.0 }
});

module.exports = mongoose.model("Courier", CourierSchema);
