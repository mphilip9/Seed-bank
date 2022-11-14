const express = require("express");
const axios = require("axios");
const controllers = require('../database/controllers');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  console.log(req.query)
  let zone = req.query.zone
  axios.get(`https://phzmapi.org/${zone}.json`).then(data => {
    res.send(data.data)
  }).catch(error => console.log(error))
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});