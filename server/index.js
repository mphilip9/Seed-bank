const express = require("express");
const axios = require("axios");
const controllers = require('../database/controllers');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", controllers.searchPlants);

app.get("/api/users", )

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});