const alumno = {
  nombre : 'Ruben Jimenez Trujillo',
  edad : 21,
  numerodecontrol : 21350010,
  pasatiempo : ['leer','escribir','programar', 'videojuegos']
}
function App() {
 

  return (
   <div>
    <h1> informacion personal </h1> 
    <hr />
    <br />
    <li>Nombre completo: {alumno.nombre}</li>
    <li>Edad: {alumno.edad} </li>
    <li>Carrera: Ingenieria En Sistemas Computacionales</li>
    <li>Numero de Control: {alumno.numerodecontrol} </li>
    <li>Pasatiempo: </li>
    <ul>
      <li>{alumno.pasatiempo[0]}</li>
      <li>{alumno.pasatiempo[1]}</li>
      <li>{alumno.pasatiempo[2]}</li>
      <li>{alumno.pasatiempo[3]}</li>

    {alumno.pasatiempo.map}((pasatiempo) => {
      return <li key = {pastiempo}>{pasatiempo}</li>
    })}


    </ul>
    <div > escritor independiente galardonado que se especializa en temas educativos. Con más de diez años de experiencia, ha publicado en numerosas publicaciones universitarias especializadas en lingüística como Latin Magazine. También se ha presentado como experto en autoediciones en programas de la televisión y la radio hispana y norteamericana. Franklin disfruta brindar consejos prácticos sobre redacción, gramática y sintaxis inglesa a personas de todos los niveles de conocimiento del idioma inglés. Actualmente, vive en Jacksonville, Florida.</div>

   </div>
  )
}

export default App
