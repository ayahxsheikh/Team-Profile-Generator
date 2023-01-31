const Engineer = require("../lib/Engineer");
const team = require("./teamArray");
const buildTeam = require("./buildTeam");
const inquirer = require("inquirer");

// function to generate new engineer based on user input
function generateEngineer(){
    return inquirer.prompt([
        {
            name: "name",
            message: "Enter the new Engineer's name"
        },
        {
            name: "id",
            message: "Enter the new Engineer's employee Id"
        },
        {
            name: "email",
            message: "Enter the new Engineer's email address"
        },
        {
            name: "github",
            message: "Lastly, enter the Engineer's GitHub username"
        }
    ]).then(data => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        console.log(team);
        buildTeam();
    });
};

module.exports = generateEngineer;