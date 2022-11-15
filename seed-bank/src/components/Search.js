import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from '@mui/material';


const Search = ({searchZones}) => {
  const [zoneSearch, setZoneSearch] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setZoneSearch(e.target.value)

  }
  const handleClick = (e) => {
    searchZones(zoneSearch)
    setZoneSearch("")
    e.preventDefault()
  }
  return (
    <div className="border-radius-search">
      <TextField
  label="Search by Zipcode"
  sx={{
     borderRadius: "50%"
  }}
  onChange={handleChange}
  value={zoneSearch}
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton onClick={handleClick}>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
    {/* <input onChange={handleChange} placeholder="Search Climate Zone" name="zoneSearch" value={zoneSearch}></input>
    <button type="button" onClick={handleClick}>Search</button> */}
    </div>
  )
}

export default Search;