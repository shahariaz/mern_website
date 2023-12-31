const { configDotenv } = require("dotenv");
const express = require("express");
configDotenv;
const mongan = require("morgan");
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRoute");
const GlobalErrorHandler = require("./utils/error");
const contactRouter = require("./routes/contactRoute");
const app = express();
app.use(mongan("dev"));
app.use(bodyParser.json());
app.use("/api/auth", authRouter);
app.use("/api", contactRouter);

//erro handlers
app.use(GlobalErrorHandler);
module.exports = app;
