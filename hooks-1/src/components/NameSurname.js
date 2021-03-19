import React,{useState} from 'react'

function NameSurname() {
    const [fullname, changeName] = useState({Name : "Saidul", Surname : "Mondal"})
    
    const changeStateName = (event) => {
        changeName({...fullname, Name: event.target.value})
    }
    const changeStateSurname = (event ) => {
        changeName({...fullname, Surname: event.target.value })
    }

    return (
        <div>
        <h1>Name : {fullname.Name}</h1>
        <h1>Surname : {fullname.Surname}</h1>
        
        <input type="text" value={fullname.Name} onChange={changeStateName}/>
        <input type="text" value={fullname.Surname} onChange={changeStateSurname}/>
       
        </div>
    )
}

export default NameSurname

