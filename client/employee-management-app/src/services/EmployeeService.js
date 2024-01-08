import axios from 'axios'

const GET_EMPLOYEES_URL = 'http://localhost:8080/api/v1/employees'
const SAVE_EMPLOYEE_URL = 'http://localhost:8080/api/v1/save'

export const listEmployees = () => axios.get(GET_EMPLOYEES_URL)
export const addEmployee = employee => axios.post(SAVE_EMPLOYEE_URL, employee)
export const getEmployee = employeeId => axios.get(`${GET_EMPLOYEES_URL}/${employeeId}`)
export const updateEmployee = (employeeId, employee) => axios.put(`${GET_EMPLOYEES_URL}/${employeeId}`, employee)
export const deleteEmployee = employeeId => axios.delete(`${GET_EMPLOYEES_URL}/${employeeId}`)