const express = require("express");
const path = require("path");
let app = express();
let bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "/dist")));
app.use(bodyParser.json());
// eslint-disable-next-line no-unused-vars
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.listen(5000);
