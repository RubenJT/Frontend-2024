import "../assets/color.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Vehicules2 = ({ vehicules, handleRemove }) => {
  return (
    <div className="halo-card">
      <img
        src={vehicules.smallIconImageUrl}
        alt=""
        className="halo-card-img"
      />
      <div className="halo-card-body">
        <h5>{vehicules.name}</h5>
        <p>{vehicules.description}</p>
        <Grid spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body1"></Typography>
          </Grid>
          <Grid item xs={8}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemove(vehicules.name)}
              startIcon={<DeleteOutlinedIcon />}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Vehicules2
