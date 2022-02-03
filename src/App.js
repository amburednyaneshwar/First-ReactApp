import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Name=()=>{
  return(
    <div>
  <div className='Name'>
  <h1>Weather Forecast</h1>
  </div>
  </div>
  )
}
const Weather=()=>{

  const [city,setcity]=useState("Pune")
  const [country,setcountry]=useState("IN")
  const [search,setsearch]=useState("")
  const [weather,setWeather]=useState("")
  const [wind,setWind]=useState("")
  const [humidity,setHumidity]=useState("")
  useEffect(()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd0b94693a6c3f25fc24f22599d5fccb`)
      .then(response=>{
          setWeather(response.data.main.temp)
          setWind(response.data.wind.speed)
          setHumidity(response.data.main.humidity)
          console.log(response.data)
      setcountry(response.data.sys.country)}
      )
      .catch((err)=>{console.log(err)})
      },[city])
  const handlesubmit=(event)=>{  
      event.preventDefault()
      setcity(search)
      setsearch("")
  }
  const handlesearch=(event)=>{
      setsearch(event.target.value)
  }
 return(
    <div>
  <div className='weather'>
    <br></br>
    <form onSubmit={handlesubmit}>
<input type="text"  value={search} placeholder='Enter City....' onChange={handlesearch}></input>
 <input type="submit" value="Submit"></input>
 </form>
<div className='data'>
<p>Temperature: {Math.round(weather-273.15)} ℃/ {Math.trunc(weather-273.15)*1.8 + 32} ℉</p>
<p>City: {city}({country})</p>
<p>Humidity: {humidity} %</p>
<p>Wind: {wind} mph</p>
</div>
  </div>
  </div>
  )
}



const App=()=>{ 
  return (
    <div> 
      <Name></Name>
      <Weather></Weather>
      </div>

  )
}
export default App;