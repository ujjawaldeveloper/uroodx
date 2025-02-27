const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courier_id: { type: mongoose.Schema.Types.ObjectId, ref: "Courier", required: true },
  weight: { type: Number },
  shipping_mode: { type: String, required: true },
  origin_port: { type: String },
  destination_address: { type: String },
  rate: { type: Number },
  eta_days: { type: Number },
  booking_ref: { type: String, unique: true },
  status: { type: String, default: "quoted" },
  awb: { type: String },
  tracking_url: { type: String },
  created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Order", OrderSchema);