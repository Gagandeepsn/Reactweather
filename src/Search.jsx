import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'
import { useState } from 'react';
export default function Search({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d0facdb537fa26a004fc75c1e1118ab4"
    let [city,setcity]=useState("");
    let[error,setError]=useState(false);
    let getWeather=async()=>{
        try {
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse=await response.json();
        
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            weather:jsonresponse.weather[0].description,


       }
       console.log(result) 
       return result;
            
        } catch (err) {
            throw err;
        };
        
    }

    let handleChange=(evt)=>{
        setcity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
        try {
            evt.preventDefault();
            console.log(city);
            setcity("");
           let newinfo= await getWeather();
           updateInfo(newinfo);
            
        } catch (err) {
            setError(true);
        }
         
    }
    return(
        <div className='searchbox'>
            <h3>Search For The Weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
            <Button variant="contained" type='submit' className='Submit'>Submit</Button>
{error && <p>No such place exists!</p>}
        </form>
        </div>

      
    );
}