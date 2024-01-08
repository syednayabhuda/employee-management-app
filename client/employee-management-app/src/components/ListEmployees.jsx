import React, { useEffect, useState } from 'react'
import { deleteEmployee as removeEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const ListEmployees = () => {

  const [employees, setEmployees] = useState([])
  const navigator = useNavigate()

  const getEmployees = () => {
    listEmployees().then((response) => {
      setEmployees(response.data)
    }).catch(error => console.error(error))
  }

  useEffect(() => {
    getEmployees()
  }, [])

  const addEmployee = () => {
    navigator('/add-employee')
  }

  const updateEmployee = (id) => {
    navigator(`/update-employee/${id}`)
  }

  const deleteEmployee = (id) => {
    removeEmployee(id).then(response => {
      console.log(response.data)
      getEmployees()
    }).catch(error => console.error(error))

  }

  return (
    <div className='container'>

      <h2 className='text-center'>Employees</h2>
      <button className='btn btn-primary mb-2' onClick={addEmployee}>Add employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employe Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button className='btn btn-info text-white' onClick={() => updateEmployee(employee.id)}>Update</button>
                  <button className='btn btn-danger' style={{ marginLeft: '10px' }} onClick={() => deleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            )}
        </tbody>
      </table>

    </div>
  )
}

export default ListEmployees