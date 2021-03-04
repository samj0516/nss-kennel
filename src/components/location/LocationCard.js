import React from "react"
import { Link } from 'react-router-dom'
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="animal">
        <h3 className="animal__name">  
            <Link to={`/locations/detail/${location.id}`}>
                { location.name }
            </Link></h3>
        {/* <div className="animal__breed">{location.address}</div> */}
    </section>
)

