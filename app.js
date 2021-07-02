const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ' ',
    database: 'employees_db'
})

function mainMenu(){
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'Welcome to employee database! What would you like to do?',
        choices: [
                'View all employees',
                'View all departments',
                'View all roles',
                'Add an employee',
                'Add a department',
                'Add a role',
                'Update employee role',
                'Delete an employee',
                'EXIT'
                ]       
    })
    .then(function (answer) {
    switch (answer.action) {
        case 'View all employees':
            viewEmployees();
            break;
        case 'View all departments':
            viewDepartments();
            break;
        case 'View all roles':
            viewRoles();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Add a department':
            addDepartment();
            break;
        case 'Add a role':
            addRole();
            break;
        case 'Update employee role':
            updateRole();
            break;
        case 'Delete an employee':
            deleteEmployee();
            break;
        case 'EXIT': 
            exitApp();
            break;
        default:
            break;
    }
})
};

function viewEmployees() {
    var query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + ' employees found!');
        console.table('All Employees:', res); 
        options();
    })
};

function viewDepartments() {
    var query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('All Departments:', res);
        options();
    })
};

function viewRoles() {
    var query = 'SELECT * FROM Role';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('All Roles:', res);
        options();
    })
};

function addEmployee() {
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw (err);
        inquirer.prompt ([
            {
                name: 'first_name',
                type: 'input',
                message: "What is the employee's first name?"
            },
            {
                name: 'last_name',
                type: 'input',
                message: "What is the meployee's last name?"
            },
            {
                name: 'manage_id',
                type: 'input',
                message: "what is the employee's manger ID?"
            },
            {
                name:'role',
                type: 'list',
                choices: function() {
                    var roleArray = [];
                    for (let i = 0; i < res.length; i++) {
                        roleArray.push(res[i].title);
                    }
                    return roleArray;
                },
                message: "What is this employee's role?"
            },
        ]).then(function (answer) {
            let role_id;
            for (let a = 0; a < res.length; a++) {
                if (res[a].title == answer.role) {
                    role_id = res[a].id;
                    console.log(role_id)
                }                  
            } 
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    manager_id: answer.manager_id,
                    role_id: role_id,
                },
                function (err) {
                    if (err) throw err;
                    console.log('Your employee has been added!');
                    options();
                })
        })
    }
)};

// update a role in the DB

function updateRole() {

};

//  delete an employee
function deleteEmployee() {

};

// exit app
function exitApp() {
    connection.end();
};




