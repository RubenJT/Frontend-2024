import { useForm } from "../../Hooks/UseForm"


const SearchCity = ({cities,setcities}) => {
const [values,handleInputChange,reset] = useForm({
city:""

})

const handleSearchCity =() =>{
    const newCities = [...cities,values.city]
    setcities(newCities)
    reset()
}

  return (
    <div>
      <div className="input-group">
<span className="input-group-text">City</span>



<input type="text" 
name="city"
id="city"
onChange={handleInputChange}
className="form-control"
value={values.city}
/>


<button className="btn btn-outline-danger"
onClick={handleSearchCity}
type="button">Search</button>

      </div>
    </div>
  )
}

export default SearchCity

//rafce
