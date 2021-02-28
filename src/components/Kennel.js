import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import { EmployeeCard } from './employee/EmployeeCard'
import { LocationCard } from './location/LocationCard'
import { CustomerCard } from './customer/CustomerCard'
// import { PropsAndState } from './PropsAndState'
import { NavBar } from './nav/NavBar'
import { ApplicationViews } from './ApplicationViews'

export const Kennel = () => (
    <>
         <NavBar />
        <ApplicationViews />
     
     
    </>
)



// { <h2>Nashville Kennels</h2>
// <small>Loving care when you're not there.</small>

// <address>
//     <div>Visit Us at the Nashville North Location</div>
//     <div>500 Puppy Way</div>
// </address>
// <PropsAndState yourName={"Samantha"} />
// <h2>Animals</h2>
// <article className="animals">
//     <AnimalCard />
//     <AnimalCard />
//     <AnimalCard />
// </article>
// <h2>Employees</h2>
// <article className="animals">
//     <EmployeeCard />
//     <EmployeeCard />
//     <EmployeeCard />
// </article>
// <h2>Locations</h2>
// <article className="animals">
//     <LocationCard />
//     <LocationCard />
// </article>
// <h2>Customers</h2>
// <article className="animals">
//     <CustomerCard />
//     <CustomerCard />
//     <CustomerCard />
//     <CustomerCard />
// </article> }