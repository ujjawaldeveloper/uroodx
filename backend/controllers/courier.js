const Courier = require("../models/Courier");

exports.createCourier = async (req, res) => {
  const { name, shipping_modes, coverage_area, booking_url, tracking_url, api_key, discount_rate } = req.body;
  try {
    const courier = new Courier({
      name,
      shipping_modes,
      coverage_area,
      booking_url,
      tracking_url,
      api_key,
      discount_rate
    });
    await courier.save();
    res.json(courier);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getCouriers = async (req, res) => {
  try {
    const couriers = await Courier.find();
    res.json(couriers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getCourier = async (req, res) => {
  try {
    const courier = await Courier.findById(req.params.id);
    if (!courier) return res.status(404).json({ msg: "Courier not found" });
    res.json(courier);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.updateCourier = async (req, res) => {
  const { name, shipping_modes, coverage_area, booking_url, tracking_url, api_key, discount_rate } = req.body;
  const courierFields = { name, shipping_modes, coverage_area, booking_url, tracking_url, api_key, discount_rate };
  try {
    let courier = await Courier.findByIdAndUpdate(req.params.id, { $set: courierFields }, { new: true });
    if (!courier) return res.status(404).json({ msg: "Courier not found" });
    res.json(courier);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.deleteCourier = async (req, res) => {
  try {
    let courier = await Courier.findById(req.params.id);
    if (!courier) return res.status(404).json({ msg: "Courier not found" });
    await Courier.findByIdAndDelete(req.params.id);
    res.json({ msg: "Courier removed" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
