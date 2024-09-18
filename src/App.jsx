import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'

const App = () => {
  const [showForm, setShowForm] = useState(false)

  const toggleView = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <button onClick={toggleView}>
        {showForm ? 'Show Employee List' : 'Add New Employee'}
      </button>
      {showForm ? <EmployeeForm /> : <EmployeeList />}
    </div>
  )
}

export default App
