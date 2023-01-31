const generateEngineer = require("./generateEngineer");
const generateIntern = require("./generateIntern");
const inquirer = require("inquirer");
const team = require("./teamArray");
// const generateTeam = require("./generateTeam");

// function that prompts user to build next team members
function buildTeam(){
    return inquirer.prompt([
        {
            type: "list",
            name: "addMember",
            message:"What member do you want on your team?",
            choices: ["Engineer", "Intern", "Team is Complete"]
        }
    ]).then(data =>{
        if(data.addMember === "Engineer"){
            console.log("You can now build an engineer")
            generateEngineer();

        } else if (data.addMember === "Intern"){
            console.log("You can now build an Intern")
            generateIntern();

        } else if (data.addMember === "Team is Complete") {
            console.log("Generating Dream Team!..")
            // generateTeam();
        };
    });
};

module.exports = buildTeam;
