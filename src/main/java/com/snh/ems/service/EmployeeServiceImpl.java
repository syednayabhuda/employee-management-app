package com.snh.ems.service;

import com.snh.ems.dao.EmployeeDao;
import com.snh.ems.exception.ResourceNotFoundException;
import com.snh.ems.model.Employee;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeService.class);


    @Autowired
    EmployeeDao employeeDao;

    public List<Employee> getAllEmployees() {
        return employeeDao.findAllEmployees();
    }

    @Override
    public Employee getEmployee(Long id) throws ResourceNotFoundException {
        return employeeDao.findEmployeeById(id);
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeDao.saveEmployee(employee);
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) throws ResourceNotFoundException {
        Employee employee1 = getEmployee(id);
        if (StringUtils.isNotBlank(employee.getFirstName())) employee1.setFirstName(employee.getFirstName());
        if (StringUtils.isNotBlank(employee.getLastName())) employee1.setLastName(employee.getLastName());
        if (StringUtils.isNotBlank(employee.getEmailId())) employee1.setEmailId(employee.getEmailId());
        return employeeDao.saveEmployee(employee1);
    }

    @Override
    public void deleteEmployee(Long id) throws ResourceNotFoundException {
        Employee employee = employeeDao.findEmployeeById(id);
        if (employee != null) employeeDao.deleteEmployee(id);
    }


}
