USE employees_DB;

INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Security');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Sales Person', 80000, 1),
('Lead Engineer', 150000, 2),
('Accountant', 125000, 3),
('Lawyer', 190000, 4),
('Legal Team Lead', 250000, 4);



