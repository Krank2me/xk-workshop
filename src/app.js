require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/index"));

module.exports = app;
