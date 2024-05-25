import { useState } from "react"
import { useEffect } from "react"
import { getWeather } from "../../api/WeatherApi"
import CityCardContent from "./CitycardContent"
import CityCardPlaceholder from "./CityCardPlaceholder"




function CityCard({city}) {

  const [weather,setWeather] =  useState (null)

  useEffect(()=>{

    const getCityWeather = async  () => {

      setWeather(await getWeather(city))
    } 
    
    getCityWeather()

  },[city])




  return (

 <div className="col-1 card m-2" style={{width:'18rem'}}>
{
weather ?
<CityCardContent weather={weather}></CityCardContent> :<CityCardPlaceholder></CityCardPlaceholder>
}
 </div>

   
  )
}

export default CityCard
