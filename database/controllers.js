const db = require('./database')
const axios = require('axios')

exports.searchPlants = (req, res) => {
  const currentMonth = (new Date().getMonth() + 1).toString()
  console.log(req.query)
  let zone = req.query.zone
  axios.get(`https://phzmapi.org/${zone}.json`).then(data => {
    db.query(`select * from plant_dates where (transplant_start, transplant_end) overlaps
    ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-30'::DATE) OR (direct_sowing_start, direct_sowing_end) overlaps
    ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-30'::DATE);`).then(result => {
      console.log(result.rows)
      res.send({zone: data.data, plantData: result.rows})
    }).catch(error => console.log(error))
  }).catch(error => console.log(error))
}

exports.getUserData = (req, res) => {
  console.log(req.query.zone)
  let user = req.query.sub
  let zone = req.query.zone
  let email = req.query.email
  db.query(findUsers, [user, zone, email]).then(success => {
    db.query(getUsers, [user]).then(result => {
      res.send(result.rows[0])
    }).catch(error => console.log(error))
  }).catch(error => console.log(error))
}

const getCurrentMonth = () => {

}


// getMatchingPlants = `select * from plant_dates where (transplant_start, transplant_end) overlaps
// ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-30'::DATE) OR (direct_sowing_start, direct_sowing_end) overlaps
// ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-30'::DATE);`

findUsers = `insert into users (sub, zone, email) values ($1, $2, $3) ON CONFLICT (sub) DO NOTHING`

getUsers = `select created_at, zone, email from users where sub = $1 limit 1`