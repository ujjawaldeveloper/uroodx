const mongoose = require("mongoose");
const QuotationSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  courier_id: { type: mongoose.Schema.Types.ObjectId, ref: "Courier", required: true },
  source: { type: String, enum: ["courier", "uroodx"], required: true },
  rate: { type: Number, required: true },
  eta_days: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Quotation", QuotationSchema);