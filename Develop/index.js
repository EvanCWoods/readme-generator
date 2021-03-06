// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "README Title: ",
        },
        {
            type: "input",
            name: "description",
            message: "README Description: ",
        },
        {
            type: "input",
            name: "installInstructions",
            message: "README Installation Instructions: ",
            default: "npm i"
        },
        {
            type: "input",
            name: "usageInstructions",
            message: "README Usage Instructions: ",
        },
        {
            type: "input",
            name: "contributionGuide",
            message: "README Contribution Guide: ",
        },
        {
            type: "input",
            name: "tests",
            message: "README Tests: ",
        },
        {
            type: "input",
            name: "githubUsername",
            message: "README Github User Name: ",
        },
        {
            type: "input",
            name: "email",
            message: "README Email: ",
        },
        {
            type: "input",
            name: "website",
            message: "README Website: ",
        },
        {
            type: "list",
            name: "license",
            message: "README License: ",
            choices: [
                "MIT",
                "Apache-2.0",
                "MPL-2.0"
            ]
        } 
    ]).then( (data) => {
        writeToFile("README.md", generateMarkdown(data));
    })  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        console.log(err);
        }
    });
}

// TODO: Create a function to initialize app 
function init() {}

// Function call to initialize app
init();