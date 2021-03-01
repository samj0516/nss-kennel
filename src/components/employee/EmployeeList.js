import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { LocationContext } from '../location/LocationProvider'
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)
  
  //useEffect - reach out to the world for something
  useEffect(() => {
    getLocations()
    .then(getEmployees)

  }, [])

  const history = useHistory()
  return (
    <>
      	      <button onClick={() => {history.push("/employees/create")}}>
            Hire Employee
          </button>
          <div className="employees">
      {
        employees.map(employee => {
          const clinic = locations.find(l => l.id === employee.locationId)
          return <EmployeeCard key={employee.id} employee={employee} location={clinic} />
        })
      }
    </div>
    </>
  )
}