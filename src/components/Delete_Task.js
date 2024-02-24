import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Delete_Task() {
    const [student, setStudent] = useState({})
    const nav = useNavigate()
    const {stuId} = useParams()

    function getData(){
        axios.get(`http://localhost:8040/Todo_Task/${stuId}`).then(
            (result)=>{
                console.log(result);
                setStudent(result.data)
            }
        )
    }
    useEffect(()=>{
        getData()
    },[])

    function delete_Data(){
        axios.delete(`http://localhost:8040/Todo_Task/${stuId}`).then(
         (result)=>{
            console.log(result);
         }   
        )
    }

    return (
    <div>
        <h3>Do you really want to delete this</h3>
        <h2>Hospital_Id:-{student.id}</h2>
        <NavLink to={'/show'}><button type='submit'onClick={()=>delete_Data()} className = "btn btn-outline-warning" value='Yes'>YES</button></NavLink> 
        <NavLink to={'/show'}><button type='button'className = "btn btn-outline-danger" >No</button></NavLink> 
    </div>
  )
}

export default Delete_Task