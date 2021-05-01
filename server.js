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
        choices: 
        [
          'View All Employees',
          'Add Employee',
          'Remove Employee',
          'Update Employee Role',
          'exit',
        ],
      })
      
      .then(function (answer) {
        if (answer.first === "VIEW") {
            view.viewData();
        }
        else if (answer.first === "ADD") {
            add.addData();
        }
        else if (answer.first === "DELETE") {
            deletD.deleteData();
        }
        else if (answer.first === "UPDATE") {
            up.updateData();
        }
        else {
            console.table("Goodbye!")
            connection.end();
        }
    });
}