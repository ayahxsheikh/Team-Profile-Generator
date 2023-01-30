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

function generateManager(){
    return inquirer.prompt([
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
            name: "office-no",
            message: "Lastly, please eneter the manager's office number"
        }

    ]).then (data => {
        console.log(data);
    });
};




function init (){
    console.log('-----Build Your Dream Team-----');
    generateManager();
}

init();