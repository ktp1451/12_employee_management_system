const inquirer = require("inquirer");
const connection = require('./db/connection')

connection.query("SELECT * from department", function(err, data){
    console.log(data)
})

const runSearch = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'View All Employees By Department',
          'View All Employees By Manager',
          'Add Employee',
          'Remove Employee',
          'Update Employee Role',
          "Update Employee Manager",
          'exit',
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'Find Employee':
            employeeSearch();
            break;
  
          case 'Find employee by department':
            departmentSearch();
            break;
  
          case 'Find employee by manager':
            managerSearch();
            break;
  
          case 'Exit':
            connection.end();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };