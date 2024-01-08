package com.snh.ems.service;

import com.snh.ems.exception.ResourceNotFoundException;
import com.snh.ems.model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> getAllEmployees();

    Employee getEmployee(Long id) throws ResourceNotFoundException;

    Employee saveEmployee(Employee employee);

    Employee updateEmployee(Long id, Employee employee) throws ResourceNotFoundException;

    void deleteEmployee(Long id) throws ResourceNotFoundException;
}
