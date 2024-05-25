// import { useState } from "react"
// import { useEffect } from "react"
// import {getWeather} from "./api/WeatherApi"
import CityCard from "./components/CityCards"
import "./assets/css/index.css"
import SearchCity from "./components/SearchCity"
import { useState } from "react"


const App = () => {

const [cities, setcities] = useState(["Tuxtepec"])

  // const [weather,setWeather] =  useState (null)

  // useEffect(()=>{

  //   const getCityWeather = async  () => {

  //     setWeather(await getWeather())
  //   } 
    
  //   getCityWeather()

  // },[])
  




  return(
    
    <>
<div className="container">
<h1>Weather App</h1>

  <hr />
  {/* {
    //!weather ? <h2>Loading...</h2>:
    <CityCard ></CityCard>
  } */}
  <SearchCity cities={cities} setcities={setcities}></SearchCity>
  <hr />

<div className="row">
{
cities.map((city,index)=>(
<CityCard key={index} city={city}> </CityCard>
))


 }


</div>









 </div>
</>
  )
}

export default App
