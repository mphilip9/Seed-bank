import logo from './logo.svg';
import {useState, useEffect} from 'react'
import Search from './components/Search'
import Nav from './components/Nav'
import { useAuth0 } from '@auth0/auth0-react';
import ByMonth from './components/ByMonth'
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

function App() {
  const { user  } = useAuth0();
  const [currentZone, setCurrentZone] = useState("7a")
  const [currentPlants, setCurrentPlants] = useState([])
  const [userData, setUserData] = useState([])
  const navigate = useNavigate();

  const searchZones = (zone) => {
    axios.get('/api', {params: {zone: zone}}).then(data => {
      // console.log(data.data.plantData)
      // clean up this data.data nonsense
      setCurrentZone(data.data.zone.zone)
      setCurrentPlants(data.data.plantData)
    }).catch(error => console.log(error))
    navigate('/bymonth');
  }

  const retrieveUserData = (sub) => {
    axios.get('/api/users', {params: {sub: sub}}).then(userData => {
      console.log(userData.data)
    }).catch(error => console.log(error))
  }

  useEffect(() => {
    if (user) {
      retrieveUserData(user.sub)
    }
  }, [user])
  return (
    <>
    <div className="App">
      <Nav />
      <div className="search">
        <h2>Current Climate Zone: {currentZone}</h2>

      <Routes>
          {/* <Route path="/" element={<Navigate to="/search" />} /> */}
          <Route path="/bymonth" element={<ByMonth currentPlants={currentPlants}/>} />
          <Route path="/" element={<Search searchZones={searchZones}/>}/>
      </Routes>
      </div>
      {/* <ByMonth /> */}

    </div>
    </>

  );
}

export default App;
