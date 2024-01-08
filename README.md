Employee Management System Readme
---------------------------------

Introduction
------------

Welcome to the Employee Management System, a web application designed to manage employee information efficiently. This system consists of a back-end REST API service developed using Java, Spring Boot, and JPA, with MySQL as the database. The front end is built using React.js, JavaScript, Bootstrap for styling, React Router DOM for routing, Axios for HTTP requests, and Vite as the build tool.

Prerequisites
-------------

Before getting started, ensure you have the following installed:

    Java JDK
    Maven build tool
    Node.js and npm
    MySQL

Setup Instructions
------------------

1. Database Setup

Start by creating a MySQL database for the application. You can use a tool like MySQL Workbench or run the following SQL command:

CREATE DATABASE employee_management_system; 


2. Back-End Setup

Navigate to the backend directory and configure the database connection in src/main/resources/application.yml. Update the following properties with your MySQL configuration:

    datasource:                                                                      
    spring:                                                                          
        url: jdbc:mysql://localhost:<YOUR_MYSQL_PORT>/employee_management_system?    
        username: <YOUR_USERNAME>                                                    
        password: <YOUR_PASSWORD>

After configuring the database, run the following commands to build and start the back-end service:

   cd employee-management
   mvn clean install     
   mvn spring-boot:run   

The back-end service will be accessible at http://localhost:8080.

3. Front-End Setup

Navigate to the client/employee-management-app directory and install the dependencies:

    npm install

4. Run the Front-End

Run the following command to start the front-end application:

    npm run dev 

The front-end will be accessible at http://localhost:3000. Open your browser and navigate to this URL to use the Employee Management System.
Usage

    Start the MySQL connection.
    Run the back-end application.
    Run the front-end application.
    Open your browser and go to http://localhost:3000.

You can now manage employee information through the intuitive user interface provided by the Employee Management System.

Feel free to explore the source code for both the back end and front end to customize and extend the functionality according to your requirements.