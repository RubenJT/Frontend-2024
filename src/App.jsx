import ListItem from './ListItem.jsx'

const links = [{
  name:'Google',
  link:'https://www.google.com'
},
{
  name: "facebook",
  link:"https://www.facebook.com"
},


{
  name: "youtube",
  link: "https://www.youtube.com"
}
]

function App() {
  

  return (
   
  <div> <h1>Catalogo de links</h1> 
  <hr />
  
  <ul>
{links.map((link) => (
<ListItem key={link.name}
name={link.name}
link = {link.link}/>
))}
  </ul>
  
  </div>
  )
}

export default App
