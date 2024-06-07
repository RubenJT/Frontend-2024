
import PropTypes from 'prop-types'
import '/Users/fires/Documents/1/proyectofinal/src/assets/HaloCards.css'


const HaloCards = ({ mission, showNextMission, progress }) => {
  return (
    <div className="halo-card">
      <img
        src={mission.imageUrl}
        alt=""
        className="halo-card-img"
      />
      <div className="halo-card-body">
        <h5>Mission {mission.missionNumber}: {mission.name}</h5>
        <p>{mission.description}</p>
        <p><small className="text-muted">Release Date: {mission.releaseDate}</small></p>
        <p><small className="text-muted">Team: {mission.type}</small></p>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
      <p>

      <button style={{padding:10 ,marginTop:20}}  onClick={showNextMission} className="halo-card-button">
        Siguiente Misión
      </button>


      </p>
      

      





    </div>
  )
}

HaloCards.propTypes = {
  mission: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    type: PropTypes.string,
    missionNumber: PropTypes.number.isRequired,
  }).isRequired,
  showNextMission: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
}

export default HaloCards

