import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer }) => (
    <section className="animal">
        <h3 className="animal__name">{customer.name}</h3>
        <div className="animal__breed">{customer.address}</div>
    </section>
)

