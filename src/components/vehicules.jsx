import "../assets/color.css"

const Vehicules2 = ({vehicules}) => {
  return (
    <div >
      <div className="halo-card">
      <img
        src={vehicules.smallIconImageUrl}
        alt=""
        className="halo-card-img"
      />
      <div className="halo-card-body">
        <h5> {vehicules.name}</h5>
        <p>{vehicules.description}</p>
        <p><small className="text-muted">Release Date: {vehicules.releaseDate}</small></p>
        <p><small className="text-muted">Team: {vehicules.type}</small></p>
      </div>
      
        
      </div>
   
      
    </div>
    
  )
}

export default Vehicules2
