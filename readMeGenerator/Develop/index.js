
// call it with "node index.js"
// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const util = require('util');

const generatePage = () => 'Github: Name, Github: Project';
console.log(generatePage());

// TODO: Create an array of questions for user input //
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your ReadME?',
            name: 'title',
        },
        {
            name: 'license',
            type: 'list',
            message: 'Choose your license:',
            choices: ['', '', ''],
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
    ]);
};
//Title of ReadMe
// -description ofReadme
// *Title of table of contents consist of the following *
// *Installation title
// --description
// *Usage
// --descrption
// * liscense
// -add a badge for liscense, along with copywrite 
// * Contributing
// -would you like to add users?
// *Tests
// -
// *questions
// -What is your github username? (link should be added)
// -What is your email address? (instructions should be added, stating this is how you reach out to me for additional questions)
-





// const questions = [];
// message: 'Please give a good description of it:',
// message: 'Now t'
// message:
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
module.exports =