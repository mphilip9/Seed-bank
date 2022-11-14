import logo from './logo.svg';
import {useState, useEffect} from 'react'
import Search from './components/Search'
import AuthenticationButton from './components/Authentication-button'
import axios from 'axios'
import './assets/App.css';

function App() {

  const connectToAPI = () => {
    axios.get('/api').then(data => console.log(data)).catch(error => console.log(error))
  }
  useEffect(() => {
    connectToAPI()
    console.log(process.env.REACT_APP_AUTH0_DOMAIN)
  }, [])
  return (
    <div className="App">
      <Search />
      <AuthenticationButton />
    </div>
  );
}

export default App;
