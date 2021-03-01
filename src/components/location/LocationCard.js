import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="animal">
        <h3 className="animal__name">{location.name}</h3>
        <div className="animal__breed">{location.address}</div>
    </section>
)

