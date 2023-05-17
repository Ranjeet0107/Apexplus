
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
  
  const menuItem = [
    {
      path: "/",
      name: "Home",

    },
    {
      path: "/addscenario",
      name: " Add Scenario",

    },
    {
      path: "/allscenarios",
      name: " All Scenarios",

    },
    {
      path: "/addvehicle",
      name: "Add Vehicle",
    },
  ]
  return (
    <div className="container">
       <div style={{width:"200px"}} className="sidebar">
           
           {
               menuItem.map((item, index)=>(
                   <NavLink to={item.path} key={index} className="link" activeclassName="active">
                       <div style={{display:"block"}} className="link_text">{item.name}</div>
                   </NavLink>
               ))
           }
       </div>
       <main>{children}</main>
    </div>
);
};

export default Sidebar;


// const scenario = [

//   {
  
//   scenarioId: 1,
  
//   scenarioName: 'Scenario 1',
  
//   time: 29378590827,
  
//   },
  
//   {
  
//   scenarioId: 2,
  
//   scenarioName: 'Scenario 1',
  
//   time: 29378590827,
  
//   }
  
//   ];
  
//   const vehicles = [
  
//   {
  
//   id: '1',
  
//   name: 'Safari',
  
//   positionX: 10,
  
//   positionY: 0,
  
//   speed: 2,
  
//   direction: 'towards',
  
//   scenarioId: 1
  
//   },
  
//   {
  
//   id: '2',
  
//   name: 'Alto',
  
//   positionX: 8,
  
//   positionY: 2,
  
//   speed: 3,
  
//   direction: 'backwards',
  
//   scenarioId: 1
  
//   },
  
//   {
  
//   id: '3',
  
//   name: 'Eon',
  
//   positionX: 8,
  
//   positionY: 2,
  
//   speed: 3,
  
//   direction: 'backwards',
  
//   scenarioId: 2
  
//   }
  
//   ];
  
//   const currentScenario = 2;
  
//   const vehiclesOfCurrentScenario = vehicles.filter((vehicle) => {
  
//   return vehicle.scenarioId === currentScenario;
  
//   });
  
//   console.log(vehiclesOfCurrentScenario);





//   <div class="graph">

// <div class="car car-1"></div>

// <div class="car car-2"></div>

// </div>

// .graph {

// width: 800px;

// height: 500px;

// background: black;

// border: 1px solid green;

// position: relative;

// overflow: hidden;

// }

// .car {

// width: 30px;

// height: 30px;

// border-radius: 50%;

// background: red;

// position: absolute;

// transition: ease-in-out 10s top;

// }

// .car-2 {

// background: green;

// }

// const playgroundW = window.screen.clientWidth;

// const playgroundH = window.screen.clientHeight;

// const car1 = document.getElementsByClassName('car-1');

