const express = require("express");
const db = require("./config/db");

const app = express();

console.log(db)
app.get("/", (req, res) => {
  res.end("hello from backend");
});

module.exports = app;