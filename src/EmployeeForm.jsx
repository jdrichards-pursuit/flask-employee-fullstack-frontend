import React, { useState } from 'react'

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    job_title: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const employee = { ...formData }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/employees`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employee),
        }
      )
      if (response.ok) {
        alert('Employee added successfully')
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          job_title: '',
        })
      } else {
        console.error('Failed to add employee')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="form-container">
      <h1>Add Employee</h1> {/* Moved h1 above the form */}
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Job Title:
          <input
            type="text"
            id="job_title"
            value={formData.job_title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button>Add Employee</button>
      </form>
    </div>
  )
}

export default EmployeeForm
