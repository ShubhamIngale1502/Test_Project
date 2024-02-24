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
        <h3>Do you really want to delete This </h3>
        <button NavLink={"/show"} className='btn btn-otline-warning'>No</button>
        <NavLink className='btn btn-otline-success' value = 'YES'onClick={()=>{delete_Data()}}>YES</NavLink>
    </div>
  )
}

export default Delete_Task