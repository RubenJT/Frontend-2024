import { useState } from "react"
import CallApi from "../api/CallApi"


const Button = ({apiData,searchQuery,setFilteredData,setSearchQuery}) => {
  const [filtered] = useState([])
  const[filterByid]=useState([])
  //const[reset] = useState('')
    const handleSearch = (e) => {
        e.preventDefault()
        const filtered = apiData.filter((mission) =>
          mission.name.toLowerCase().includes(searchQuery.toLowerCase()),
          
        )
        setFilteredData(filtered)
      }


      const handleSearchByTeam = (e) => {
        e.preventDefault()
        const filterByTeam = apiData.filter((mission) =>
          mission.type.includes(searchQuery),
          
        )
      
        setFilteredData(filterByTeam)

      }
      const handleSearchByid = (e) => {
        e.preventDefault()
        const filterByid = apiData.filter((mission) =>
          mission.missionNumber.includes(searchQuery),
          
        )
      
        setFilteredData(filterByid)

      }


//<CallApi filtered={filtered} filterByid={filterByid}></CallApi>


  return (
    <div className="container">

<input
          className='form-control'
            type="text"
          
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            
            placeholder="Enter mission name">
            </input>
           
           
           
       

         <button onClick={handleSearch} className='btn btn-outline-danger' type="submit">Search</button>
            <button onClick={handleSearchByTeam} className='btn btn-outline-danger' type="submit">SearchByTeam</button>
           
            <button onClick={handleSearchByid}  className='btn btn-outline-danger' type="submit">SearchByid</button>
           
          
         

        
      
    </div>
  )
}

export default Button
