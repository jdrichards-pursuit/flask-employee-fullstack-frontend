import React, { useEffect, useState } from 'react'

export default function EmployeeList() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/employees`
      )
      const data = await response.json()
      setEmployees(data)
    }

    fetchEmployees()
  }, [])

  return (
    <>
      <h1>Employee List</h1>
      <div className="table-container">
        <div className="grid-table">
          <div className="grid-header">First Name</div>
          <div className="grid-header">Last Name</div>
          <div className="grid-header">Job Title</div>
          <div className="grid-header">Email</div>
          {employees.map((employee) => (
            <React.Fragment key={employee.id}>
              <div className="grid-item">{employee.first_name}</div>
              <div className="grid-item">{employee.last_name}</div>
              <div className="grid-item">{employee.job_title}</div>
              <div className="grid-item">{employee.email}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="form-container">
        <form className="form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  )
}
