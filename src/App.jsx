
<<<<<<< HEAD

import { useForm } from "./assets/userRorm"

function App() {
  const [inputsForm, setInputsForm, formReset] = useForm({

    username: "",
    password: ""

  })


  const handlesubmit =  (e) => {
    e.preventDefault()
    console.log("Mi nombre de usuario es ",inputsForm.username)
    console.log("Mi contrasena es: ",inputsForm.password)
    
     formReset()
    
  } 

 

  return (
 <div><h1>Inputs</h1><hr />
 


 <form onSubmit={(e) => handlesubmit(e)}>              <div>
 <label htmlFor="username">username</label>  
 <input 
 name="username"
 value={inputsForm.username} onChange={(event)=>{ hanleInputchange(event)
      
    }} id="username" type="text"
    ></input>
  
 
  
  </div>  
  
     <label htmlFor="username">password</label>
     <input  id="username"
     type="password"
     name="password"
     value={inputsForm.password}
     onChange={(event) =>{hanleInputchange(event)}} />
  

 
  
  <div>
    <button  type="submit">submint</button>
  </div>
  
  
     </form>
 
 
 
 
 </div>


=======
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
>>>>>>> 623b3a229ffc2594420a640ec9cff0306ac4c1b9

  )
}

export default App
