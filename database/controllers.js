const db = require('./database')
const axios = require('axios')

exports.searchPlants = (req, res) => {
  const currentMonth = Number(req.query.month) + 1
  console.log(req.query)
  if (req.query.zone.length > 3) {
    // query is a zipcode, not a zone
  let zone = req.query.zone
  axios.get(`https://phzmapi.org/${zone}.json`).then(data => {
    let newZone =  Number(data.data.zone.replace(/\D/g,''));
    // deal with zones above 9 or below 2 for now
    newZone > 9 ? newZone = 9 : null;
    newZone < 2 ? newZone = 2 : null;
    console.log(newZone)
    db.query(`select * from plant_dates where ((first_planting_start, first_planting_end) overlaps
    ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-28'::DATE) OR (second_planting_start, second_planting_end) overlaps
    ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-28'::DATE)) AND  zone_start <= ${newZone} AND zone_end >= ${newZone};`).then(result => {
      res.send({zone: data.data, plantData: result.rows})
    }).catch(error => console.log(error))
  }).catch(error => res.send(false))
  } else {
    // query is a zone
    let newZone =  Number(req.query.zone.replace(/\D/g,''));
    newZone > 9 ? newZone = 9 : null;
    newZone < 2 ? newZone = 2 : null;
    db.query(`select * from plant_dates where ((first_planting_start, first_planting_end) overlaps
    ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-28'::DATE) OR (second_planting_start, second_planting_end) overlaps
    ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-28'::DATE))AND  zone_start <= ${newZone} AND zone_end >= ${newZone};`).then(result => {
      // console.log(result.rows)
      res.send({plantData: result.rows})
    }).catch(error => console.log(error))
  }
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


// getMatchingPlants = `select * from plant_dates where (first_planting_start, first_planting_end) overlaps
// ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-30'::DATE) OR (second_planting_start, second_planting_end) overlaps
// ('2022-${currentMonth}-01'::DATE, '2022-${currentMonth}-30'::DATE);`

findUsers = `insert into users (sub, zone, email) values ($1, $2, $3) ON CONFLICT (sub) DO NOTHING`

getUsers = `select created_at, zone, email from users where sub = $1 limit 1`