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

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    }

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

    return (
        <div className="main-container">
            <div className="input-container">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="cards-container">
                {selectedVehicles.map((vehicle) => (
                    <div key={vehicle.name} className="card-item">
                        <Vehicules2 vehicules={vehicle} />
                        <button onClick={() => handleRemove(vehicle.name)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CallVehicules
