DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

use employees;

create table department(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL,
   PRIMARY KEY (id)
);

create table role(
   id INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL NOT NULL,
   department_id INT, 
   PRIMARY KEY (id),
   FOREIGN KEY (department_id) REFERENCES department(id)
);

create table employee(
   id INT NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT, 
   manager_id INT,
   PRIMARY KEY (id),
   FOREIGN KEY (role_id) REFERENCES role(id),
   FOREIGN KEY (manager_id) REFERENCES employee(id)
);