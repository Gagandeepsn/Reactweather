import { useState } from "react"
import Infobox from "./Infobox"
import Search from "./Search"

export default function Weatherapp(){
const[weatherInfo,setWeatherInfo]=useState({
    
    city:"Asansol",
    temp: 35.05,
    tempMax: 35.05,
    tempMin: 35.05,
    humidity:  35.05,
    weather: "haze",
});

let updateInfo=(result)=>{
    setWeatherInfo(result);
}



return(
        <div>
            <h2>Weather app</h2>
            <Search updateInfo={updateInfo}/>
            <Infobox Info={weatherInfo}/>
            
        </div>
    )
}