
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kennel.css";

export const Kennel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);

// import React from "react"
// // import { AnimalCard } from "./animal/AnimalCard"
// import "./animal/Animal.css"
// // import { EmployeeCard } from './employee/EmployeeCard'
// // import { LocationCard } from './location/LocationCard'
// // import { CustomerCard } from './customer/CustomerCard'
// // import { PropsAndState } from './PropsAndState'
// import { NavBar } from './nav/NavBar'
// import { ApplicationViews } from './ApplicationViews'

// export const Kennel = () => (
//     <>
//          <NavBar />
//         <ApplicationViews />
     
     
//     </>
// )





