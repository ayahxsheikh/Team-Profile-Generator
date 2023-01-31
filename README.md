# Team Profile Generator

## General Information

This command-line application will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 
The application generates webpage that displays a team's basic info so that a user can have quick access to their emails and GitHub profiles.

 ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Links](#links)

## Description

 * When a user starts the application then they are prompted to enter the team manager's:
      * Name
      * Employee ID
      * Email address
      * Office number
  
  * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
  
  * When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
  
 * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
  
 * When a user decides to finish building their team then they exit the application, and the HTML is generated.

---
## Installation 
In order to use the readme-generator please adhere to the following guidelines:

Install Node.js to your computer

Clone the repository

To install the required dependency for the app run the following command in the terminal:

 ``` npm install inquirer@^8.0.0```

The application will be invoked by using the following command:

  ``` node index.js```
  
---

## Usage

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![Image](./Assets/myteam.png)

---

## Technologies

![Javascipt](https://img.shields.io/badge/Javascipt-a8a232)
![NodeJS](https://img.shields.io/badge/-Node.js-green)

---
© ASheikh
