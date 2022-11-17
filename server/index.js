const express = require("express");
const axios = require("axios");
const path = require('path');
const controllers = require('../database/controllers');

const PORT = process.env.PORT || 3001;



const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get("/api", controllers.searchPlants);

app.get("/api/users", controllers.getUserData)


  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



