import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from './animal/AnimalList'
import { AnimalForm } from './animal/AnimalForm'
import { AnimalDetail } from './animal/AnimalDetail'
import { AnimalSearch } from './animal/AnimalSearch'
import { CustomerProvider } from './customer/CustomerProvider'
import { CustomerList } from './customer/CustomerList'
import { EmployeeProvider } from './employee/EmployeeProvider'
import { EmployeeList } from './employee/EmployeeList'
import { EmployeeForm } from './employee/EmployeeForm'
import { EmployeeDetail } from './employee/EmployeeDetail'
import { LocationProvider } from './location/LocationProvider'
import { LocationList } from './location/LocationList'
import { LocationForm } from './location/LocationForm'
import { LocationDetail } from './location/LocationDetails'

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <h2>Animals</h2>
                            <AnimalSearch />
                            <AnimalList />
                        </Route>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route exact path="/animals/detail/:animalId(\d+)">
		                    <AnimalDetail />
	                    </Route>
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                      
                     
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <AnimalProvider>
          
            </AnimalProvider>
            
            
            <CustomerProvider>
                <Route path="/customers">
                    <h2>Customers</h2>
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <LocationProvider>
                <EmployeeProvider>
                    <Route exact path="/employees">
                        <h2>Employees</h2>
                        <EmployeeList />
                    </Route>
                    <Route exact path="/employees/create">
                            <EmployeeForm />
                        </Route>
                    <Route exact path="/employees/detail/:employeeId(\d+)">
		                <EmployeeDetail />
	                </Route> 
                    <Route path="/employees/edit/:employeeId(\d+)">
                        <EmployeeForm />
                    </Route>
                    <Route exact path="/locations/detail/:locationId(\d+)">
		                <LocationDetail />
	                </Route> 
                      
                </EmployeeProvider>
            </LocationProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <h2>Locations</h2>
                    <LocationList />
                </Route>
                <Route exact path="/locations/create">
                    <h2>Add a Location</h2>
                    <LocationForm />
                </Route>
                <Route exact path="/locations/edit/:locationId(\d+)">
                        <LocationForm />
                    </Route> 
            </LocationProvider>
        </>
    )
}





