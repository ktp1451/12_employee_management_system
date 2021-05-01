const inquirer = require("inquirer");
const connection = require('./db/connection')

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
        if (answer.action === "VIEW") {
            view.viewData();
        }
        else if (answer.action === "ADD") {
            add.addData();
        }
        else if (answer.action === "DELETE") {
            deletD.deleteData();
        }
        else if (answer.action === "UPDATE") {
            up.updateData();
        }
        else {
            console.table("Goodbye!")
            connection.end();
        }
    });
}

connection.connect(function(err){
    if (err) throw err;  
        runSearch()
})

// function addRole() {
//     connection.query(`SELECT * FROM department`, function (err, res) {
//         if (err) throw err;
//         console.table(res);
//         inquirer
//             .prompt([{
//                 name: "addDepart",
//                 type: "list",
//                 choices: function () {
//                     var departArray = [];
//                     for (var i = 0; i < res.length; i++) {
//                         departArray.push(res[i].id);
//                     }
//                     return departArray;
//                 },
//                 message: "What department does this role belong to?",
//             },
//             {
//                 name: "addRole",
//                 type: "input",
//                 message: "What name do you want for this role?",
//             },
//             {
//                 name: "addSalary",
//                 type: "input",
//                 message: "What is the salary?",
//                 validate: function (value) {
//                     if (isNaN(value) === false) {
//                         return true;
//                     }
//                     return false;
//                 }
//             },
//             ]).then(function (answer) {
//                 connection.query(
//                     "INSERT INTO role SET ?",
//                     {
//                         role_title: answer.addRole,
//                         salary: answer.addSalary,
//                         department_id: answer.addDepart
//                     },
//                     function (err, results) {
//                         if (err) throw err;
//                         console.log("New Role has been added!");
//                         addData();
//                     }
//                 );
//             })
//     })
// }
// function addEmployee() {
//     connection.query(
//         `SELECT e.first_name, e.last_name, e.id AS employee_id, r.id AS role_id, r.role_title, d.department_name
//         FROM employee e
//         LEFT JOIN employee em ON e.manager_id = em.id
//         INNER JOIN role r ON e.role_id = r.id
//         INNER JOIN department d ON r.department_id = d.id
//         ORDER BY e.id`,
//         function (err, res) {
//             console.table(res);
//             inquirer
//                 .prompt([{
//                     name: "addEmployeeFirstName",
//                     type: "input",
//                     message: "What the first name of the employee?",
//                 },
//                 {
//                     name: "addEmployeeLastName",
//                     type: "input",
//                     message: "What's the last name of the employee?",
//                 },
//                 {
//                     name: "addEmployeeRole",
//                     type: "list",
//                     message: "What is the employee's role?",
//                     choices: function () {
//                         var roleArray = [];
//                         for (var i = 0; i < res.length; i++) {
//                             roleArray.push(res[i].role_id);
//                         }
//                         let removeDups = new Set(roleArray)
//                         let newRoleArr = [...removeDups]; 
//                         return newRoleArr;
//                     },
//                 },
//                 ]).then(function (answer) {
//                     connection.query(
//                         "INSERT INTO employee SET ?",
//                         {
//                             first_name: answer.addEmployeeFirstName,
//                             last_name: answer.addEmployeeLastName,
//                             role_id: answer.addEmployeeRole,
//                         },
//                         function (err, results) {
//                             if (err) throw err;
//                             console.log("New employee has been added!");
//                             addData();
//                         }
//                     );
//                 })
//         }
//     )
// }
// module.exports = { addData }