// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your repository? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description of your repository!');
            return false;
          }
        }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Please provide a step-by-step description of how to get application running. (Required)',
            validate : installationInput => {
               if (installationInput) {
                   return true;
               } else {
                   console.log('You need to enter installation information!');
                   return false;
               }
            }  
           },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
