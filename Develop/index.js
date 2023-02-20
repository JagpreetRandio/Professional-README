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
                   console.log('Please enter installation information!');
                   return false;
               }
            }  
           },
           {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for usage! (Required)',
            validate : usageInput => {
               if (usageInput) {
                   return true;
               } else {
                   console.log('Please enter usage information!');
                   return false;
               }
            }  
           },
           {
            type: "input",
            name: "contribution",
            message: "Please enter contribution details: (Required)",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log("Please enter contribution details!");
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "Please enter Test Instructions: (Required)",
            validate: testInstructionsInput => {
                if (testInstructionsInput) {
                    return true;
                } else {
                    console.log("Please enter test instructions!");
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Please select from the list of licenses: (Required)",
            choices: ['MIT', 'General Public License 2.0', 'General Public License 3.0', 'Mozilla Public License 2.0', 'BSD 3-Clause License', 'Apache License 2.0'],
            validate: licenseSelection => {
                if (licenseSelection) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Enter your email address. (Required)',
            validate : emailAddressInput => {
               if (emailAddressInput) {
                   return true;
               } else {
                   console.log('Please enter your email address!');
                   return false;
               }
            }  
           }
    


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, function(err) {
        if(err)
        {
            return console.log(err);
        }
        console.log("Done!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (data => {
        writeToFile("README.md", generateMarkdown({...data}));  
    })
}

// Function call to initialize app
init();
