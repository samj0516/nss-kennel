import React from "react"
import { Link } from "react-router-dom"
import "./Employee.css"

export const EmployeeCard = ({ employee, location }) => (
    <section className="animal">
        <h3 className="animal__name"> 
            <Link to={`/employees/detail/${employee.id}`}>
                { employee.name }
            </Link>
        </h3>
        {/* <div className="animal__breed">{location.name}</div> */}
    </section>
)

