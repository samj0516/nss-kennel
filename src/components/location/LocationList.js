import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("CustomerList: useEffect - getCustomers")
    getLocations()

  }, [])

  const history = useHistory()
  return (
    <>
      <button onClick={() => {history.push("/locations/create")}}>
        Open New Location
    </button>
    <div className="locations">
      
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
    </>
  )
}