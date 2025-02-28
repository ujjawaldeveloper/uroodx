const express = require("express");
const router = express.Router();
const verifyToken = require("../controllers/verifyToken");
const adminController = require("../controllers/admin");
const userController = require("../controllers/user");
const courierController = require("../controllers/courier");
const orderController = require("../controllers/order");
const quotationController = require("../controllers/quotation");
// const dhlController = require("../controllers/dhl");

// Admin Routes
router.post("/admin/register", adminController.register);
router.post("/admin/login", adminController.login);
router.put("/admin/changepassword", verifyToken, adminController.changePassword);
// User Routes
router.get("/user/:id", verifyToken, userController.getUser);
router.get("/users", verifyToken, userController.userList);
router.post("/user", verifyToken, userController.createUser);
router.put("/user/:id", verifyToken, userController.editUser);
router.delete("/user/:id", verifyToken, userController.deleteUser);
// Courier Routes
router.post("/courier", verifyToken, courierController.createCourier);
router.get("/couriers", verifyToken, courierController.getCouriers);
router.get("/courier/:id", verifyToken, courierController.getCourier);
router.put("/courier/:id", verifyToken, courierController.updateCourier);
router.delete("/courier/:id", verifyToken, courierController.deleteCourier);
// Order Routes
router.post("/order", verifyToken, orderController.createOrder);
router.get("/order/:id", verifyToken, orderController.getOrder);
router.get("/orders", verifyToken, orderController.listOrders);
router.put("/order/:id", verifyToken, orderController.updateOrder);
router.delete("/order/:id", verifyToken, orderController.deleteOrder);
// Quotation Routes
router.post("/quotation", verifyToken, quotationController.createQuotation);
router.get("/quotation/:id", verifyToken, quotationController.getQuotation);
router.get("/quotations", verifyToken, quotationController.listQuotations);
// DHL Rating API Route
// router.post("/dhl/rating", verifyToken, dhlController.getRating);
module.exports = router;