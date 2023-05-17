import './allScen.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosAddCircle } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';





function AllScenarios() {


  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/addscenario')
      .then(res => setData(res.data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div className='cotainer'>
      <div className='button'>

        <div className='left'>
          <h1>All Scenarios</h1>
        </div>
        <div className='right'>

          <Link to="/addScenario">
            <button className='btn1'>New Scenario</button>
          </Link>

          <Link to="/addvehicle">
            <button className='btn2'>add Vehicle
            </button>
          </Link>


          <button className='btn3'>Delete All
          </button>
        </div>

      </div>

      <div>
        <table>
          <thead className='thead'>
            <tr className='thead-tr'>
              
              <th>Scenario Name</th>
              <th> Scenario Time</th>
              <th>Number of Vehicles</th>
              <th>Add Vehicle</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className='tdody'>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{d.Name}</td>
                  <td>{d.time}s</td>
                  <td>0</td>
                  <td><IoIosAddCircle /></td>
                  <td><MdDelete /></td>
                  <td><MdModeEdit /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllScenarios
