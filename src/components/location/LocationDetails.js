import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

    const locationEmployees = location.employees?.map(e => (<div key={e.id}>{e.name}</div> ))
    const locationAnimals = location.animals?.map(a => (<div key={a.id}>{a.name}</div> ))

  return (
    <section className="animal">
      <h3 className="animal__name">{location.name}</h3>
      <div className="animal__breed">{location.address}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Employees: {locationEmployees}</div>
      <div className="animal__owner">Animals: {locationAnimals}</div>
      <button onClick={() => {
        history.push(`/locations/edit/${location.id}`)}}>Edit</button>
    </section>
  )
}
