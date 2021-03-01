import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from './animal/AnimalList'

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
                    <AnimalList />
                </Route>
            </AnimalProvider>
            
         
            
        </>
    )
}


// <Route path="/locations">
// <LocationCard />
// </Route>

// <Route path="/employees">
// <EmployeeCard />
// </Route>

// <Route path="/customers">
// <CustomerCard />
// </Route>