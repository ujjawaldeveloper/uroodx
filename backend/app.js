const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/v1", routes);
mongoose
  .connect(process.env.MONGO_STRING)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
