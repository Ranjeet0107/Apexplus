
import './Home.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';


function Home() {


  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/addvehicle')
      .then(res => setData(res.data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div className='cotainer'>


      <div className='left'>
        <p>Scenario</p>
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
      </div>

      <div>
        <table>
          <thead className='thead'>
            <tr className='thead-tr'>

              <th>Vehicle id</th>
              <th>Vehicles name</th>
              <th>Position X</th>
              <th>Position Y</th>
              <th>Speed</th>
              <th>Direction</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* "id": 2,
    "name": "Alto",
    "positionX": 8,
    "positionY": 2,
    "speed": 3,
    "direction": "backwards",
    "scenarioId": 1
  }, */}
          <tbody className='tdody'>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.positionX}</td>
                  <td>{d.positionY}</td>
                  <td>{d.speed}</td>
                  <td>{d.direction}</td>
                  
                  
                  <td><Link to={`http://localhost:3001/addscenario/updateVehicle/${i}`}><MdModeEdit /></Link></td>
                  <td><MdDelete /></td>

                </tr>
              ))
            }
          </tbody>
        </table>

        <div className='btngrup'>

          <button className='btn1'>Start Simultion</button>

          <button className='btn3'>Stop Simultion</button>
        </div>
      </div>
    </div>

  )
}

export default Home
