// const Intern = require("../lib/Intern");
// const inquirer = require("inquirer");
// const buildTeam = require("./buildTeam");
// const team = require("./teamArray");

// // function creates new intern member based on user input
// function generateIntern(){
//     return inquirer.prompt([
//         {
//             name: "name",
//             message: "Enter new Intern's name"
//         },
//         {
//             name: "id",
//             message: "Enter Intern's employee ID"
//         },
//         {
//             name: "email",
//             message: "Enter Intern's email address"
//         },
//         {
//             name: "school",
//             message: "What school does the Intern attend?"
//         }
//     ]).then(data => {
//         let intern = new Intern(data.name, data.id, data.email, data.school);
//         team.push(intern);
//         console.log(team);
//         buildTeam();
//     });
// };

// module.exports = generateIntern; 