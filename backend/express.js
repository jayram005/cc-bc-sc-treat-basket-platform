const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(require("./src/routes"));
process.on("SIGINT", () => {
  process.exit();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

module.exports = app;