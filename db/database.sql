CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    lastName VARCHAR(45) DEFAULT NULL,
    country VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employees VALUES
    (1, 'Efren', 'Hernandez', 'Venezuela', 2500),
    (2, 'Andrea', 'Garcia', 'Argentina', 1500),
    (3, 'Antonio', 'Guevara', 'Mexico', 2000),
    (4, 'Cristina', 'Fernandez', 'Colombia', 2500);

SELECT * FROM employee WHERE id = 1;
DELETE FROM employye WHERE id = 5;