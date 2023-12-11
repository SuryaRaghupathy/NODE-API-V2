require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,

  credentials: true,

  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", cors(corsOptions), productRoute);

//routes

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});
app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

app.use(errorMiddleware);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
