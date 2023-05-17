import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './AddScen.css';
import axios from 'axios';

function AddScenario() {
const [values, setValues]=useState({
  Name: '',
  time: ''
})

const navigate=useNavigate();


const handleSubmit=(event)=>{
  event.preventDefault();
  axios.post('http://localhost:3000/addscenario', values)
      .then(res => {
        console.log(res)
        navigate('/allscenarios')
      })
      .catch(err => console.log(err));
}

  return (
    <div className='contant'>
      <h1>Add Scenario</h1>
      <form className='form' >
        <div className='input'>

          <div className='name'>
            <label>Scenario Name</label>
            <input type='text' name='Name' placeholder='Test Scenario' required onChange={e=>setValues({...values, Name:e.target.value
            })}></input>
          </div>

          <div className='time'>
            <label>Scenario Time(Seconds)</label>
            <input type='number' name='time' placeholder='10' required onChange={e=>setValues({...values, time:e.target.value
            })}></input>
          </div>

        </div>



        <div className='links'>

          <Link to="/allscenarios">
            <button className='btn1'onClick={handleSubmit}>add</button>
          </Link>

          <Link to="/">
            <button className='btn2'>Reset
            </button>
          </Link>
          <button className='btn3'>Go Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddScenario;

