const Emoji = ()=>{
    return(
        <div>
            <span role= "img" aria-label="emoji"> 😀 </span>
        </div>
    )
}

const Table = ()=>{
    return(
      <table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
        </tr>
        <tr>
            <th><Emoji/>Johann</th>
            <th>García</th>
        </tr>
        <tr>
            <th><Emoji/>Jessica</th>
            <th>Rodríguez</th>
        </tr>
      </table>  
    );
}

export default Table;