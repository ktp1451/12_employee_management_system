// const inquirer = require("inquirer");
// const connection = require('./db/connection')

// connection.query("SELECT * from department", function(err, data){
//     console.log(data)
// })

//   async function loadMainPrompts() {
//     const { choice } = await prompt([
//       {
//         type: "list",
//         name: "choice",
//         message: "What would you like to do?",
//         choices: [
//           {
//             name: "View All Employees",
//             value: "VIEW_EMPLOYEES"
//           },
//           {
//             name: "Add Employee",
//             value: "ADD_EMPLOYEE"
//           },
//           {
//             name: "Remove Employee",
//             value: "REMOVE_EMPLOYEE"
//           },
//           {
//             name: "Update Employee Role",
//             value: "UPDATE_EMPLOYEE_ROLE"
//           },
//           {
//             name: "Quit",
//             value: "QUIT"
//           }
//         ]
//       }
//     ]);
  
//     // Call the appropriate function depending on what the user chose
//     switch (choice) {
//       case "VIEW_EMPLOYEES":
//         return viewEmployees();
//       case "ADD_EMPLOYEE":
//         return addEmployee();
//       case "REMOVE_EMPLOYEE":
//         return removeEmployee();
//       case "UPDATE_EMPLOYEE_ROLE":
//       default:
//         return quit();
//     }
//   }
  
//   async function viewEmployees() {
//     const employees = await db.findAllEmployees();
  
//     console.log("\n");
//     console.table(employees);
  
//     loadMainPrompts();
//   }
  
//   async function viewEmployeesByDepartment() {
//     const departments = await db.findAllDepartments();
  
//     const departmentChoices = departments.map(({ id, name }) => ({
//       name: name,
//       value: id
//     }));
  
//   async function removeEmployee() {
//     const employees = await db.findAllEmployees();
  
//     const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
//       name: `${first_name} ${last_name}`,
//       value: id
//     }));
  
//     const { employeeId } = await prompt([
//       {
//         type: "list",
//         name: "employeeId",
//         message: "Which employee do you want to remove?",
//         choices: employeeChoices
//       }
//     ]);
  
//     await db.removeEmployee(employeeId);
  
//     console.log("Removed employee from the database");
  
//     loadMainPrompts();
//   }
  
//   async function updateEmployeeRole() {
//     const employees = await db.findAllEmployees();
  
//     const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
//       name: `${first_name} ${last_name}`,
//       value: id
//     }));
  
//     const { employeeId } = await prompt([
//       {
//         type: "list",
//         name: "employeeId",
//         message: "Which employee's role do you want to update?",
//         choices: employeeChoices
//       }
//     ]);
  
//     const roles = await db.findAllRoles();
  
//     const roleChoices = roles.map(({ id, title }) => ({
//       name: title,
//       value: id
//     }));
  
//     const { roleId } = await prompt([
//       {
//         type: "list",
//         name: "roleId",
//         message: "Which role do you want to assign the selected employee?",
//         choices: roleChoices
//       }
//     ]);
  
//     await db.updateEmployeeRole(employeeId, roleId);
  
//     console.log("Updated employee's role");
  
//     loadMainPrompts();
//   }
  
//   async function viewRoles() {
//     const roles = await db.findAllRoles();
  
//     console.log("\n");
//     console.table(roles);
  
//     loadMainPrompts();
//   }
  
//   async function addRole() {
//     const departments = await db.findAllDepartments();
  
//     const departmentChoices = departments.map(({ id, name }) => ({
//       name: name,
//       value: id
//     }));
  
//     const role = await prompt([
//       {
//         name: "title",
//         message: "What is the name of the role?"
//       },
//       {
//         name: "salary",
//         message: "What is the salary of the role?"
//       },
//       {
//         type: "list",
//         name: "department_id",
//         message: "Which department does the role belong to?",
//         choices: departmentChoices
//       }
//     ]);
  
//     await db.createRole(role);
  
//     console.log(`Added ${role.title} to the database`);
  
//     loadMainPrompts();
//   }
  
//   async function removeRole() {
//     const roles = await db.findAllRoles();
  
//     const roleChoices = roles.map(({ id, title }) => ({
//       name: title,
//       value: id
//     }));
  
//     const { roleId } = await prompt([
//       {
//         type: "list",
//         name: "roleId",
//         message:
//           "Which role do you want to remove? (Warning: This will also remove employees)",
//         choices: roleChoices
//       }
//     ]);
  
//     await db.removeRole(roleId);
  
//     console.log("Removed role from the database");
  
//     loadMainPrompts();
//   }
  
//   async function viewDepartments() {
//     const departments = await db.findAllDepartments();
  
//     console.log("\n");
//     console.table(departments);
  
//     loadMainPrompts();
//   }
  
//   async function addDepartment() {
//     const department = await prompt([
//       {
//         name: "name",
//         message: "What is the name of the department?"
//       }
//     ]);
  
//     await db.createDepartment(department);
  
//     console.log(`Added ${department.name} to the database`);
  
//     loadMainPrompts();
//   }
  
//   async function removeDepartment() {
//     const departments = await db.findAllDepartments();
  
//     const departmentChoices = departments.map(({ id, name }) => ({
//       name: name,
//       value: id
//     }));
  
//     const { departmentId } = await prompt({
//       type: "list",
//       name: "departmentId",
//       message:
//         "Which department would you like to remove? (Warning: This will also remove associated roles and employees)",
//       choices: departmentChoices
//     });
  
//     await db.removeDepartment(departmentId);
  
//     console.log(`Removed department from the database`);
  
//     loadMainPrompts();
//   }
  
//   async function addEmployee() {
//     const roles = await db.findAllRoles();
//     const employees = await db.findAllEmployees();
  
//     const employee = await prompt([
//       {
//         name: "first_name",
//         message: "What is the employee's first name?"
//       },
//       {
//         name: "last_name",
//         message: "What is the employee's last name?"
//       }
//     ]);
  
//     const roleChoices = roles.map(({ id, title }) => ({
//       name: title,
//       value: id
//     }));
  
//     const { roleId } = await prompt({
//       type: "list",
//       name: "roleId",
//       message: "What is the employee's role?",
//       choices: roleChoices
//     });
  
//     employee.role_id = roleId;
  
//     const managerChoices = employees.map(({ id, first_name, last_name }) => ({
//       name: `${first_name} ${last_name}`,
//       value: id
//     }));
//     managerChoices.unshift({ name: "None", value: null });
  
//     const { managerId } = await prompt({
//       type: "list",
//       name: "managerId",
//       message: "Who is the employee's manager?",
//       choices: managerChoices
//     });
  
//     employee.manager_id = managerId;
  
//     await db.createEmployee(employee);
  
//     console.log(
//       `Added ${employee.first_name} ${employee.last_name} to the database`
//     );
  
//     loadMainPrompts();
//   }
  
//   function quit() {
//     console.log("Goodbye!");
//     process.exit();
//   }
// }