const express = require("express");

const app = express();
const morgan = require("morgan");
const tourRouter = require("./routes/tours");

app.use(express.json());
app.use(morgan("dev"));

app.use("/tours", tourRouter);
module.exports = app;
