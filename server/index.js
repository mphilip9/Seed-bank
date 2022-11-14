const express = require("express");
const controllers = require('../database/controllers')

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.send({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});