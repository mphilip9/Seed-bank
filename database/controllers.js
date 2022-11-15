const db = require('./database')
const axios = require('axios')

exports.searchPlants = (req, res) => {
  console.log(req.query)
  let zone = req.query.zone
  axios.get(`https://phzmapi.org/${zone}.json`).then(data => {
    db.query(getMatchingPlants).then(result => {
      console.log(result.rows)
      res.send({zone: data.data, plantData: result.rows})
    }).catch(error => console.log(error))
  }).catch(error => console.log(error))
}

exports.getUserData = () =>


getMatchingPlants = `select * from plant_dates where (transplant_start, transplant_end) overlaps
('2022-02-01'::DATE, '2022-02-07'::DATE);`