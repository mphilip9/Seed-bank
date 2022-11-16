import {useState, useEffect} from 'react'
import Nav from './components/Nav'
import MyPlants from './components/MyPlants'
import Home from './components/Home'
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
  const { user  } = useAuth0();
  const [currentZone, setCurrentZone] = useState("7a")
  const [currentPlants, setCurrentPlants] = useState([])
  const [profileData, setProfileData] = useState({})
  const navigate = useNavigate();

  const searchZones = (zone) => {
    axios.get('/api', {params: {zone: zone}}).then(data => {
      console.log(data.data.plantData)
      // clean up this data.data nonsense
      setCurrentZone(data.data.zone.zone)
      setCurrentPlants(data.data.plantData)
    }).catch(error => console.log(error))
    // navigate('/bymonth');
  }

  const retrieveUserData = (sub, zone) => {
    axios.get('/api/users', {params: {sub: sub, zone: zone, email: user.email}}).then(userData => {
      // console.log(user)
      // console.log(userData.data)
      userData.data.created_at = format(parseISO(userData.data.created_at), 'MMMM d, yyyy')
      setProfileData(userData.data)
    }).catch(error => console.log(error))
  }

  useEffect(() => {
    if (user) {
      retrieveUserData(user.sub, currentZone)
    }
  }, [user])
  return (
    <>
    <div className="App">
      <Nav />
      <div >
      <Routes>
          <Route path="/" element={<Home searchZones={searchZones} currentPlants={currentPlants} currentZone={currentZone}/>}/>
          <Route path="/myplants" element={<MyPlants profileData={profileData}/>}/>
      </Routes>
      </div>
    </div>
    </>

  );
}

export default App;
