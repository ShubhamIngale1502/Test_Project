import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Add_Task() {

    const {register, handleSubmit, reset} = useForm()
    const nav = useNavigate()

    function saveData(data){
        axios.post('http://localhost:8040/Todo_Task',data).then(
            (result)=>{
                console.log(result);
                alert("Data Saved!!")
                nav('/show')
                reset()
            }
        )
        
    }
  return (
    <div>
        <form  onSubmit={handleSubmit(saveData)}className="row g-3 w-50 mx-auto fw-bold">
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
    <input type="text" className="form-control" id="address" placeholder="1234 Main St"{...register('home_address')}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">School_Address </label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"{...register('address')}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"{...register('city')}/>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-outline-success col-5">Add_Data </button>
  </div>
</form>
    </div>
  )
}

export default Add_Task