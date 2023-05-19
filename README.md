

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After creating react app deleted unwanted data and go through fallowing dependency
    "axios": 
    "json-server":
    "react-dom":
    "react-icons"
    "react-router-dom"

In the project directory, you can run:

### `npm start`

for json-Server, you can run:

### `json-server --watch db.json`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



>>>Set up the project:

Created a new directory for your project.
Initialized a new React.js project using Create React App or your preferred method.
Installed the necessary dependencies, including React Router for routing and Axios for making API requests.


>>>Design the layout:

Created the sidebar component for displaying the scenarios.
Design the home page with a graph container and a button to start the simulation.
Created a form for adding new scenarios and vehicles.


>>>Implement CRUD functionality:

Set up the JSON Server by installing it globally or as a dev dependency.
Created a JSON file to serve as the mock database.
Used Axios to make HTTP requests to the JSON Server endpoints for creating, reading, updating, and deleting scenarios and vehicles.



>>>Create components:

Created components for displaying scenarios, vehicles, and the graph container.
Implement functionality to fetch and display the scenarios and vehicles from the API.
Added forms and input validation logic for creating and updating scenarios and vehicles.


>>>Implement vehicle movement:

Added a button to start the simulation on the home page.
Implemented logic to move the vehicles based on their speed and direction when the simulation starts.
Hide the vehicles that go outside the graph container.

>>>Style the application:

Used CSS to style the components and layout.
Applyed appropriate styles to the sidebar, home page, graph container, forms, and other elements.


>>>>>>>>>.......About the project......>>>>>>>>>>>

>>>>Home Page
The home page is where you can view and select scenarios and start the simulation. On the left side of the page, you'll see the sidebar containing a list of all the scenarios. You can click on a scenario to view its details, edit its information, or delete it.

On the right side of the page, you'll see a graph container where the vehicles will move during the simulation. You can specify the size of the container in the src/config.js file.

To start the simulation, click the "Start Simulation" button. The vehicles will start moving based on their speed and direction.


>>>>>>Adding a Scenario
To add a new scenario, click the "Add Scenario" button on the sidebar. Fill in the form with the scenario's name and time and click "Add" to create the scenario.

>>>>>>>Adding a Vehicle
To add a new vehicle, navigate to a scenario's details page and click the "Add Vehicle" button. Fill in the form with the vehicle's information, including its initial position, speed, and direction. Click "Add" to create the vehicle.

>>>>>>>>Editing a Scenario
To edit a scenario's information, navigate to its details page and click the "Edit" button. Update the form with the new information and click "Save" to save the changes.

>>>>>>>>>Editing a Vehicle
To edit a vehicle's information, navigate to its details page and click the "Edit" button. Update the form with the new information and click "Save" to save the changes.

>>>>>>>>>Deleting a Scenario
To delete a scenario, navigate to its details page and click the "Delete" button. Confirm the deletion to remove the scenario from the list.

>>>>>>>Deleting a Vehicle
To delete a vehicle, navigate to its details page and click the "Delete" button. Confirm the deletion to remove the vehicle from the list.

>>>>>>Conclusion
This project demonstrates the use of React.js and JSON Server to build a simple vehicle simulation application. Users can create and manage scenarios and vehicles and start a simulation to see the vehicles move within a graph container. Feel free to explore and modify the code to suit your needs.





The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


