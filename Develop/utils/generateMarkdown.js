// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else if (license) {
      if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      } else if (license == 'General Public License 2.0') {
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      } else if (license == 'General Public License 3.0') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      } else if (license == 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      } else if (license == 'BSD 3-Clause License') {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      } else if (license == 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else if (license) {
    for (i = 0; i < 1; i++) {
      if (license == 'MIT') {
        return `
        https://opensource.org/licenses/MIT
        `
      } else if (license == 'General Public License 2.0') {
        return `
        https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
        `
      } else if (license == 'General Public License 3.0') {
        return `
        https://www.gnu.org/licenses/gpl-3.0
        `
      } else if (license == 'Mozilla Public License 2.0') {
        return `
        https://opensource.org/licenses/MPL-2.0
        `
      } else if (license == 'BSD 3-Clause License') {
        return `
        https://opensource.org/licenses/BSD-3-Clause
        `
      } else if (license == 'Apache License 2.0') {
        return `
        https://opensource.org/licenses/Apache-2.0
        `
      }
    }
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else if (license) {
    for (i = 0; i < 1; i++) {
    return 

}
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `## ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  This project is covered under the ${data.license} license.

  ## Contributing 
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.emailAddress}. You can view more of my projects at https://github.com/${data.githubUsername}.

`;
}


// use for importing Markdown in index 
module.exports = generateMarkdown;
