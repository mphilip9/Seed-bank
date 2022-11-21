import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from '@mui/material';


const Search = ({searchZones, month}) => {
  const [zoneSearch, setZoneSearch] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setZoneSearch(e.target.value)

  }
  const handleClick = (e) => {
    searchZones(zoneSearch, month)
    setZoneSearch("")
    e.preventDefault()
  }
  return (
    <div className=" pl-3 flex flex-row bg-white...">


      <TextField
        label="Search by Zipcode"
        sx={{
          backgroundColor: "white"
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
      <h2 className="collapse pt-3 pl-2 sm:visible">Enter a zipcode to find your hardiness zone</h2>


    {/* <input onChange={handleChange} placeholder="Search Climate Zone" name="zoneSearch" value={zoneSearch}></input>
    <button type="button" onClick={handleClick}>Search</button> */}
    </div>
  )
}

export default Search;