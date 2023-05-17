
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './addvehicle.css';
import axios from 'axios';

function AddVehicle() {
  const [values, setValues] = useState({
    Name: '',
    speed: '',
    positionX: '',
    positionY: '',
    direction: ''
  })

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/addvehicle', values)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='contant'>
      <h1>Add Vehicle</h1>
      <form className='form' >
        <div className='input'>
          <div>
            <div class="dropdown">
              <div>

                <label for="list">Scenario List</label>
              </div>
              <div>
                <select id="cars" name="cars" placeholder='Select Scenario'>
                  <option value="scenario1">My scenario</option>
                  <option value="scenario2">Test Scenario</option>
                </select>
              </div>
            </div>

            <div className='time'>
              <label>Vehicle Name</label>
              <input type='text' name='name' placeholder='Target abc' required onChange={e => setValues({
                ...values, name: e.target.value
              })}></input>
            </div>
          </div>

          <div>
            <div className='time'>
              <label>Speed</label>
              <input type='number' name='speed' placeholder='2' required onChange={e => setValues({
                ...values, speed: e.target.value
              })}></input>
            </div>

            <div>
              <div className='time'>
                <label>Position X</label>
                <input type='number' name='positionX' placeholder='1000' required onChange={e => setValues({
                  ...values, positionX: e.target.value
                })}></input>
              </div>
            </div>
          </div>
          <div>
            <div className='time'>
              <label>Position Y</label>
              <input type='number' name='positionX' placeholder='20' required onChange={e => setValues({
                ...values, positionY: e.target.value
              })}></input>
            </div>


            <div class="dropdown">
              <div>
                <label for="direction">Direction</label>
              </div>
              <div>
                <select id="cars" name="cars" placeholder='Select Direction' onChange={e => setValues({
                  ...values, direction: e.target.value
                })}>
                  <option value="twoword">Twowords</option>
                  <option value="backward">Backwards</option>
                  <option value="upward" >Upwards</option>
                  <option value="downward">Downwards</option>
                </select>
              </div>
            </div>
          </div>
        </div>






        <div className='links'>

          <Link to="/">
            <button className='btn1' onClick={handleSubmit}>add</button>
          </Link>


          <button className='btn2'>Reset
          </button>


          <Link to="/">
            <button className='btn3'>Go Back
            </button>
          </Link>

        </div>
      </form>
    </div>
  )
}

export default AddVehicle;

