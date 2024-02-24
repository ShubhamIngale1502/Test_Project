import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Edit_Task() {
    const {register, handleSubmit, setValue} = useForm()
    const nav = useNavigate()
    const {stuId} = useParams()

    function getData(){
        axios.get(`http://localhost:8040/Todo_Task/${stuId}`).then(
            (result)=>{
                setValue('fname',result.data.fname)
                setValue('lname',result.data.lname)
                setValue('marks',result.data.marks)
                setValue('address',result.data.address)
                setValue('address',result.data.address)
                setValue('city',result.data.data)
            }
        )
    }
    useEffect(()=>{
        getData()
    },[])

    function update_Data(){
        axios.put(`http://localhost:8040/Todo_Task/${stuId}`).then(
            (result)=>{
                console.log(result);
                nav('/show')
            }
        )
    }
  return (
    <div>
        <form onSubmit={handleSubmit(update_Data)}className="row g-3 w-50 mx-auto fw-bold">
  <div className="col-md-6">
    <label htmlFor="fname" className="form-label">First_Name</label>
    <input type="text" className="form-control" id="fname"{...register('fname')}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="lname" className="form-label">Last_Name</label>
    <input type="text" className="form-control" id="lname"{...register('lname')}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="marks" className="form-label">Marks</label>
    <input type="number" className="form-control" id="marks"{...register('marks')}/>
  </div>
  <div className="col-12">
    <label htmlFor="address" className="form-label">Home_Address</label>
    <input type="text" className="form-control" id="address" placeholder="1234 Main St"{...register('address')}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">School_Address </label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"{...register('address')}/>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-outline-success col-5">Add_Data </button>
  </div>
</form>
    </div>
  )
}

export default Edit_Task