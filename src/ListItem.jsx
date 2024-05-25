const ListItem = ({name,numero,ciudad}) => {
    return (
        <li>
        <div>Nombre: {name}</div>
       <ul><div>Numero: {numero}</div> </ul> 
       <ul><div>Ciudad: {ciudad}</div> </ul> 
        
        </li>

        
    )
}

export default ListItem
