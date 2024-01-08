import React from 'react'
import { useState, useEffect } from 'react'
import { addEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const Employee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const [errors, setErrors] = useState({ firstName: '', lastName: '', emailId: '' })

    const navigator = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if (validateForm()) {
            let employee = { firstName, lastName, emailId }
            if (id)
                updateEmployee(id, employee).then(response => {
                    console.log(response.data)
                    navigator('/')
                }).catch(error => console.error(error))
            else
                addEmployee(employee).then(response => {
                    console.log(response.data)
                    navigator('/')
                })
        }
    }

    const validateForm = () => {
        let valid = true
        let errorsCopy = { ...errors }
        if (!firstName.trim()) {
            errorsCopy.firstName = 'First name is required'
            valid = false
        }
        if (!lastName.trim()) {
            errorsCopy.lastName = 'Last name is required'
            valid = false
        }
        if (!emailId.trim()) {
            errorsCopy.emailId = 'Email is required'
            valid = false
        }
        setErrors(errorsCopy)
        return valid
    }

    const { id } = useParams()

    const pageTitle = () => id ? <h2 className='text-center mt-3'>Update employee</h2> : <h2 className='text-center mt-3'>Add employee</h2>

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmailId(response.data.emailId)
            }).catch(error => console.error(error))
        }
    }, [id])


    return (
        <div className='container mt-3'>
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form -group mb-2'>
                                <label className='form-label'>First name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form -group mb-2'>
                                <label className='form-label'>Last name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={e => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>

                            <div className='form -group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type="text"
                                    placeholder="Enter email"
                                    name='emailId'
                                    value={emailId}
                                    className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                    onChange={e => setEmailId(e.target.value)}
                                />
                                {errors.emailId && <div className='invalid-feedback'>{errors.emailId}</div>}
                            </div>
                            <button className='btn btn-success' onClick={submitHandler}>Sumbit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee