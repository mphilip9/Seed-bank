import logo from './logo.svg';
import {useState, useEffect} from 'react'
import Search from './components/Search'
import AuthenticationButton from './components/Authentication-button'
import axios from 'axios'
import './assets/App.css';

function App() {
  const [currentZone, setCurrentZone] = useState("7a")

  const searchZones = (zone) => {
    console.log(zone)
    axios.get('/api', {params: {zone: zone}}).then(data => {
      setCurrentZone(data.data.zone)
    }).catch(error => console.log(error))
  }

  // useEffect(() => {
  // }, [])
  return (
    <div className="App">
      <div className="search">
        <h2>Current Climate Zone: {currentZone}</h2>
      <Search searchZones={searchZones}/>
      </div>
      <AuthenticationButton />
    </div>
  );
}

export default App;
