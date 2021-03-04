import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { useHistory, useParams } from 'react-router-dom';
import "./Location.css"



export const LocationForm = () => {
  const { addLocation, getLocations, getLocationById, updateLocations } = useContext(LocationContext)

  const [location, setLocation] = useState(
    {
    name: "",
    address: "",
    });
  const [isLoading, setIsLoading] = useState(true)
  const { locationId } = useParams()
  const history = useHistory();

   

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
  const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
    const newLocation = { ...location }
      newLocation[event.target.id] = event.target.value
      // update state
      setLocation(newLocation)
    }

  const handleSaveLocation = () => {
        //disable the button - no extra clicks
    // setIsLoading(true);
        // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an animal
      if (locationId){
          //PUT - update
        updateLocations({
              id: parseInt(location.id),
              name: location.name,
              address: location.address
          })
          .then(() => history.push(`/locations/detail/${location.id}`))
        }else {
          //POST - add
          addLocation({
              name: location.name,
              address: location.address
          })
          .then(() => history.push("/locations"))
        }
      }
    

    useEffect(() => {
      getLocations().then(() => {
        if (locationId){
          getLocationById(locationId)
          .then(location => {
            setLocation(location)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="locationForm">
          <h2 className="locationForm__title">{locationId ? "Edit Location" : "Add Location"}</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Location name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="address">Location address:</label>
                  <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address}/>
              </div>
          </fieldset>
          
          
          
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() 
              handleSaveLocation()
              }}>
            {locationId ? "Save" : "Add Location"}
          </button>
      </form>
    )
}