const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { user_id, courier_id, weight, shipping_mode, origin_port, destination_address, rate, eta_days, booking_ref, status, awb, tracking_url } = req.body;
  try {
    const order = new Order({
      user_id,
      courier_id,
      weight,
      shipping_mode,
      origin_port,
      destination_address,
      rate,
      eta_days,
      booking_ref,
      status,
      awb,
      tracking_url
    });
    await order.save();
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ msg: "Order not found" });
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.updateOrder = async (req, res) => {
  const { weight, shipping_mode, origin_port, destination_address, rate, eta_days, booking_ref, status, awb, tracking_url } = req.body;
  const orderFields = { weight, shipping_mode, origin_port, destination_address, rate, eta_days, booking_ref, status, awb, tracking_url };
  try {
    let order = await Order.findByIdAndUpdate(req.params.id, { $set: orderFields }, { new: true });
    if (!order) return res.status(404).json({ msg: "Order not found" });
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ msg: "Order not found" });
    await Order.findByIdAndDelete(req.params.id);
    res.json({ msg: "Order removed" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
