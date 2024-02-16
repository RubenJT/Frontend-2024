import ListItem from './ListItem.jsx'

const personas = [{
  name:'alain',
  numero:'287 110 3211',
  ciudad:"San juan bautista Tuxtepec Oaxaca"
},
{
  name: "Ruben",
  numero:"287 110 3212",
  ciudad:"San juan bautista Tuxtepec Oaxaca"
},


{
  name: "Eric",
  numero: "287 110 3213",
  ciudad:"San juan bautista Tuxtepec Oaxaca"
}
]

function App() {
  

  return (
   
  <div> <h1>Agenda</h1> 
  <hr />
  
  <ul>
{personas.map((personas) => (
<ListItem key={personas.name}
name={personas.name}
numero = {personas.numero}
ciudad = {personas.ciudad}/>
))}
  </ul>
  
  </div>
  )
}

export default App
