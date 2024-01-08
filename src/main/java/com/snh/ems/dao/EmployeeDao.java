package com.snh.ems.dao;

import com.snh.ems.exception.ResourceNotFoundException;
import com.snh.ems.model.Employee;
import com.snh.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EmployeeDao {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee findEmployeeById(Long id) throws ResourceNotFoundException {
        return employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee not found for id=" + id)
        );
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
