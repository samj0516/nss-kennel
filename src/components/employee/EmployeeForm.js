import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from './EmployeeProvider'
import { LocationContext } from "../location/LocationProvider"
import { useHistory, useParams } from 'react-router-dom';
import "./Employee.css"



export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployee] = useState({
      name: "",
      locationId: 0
    });

    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true);

    const { employeeId } = useParams();
    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
      getLocations().then(() => {
        if (employeeId) {
          getEmployeeById(employeeId)
          .then(employee => {
            setEmployee(employee)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newEmployee = { ...employee}
      
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEmployee[event.target.id] = event.target.value
      // update state
      setEmployee(newEmployee)
    }

    const handleSaveEmployee = () => {
      if (parseInt(employee.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an animal
        if (employeeId){
          //PUT - update
          updateEmployee({
              id: employee.id,
              name: employee.name,
              locationId: parseInt(employee.locationId)
          })
          .then(() => history.push(`/employees/detail/${employee.id}`))
        }else {
          //POST - add
          addEmployee({
              name: employee.name,
              locationId: parseInt(employee.locationId)
          })
          .then(() => history.push("/employees"))
        }
      }
    }

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">{employeeId ? "Edit Employee" : "Add Employee"}</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name"  value={employee.name}/>
              </div>
          </fieldset>
          
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault()
              handleSaveEmployee()
            }}>
            {employeeId ? "Save" : "Hire"}
          </button>
      </form>
    )
}