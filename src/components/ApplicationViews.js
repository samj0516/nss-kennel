import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from './animal/AnimalList'
import { CustomerProvider } from './customer/CustomerProvider'
import { CustomerList } from './customer/CustomerList'
import { EmployeeProvider } from './employee/EmployeeProvider'
import { EmployeeList } from './employee/EmployeeList'

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            
            <AnimalProvider>
                <Route exact path="/animals">
                <h2>Animals</h2>
                    <AnimalList />
                </Route>
            </AnimalProvider>
            
            
            <CustomerProvider>
                <Route path="/customers">
                <h2>Customers</h2>
                    <CustomerList />
                </Route>
            </CustomerProvider>


            <EmployeeProvider>
                <Route path="/employees">
                <h2>Employees</h2>
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
            
        </>
    )
}


// <Route path="/locations">
// <LocationCard />
// </Route>



