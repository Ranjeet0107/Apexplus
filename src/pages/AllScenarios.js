import './allScen.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosAddCircle } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';





function AllScenarios() {


  const [data, setData] = useState([])
  const [Editid, setEditId] = useState(-1)
  const [uname, usetName] = useState('');
  const [utime, usetTime] = useState('');

  



  useEffect(() => {
    axios.get('http://localhost:3000/addscenario')
      .then(res => setData(res.data))
      .catch(err => console.log(err));

  }, []);

  const handleEdit = (i) => {
    axios.get('http://localhost:3000/addscenario' + i)
      .then(res => {
        console.log(res.data)
        usetName(res.data.Name)
        usetTime(res.data.time)
      })
      .catch(err => console.log(err));
    setEditId(i)
  }

  const handledelet = (i) => {
    axios.delete('http://localhost:3000/addscenario' + i)
      .then(res => {
        //location.reload();
       
      })
      .catch(err => console.log(err));
  }  


  const handleUpdate = () => {
    axios.put('http://localhost:3000/addscenario'+ Editid,
      { i: Editid, Name: uname, time: utime }
    )
      .then(res => {
        console.log(res);
        //location.reload();
        setEditId(-1);
      }).catch(err => console.log(err));
  }

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

              <th>Scenario Id</th>
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
                i === Editid ?
                  <tr>
                    <td>{i}</td>
                    <td><input type='text' value={d.Name} onChange={e => usetName({
                      Name: e.target.value
                    })} /></td>
                    <td><input type='number' value={d.time} onChange={e => usetTime({
                      time: e.target.value
                    })} />s</td>
                    <td>0</td>
                    <td><IoIosAddCircle /></td>
                    <td><button onClick={handleUpdate} >Update</button></td>
                    <td><MdDelete /></td>
                  </tr>
                  :
                  <tr key={i}>

                    <td>{i}</td>
                    <td>{d.Name}</td>
                    <td>{d.time}s</td>
                    <td>0</td>
                    <td><IoIosAddCircle /></td>
                    <td><MdModeEdit onClick={ handleEdit(i)} /></td>
                    <td><MdDelete  onClick={handledelet}/></td>
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
