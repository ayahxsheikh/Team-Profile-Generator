const Manager = require("../lib/Manager");
const buildTeam = require("");

// function to generate manager
function generateManager(){
    return inquirer.prompt([
       {
           name: "name",
           message: "Please enter the Manager's name"
       },
       {
           name: "id",
           message: "Enter the Manager's employee Id"
       },
       {
           name: "email",
           message: "Enter the Manager's email address"
       },
       {
           name: "number",
           message: "Lastly, please eneter the Manager's office number"
       }

   ]).then (data => {
   // creates new manager object based assigs properties of Manager object based on user input
       let manager = new Manager(data.name, data.id, data.email, data.number);
       team.push(manager);
       console.log(manager);
       buildTeam();
       
   });
};

module.exports = generateManager; 