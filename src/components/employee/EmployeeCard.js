import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="animal">
        <h3 className="animal__name">{employee.name}</h3>
        <div className="animal__breed">{employee.location.name}</div>
    </section>
)

