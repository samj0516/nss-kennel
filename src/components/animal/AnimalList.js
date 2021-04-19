import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from '../location/LocationProvider'
import { CustomerContext } from '../customer/CustomerProvider'
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  const [ filteredAnimals, setFiltered ] = useState([])
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)

  }, [])
  
   // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  const history = useHistory()
  
  return (
    <>
    	<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        filteredAnimals.map(animal => {
          const owner = customers.find(c => c.id === animal.customer_id)
          const clinic = locations.find(l => l.id === animal.location_id)
          return <AnimalCard key={animal.id} 
                            location={clinic}
                            customer={owner}
                              animal={animal} />
        })
      }
    </div>
    </>
  )
}