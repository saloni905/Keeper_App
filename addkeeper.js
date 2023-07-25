import React, { useState } from "react"
import "./addkeeper.css"
import axios from "axios"

const Addkeeper = ({setkeeperList}) =>{

const [keeperObj, setkeeperObj] = useState({
    title: "",
    description: ""
})

const handleChange = e =>{
    const { name, value} = e.target
    setkeeperObj({
        ...keeperObj,
        [name]: value
    })
}

const add = () =>{
    if(keeperObj.title) {
       axios.post("http://localhost:3001/api/addNew",keeperObj)
       .then(res => setkeeperList(res.data)) 
       setkeeperObj({
           title:"",
           description:""
       })
    }
}

    return(
        <div className="addkeeper">
            <input
             className="inputBox titleInput"
             type="text"
             name="title"
             autoComplete="off"
             placeholder="Add Title"
             onChange={handleChange}
             value={keeperObj.title}
             />
             <textarea
             className="inputBox description"
             name="description"
             placeholder="Add Description Here"
             onChange={handleChange}
             value={keeperObj.description}
             />
            <div className="addButton" onClick={add}>Add</div>
        </div>
    )
}

export default Addkeeper