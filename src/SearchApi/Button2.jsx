
import CallApi from "../api/CallApi"


const Button = ({apiData,searchQuery,setFilteredData,setSearchQuery}) => {

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
           
            
           
          
         

        
      
    </div>
  )
}

export default Button
