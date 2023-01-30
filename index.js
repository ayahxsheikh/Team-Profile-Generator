const Manager = require("./starter/lib/Manager");
const Engineer = require("./starter/lib/Engineer");
const Intern = require("./starter/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const team = require("./starter/src/page-template");

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

// function that prompts user to build next team members
function buildTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "addMember",
            message:"What member do you want on your team?",
            choices: ["Engineer", "Intern"]
        }
    ]).then(data =>{
        if(data.addMember === "Engineer"){
            console.log("You can now build an engineer")
            generateEngineer();

        } else if (data.addMember === "Intern"){
            console.log("You can now build an Intern")
            generateIntern();
        };
    });
};

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
        console.log(engineer);
        buildTeam();
    });
};




function init (){
    console.log('-----Build Your Dream Team-----');
    mainMenu();
}

init();