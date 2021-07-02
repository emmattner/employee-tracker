USE employees_DB;

INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Sales Person', 80000, 1),
('Lead Engineer', 150000, 2),
('Accountant', 125000, 3),
('Lawyer', 190000, 4),
('Manager', 95000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Homer', 'Simpson', 1, 302),
('Tommy', 'Pickles', 1, 954),
('Travis', 'Scott', 2, 451),
('Rick', 'Sanchez', 3, 113),
('Harry', 'Potter', 4, 639),
('Rosemary', 'Jones', 5, 287);

