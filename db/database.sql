CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT DEFAULT NULL,
  PRIMARY KEY (id)
);

DESCRIBE employees;
SELECT * FROM employees;

INSERT INTO employees VALUES 
  (1, 'Eliab Selva', 30000),
  (2, 'Camila Requenes', 20000),
  (3, 'Dayana Cruz', 15000),
  (4, 'Jose Castro', 10000);