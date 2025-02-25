const Quotation = require("../models/Quotation");

exports.createQuotation = async (req, res) => {
  const { order_id, courier_id, source, rate, eta_days } = req.body;
  try {
    const quotation = new Quotation({
      order_id,
      courier_id,
      source,
      rate,
      eta_days
    });
    await quotation.save();
    res.json(quotation);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.findById(req.params.id);
    if (!quotation) return res.status(404).json({ msg: "Quotation not found" });
    res.json(quotation);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.listQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find();
    res.json(quotations);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
