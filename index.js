const Engineer = require("./starter/lib/Engineer");
const Intern = require("./starter/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateManager = require("./starter/team/generateManager");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./starter/src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];

// funciton to display main menu/add team members 
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
        buildTeam();
    };
});
};



function generateTeam(){
    
};

function init (){
    console.log('-----Build Your Dream Team-----');
    mainMenu();
}

init();