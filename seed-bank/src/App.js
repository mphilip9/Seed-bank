import {useState, useEffect} from 'react'
import Nav from './components/Nav'
import MyPlants from './components/MyPlants'
import Home from './components/Home'
import About from './components/About'
import { format, parseISO } from "date-fns";
import { useAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Link
} from "react-router-dom";
import axios from 'axios'
import './assets/App.css';
// import './assets/nav.css'

function App() {
  // const [darkToggle, setDarkToggle] = React.useState(false)
  const [darkMode, setDarkMode] = useState('')
  const { user  } = useAuth0();
  const [currentZone, setCurrentZone] = useState("7a")
  const [currentPlants, setCurrentPlants] = useState([])
  const [month, setMonth] = useState((new Date().getMonth()))
  const [notFound, setNotFound] = useState(true)
  const [profileData, setProfileData] = useState({})
  const navigate = useNavigate();

  const searchZones = (zone, searchMonth = month) => {
    setMonth(searchMonth)
    axios.get('/api', {params: {zone: zone, month: searchMonth}}).then(data => {
      console.log(data.data)
      if (data.data) {
        if (notFound) {
          setNotFound(false)
        }
      let plantData = formatPlantData(data.data.plantData)
      if (data.data.zone) {
        console.log(plantData)
        setCurrentZone(data.data.zone.zone)
        setCurrentPlants(plantData)
      } else {
        setCurrentPlants(plantData)
      }
    } else {
      setNotFound(true)
    }
    }).catch(error => console.log(error))
  }

  const retrieveUserData = (sub, zone) => {
    axios.get('/api/users', {params: {sub: sub, zone: zone, email: user.email}}).then(userData => {
      // console.log(user)
      // console.log(userData.data)
      userData.data.created_at = format(parseISO(userData.data.created_at), 'MMMM d, yyyy')
      // console.log(userData.data.created_at)
      setProfileData(userData.data)
    }).catch(error => console.log(error))
  }
  useEffect(() => {
    searchZones(currentZone, month)
  }, [])

  useEffect(() => {
    if (user) {
      retrieveUserData(user.sub, currentZone)
    }
  }, [user])

  const darkToggle = () => {
    darkMode === 'dark' ? setDarkMode('') : setDarkMode('dark')
  }
  return (
    <div className={darkMode}>
    <div className='bg-sand h-screen font-Open dark:bg-gray-700 dark:text-white' >
    <div className="App">
      <Nav darkToggle={darkToggle}/>
      <div >
      <Routes>
          <Route path="/" element={<Home month={month} searchZones={searchZones} currentPlants={currentPlants} currentZone={currentZone} notFound={notFound}/>}/>
          <Route path="/myplants" element={<MyPlants profileData={profileData}/>}/>
          <Route path="/about" element={<About />}/>
      </Routes>
      </div>

      </div>
      </div>
   </div>
  );
}

// for formatting the dates
const formatPlantData = (data) => {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].first_planting_start, data[i].second_planting_start)
    if (data[i].first_planting_start) {
    data[i].first_planting_start = format(parseISO(data[i].first_planting_start), 'MMMM d')
    data[i].first_planting_end = format(parseISO(data[i].first_planting_end), 'MMMM d')
    }
    if (data[i].second_planting_start) {
    data[i].second_planting_start = format(parseISO(data[i].second_planting_start), 'MMMM d')
    data[i].second_planting_end = format(parseISO(data[i].second_planting_end), 'MMMM d')
    }
  }
  return data;
}

export default App;
