// TODO: Include packages needed for this application
// Importing packages
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Stores question that the user answers
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPL 3.0',
            'BSD 3-Clause',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions and maybe some examples on how to use?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Including any guidlines to help others build onto your code?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Any tests with this project, and then how to run and check them?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];
// Image URL's for license badges
const licenseBadges = {
    "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "GPL 3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "BSD 3-Clause": "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
    "None": ""
  };

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    // get the URL for license badge
    const licenseBadgeUrl = licenseBadges[data.license];
    // Converts to markdown format
    const markdownData = `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#insallation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${`This project/application is covered under ${data.license} license`}
${licenseBadgeUrl ? `![${data.license}](${licenseBadgeUrl})` : ''}

## Contributing
${data.contributing}

## Test
${data.test}

## Questions
${`https://github.com/${data.username}`}
${`Contact me at ${data.email} to reach me for additional questions.`}
    `;
    // Writes markdown text to file
    fs.writeFile(fileName, markdownData, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`README.md created successfully`)
    })
};

// TODO: Create a function to initialize app
const init = () => {
    // Asks question to get user input
    inquirer.prompt(questions).then((answers) => {
        // Calls writeFile with the filename and user input
        const fileName = 'README.md';
        writeToFile(fileName, answers);
    });
}

// Function call to initialize app
init();