import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show_Task() {
    const [student, setStudent] = useState([])

    function fetch_Data(){
        axios.get('http://localhost:8040/Todo_Task').then(
            (result)=>{
                setStudent(result.data)

            }
        )
    }
    useEffect(()=>{
        fetch_Data()
    },[])
  return (
    <div>
        <table className='table table-striped'>
                <thead>
                        <tr>
                            <th>First_Name</th>
                            <th>Last_Name</th>
                            <th>Marks</th>
                            <th>Home_Address</th>
                            <th>School_Address</th>
                            
                            {/* <th>Status</th> */}
                            <th>Actions</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        student.map((mp)=>{
                            return(
                                <tr>
                                    <td>{mp.fname}</td>
                                    <td>{mp.lname}</td>
                                    <td>{mp.marks}</td>
                                    <td>{mp.address}</td>
                                    <td>{mp.address}</td>
                                    
                                    <td>
                                        <NavLink to={`/student/edit/${mp.id}`} className="btn btn-outline-warning">Edit_Task</NavLink>
                                        <NavLink to={`/student/delete/${mp.id}`} className="btn btn-outline-danger float-end">Delete_Task</NavLink>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
        </table>
    </div>
  )
}

export default Show_Task