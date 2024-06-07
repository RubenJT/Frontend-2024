import  { useEffect, useState } from 'react'
import { getapi } from './api'

import HaloCards from '../components/HaloMissions/HaloCards'
import HolderCard from '../components/HaloMissions/HaloHolder'
import Button from '../SearchApi/Button2'
//import './CallApi.css'

const CallApi = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [apiData, setApiData] = useState([])
  const [filtered, setFilteredData] = useState([])
  const [filterByid, setfilterByid] = useState([])
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0)

  

  useEffect(() => {
    const fetchData = async () => {
      
        const data = await getapi()
        setApiData(data)
        setFilteredData(data) 
       
      
    }
    fetchData()
  }, [])

 

  const showNextMission = () => {
    setCurrentMissionIndex((prevIndex) => (prevIndex + 1) % filtered.length)
  }

  const progress = ((currentMissionIndex + 1) / filtered.length) * 100

  return (
    <div>
      <Button 
        apiData={apiData}
        searchQuery={searchQuery}
        setFilteredData={setFilteredData}
        setSearchQuery={setSearchQuery}
        filterByid={filterByid}
        setfilterByid={setfilterByid}
      /> 

      <div>
        {filtered.length > 0 ? (
          <ul className="mission-list">
            <li className="mission-item">
              <HaloCards 
                mission={filtered[currentMissionIndex]} 
                showNextMission={showNextMission}
                progress={progress}
              />
            </li>
          </ul>
        ) : (
          <HolderCard />
        )}
      </div>

    




    </div>
  )
}

export default CallApi
