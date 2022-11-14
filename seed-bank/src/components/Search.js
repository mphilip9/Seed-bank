import React, {useState} from 'react';


const Search = ({searchZones}) => {
  const [zoneSearch, setZoneSearch] = useState('')

  const handleChange = (e) => {
    setZoneSearch(e.target.value)

  }
  const handleClick = (e) => {
    searchZones(zoneSearch)
    setZoneSearch("")
    e.preventDefault()
  }
  return (
    <div>
    <input onChange={handleChange} placeholder="Search Climate Zone" name="zoneSearch" value={zoneSearch}></input>
    <button type="button" onClick={handleClick}>Search</button>
    </div>
  )
}

export default Search;