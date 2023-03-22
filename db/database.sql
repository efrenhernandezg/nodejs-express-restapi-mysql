CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, 'Efren', 2500),
    (2, 'Andrea', 1500),
    (3, 'Antonio', 2000),
    (4, 'Cristina', 2500);

SELECT * FROM employee WHERE id = 1;
DELETE FROM employye WHERE id = 5;