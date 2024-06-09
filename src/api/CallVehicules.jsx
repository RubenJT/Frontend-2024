import { useEffect, useState } from 'react'
import { getapiVehicules } from './apiVehicules'
import Vehicules2 from '../components/vehicules'
import "../assets/color.css"

const CallVehicules = () => {
    const [ApiData2, setApiData2] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedVehicles, setSelectedVehicles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data2 = await getapiVehicules()
            setApiData2(data2)
        }
        fetchData()
    }, [])



    const handleSearch = () => {
        const foundVehicles = ApiData2.filter(vehicle => 
            vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        setSelectedVehicles(prevSelected => [...prevSelected, ...foundVehicles])
        setSearchTerm("")
    }

    const handleRemove = (name) => {
        setSelectedVehicles(prevSelected => 
            prevSelected.filter(vehicle => vehicle.name !== name)
        )
    }
    const handleRemoveall = () => {
        
        setSelectedVehicles([])
    }

    return (
        <div className="vehicules-card">
            <div className="input-container">
         
                <button style={{padding:20 }}  className='btn btn-primary' onClick={handleSearch}> <h1>Vehicules</h1> </button>
                <button style={{padding:20 }}  className='btn btn-primary' onClick={handleRemoveall}> <h1>Delete</h1> </button>
            </div>
            <div className="cards-container">
                {selectedVehicles.map((vehicle) => (
                    <div key={vehicle.name} className="card-item">
                        <Vehicules2 handleRemove={handleRemove} vehicules={vehicle} />
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CallVehicules
