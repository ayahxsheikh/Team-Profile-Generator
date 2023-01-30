const Manager = require("./starter/lib/Manager");
// const Employee = require("./starter/lib/Employee");
const Engineer = require("./starter/lib/Engineer");
const Intern = require("./starter/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./starter/src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];

function mainMenu(){
 inquirer.prompt({
    name: "confirm",
    message: "Do you have a manager on your team?",
    default: "yes/no"
}).then(data => {
    if(data.confirm === 'no'){
        console.log("Let's start building your team!")
        generateManager();
    } else if (data.confirm === 'yes') {
        console.log("Add another team member");
        // buildTeam();
    };
});
};

function generateManager(){
  
     const managerQ = inquirer.prompt([
        {
            name: "name",
            message: "Please enter Manager's name"
        },
        {
            name: "id",
            message: "Enter the manager's employee Id"
        },
        {
            name: "email",
            message: "Enter manager's email address"
        },
        {
            name: "number",
            message: "Lastly, please eneter the manager's office number"
        }

    ]).then (data => {
        team.push(data);
        console.log(team);
    
    });
};




function init (){
    console.log('-----Build Your Dream Team-----');
    mainMenu();
}

init();