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
}