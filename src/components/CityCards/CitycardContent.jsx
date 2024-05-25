import PropTypes from "prop-types"

 const CityCardContent = ({weather}) => {
  

const dayStyle = 'lightblue'
const nightStyle = '#2C0DE0'
const style = weather.current.is_day ? dayStyle:nightStyle

    return (
      <>
         
    <div className="card" style={{width:'18rem'}}>
     <img 
     src={`http:${weather.current.condition.icon}`} 
     className="card-img-top mt-3"
      alt="" 
      style={{backgroundColor:style,margin:'auto',width:"250px",height:"250px"}}/> 

<div className="card-body">
    <h5 className="card-title"  >{`${weather.location.name},${weather.location.region}-${weather.location.country}`}</h5>
    <p className="card-text">{weather.current.condition.text}</p>
    {/* <p className="card-text">{`Temperatura:${weather.current.temp_c}C`}</p>
    <p className="card-text">{`Humedad:${weather.current.humidity}%`}</p>
    <p className="card-text">{`Viento:${weather.current.wind_kph}kph`}</p> */}


<i className="bi bi-thermometer-half text-danger">{`${weather.current.temp_c}C`}</i>&nbsp;&nbsp;
    <i className="bi-droplet text-primary">{`${weather.current.humidity}%`}</i>&nbsp;&nbsp;
    <i className="bi-wind text-success">{`${weather.current.wind_kph}kph`}</i>

        
        </div>


    </div>
        
      </>
    )
  }
CityCardContent.propTypes = {
  weather: PropTypes.object.isRequired
}

export default CityCardContent
