// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generator = require('./generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
// description, table of contents, installation, usage, license, contributing, tests, questions
// title
// description
// installation instructions
// usage information
// contribution guidelines
// test instructions
// license (chosen from list)
// GitHub username
// email address
const questions = [['For all of the following questions, leave it blank if you do not wish to include that section. \nWhat is the title of your project?', 'title'],
    ['Write a short description of your project.', 'description'],
    ['What is required to install your project?', 'installationInstructions'],
    ['Please provide information on using your project.', 'usageInformation'],
    ['What guidelines should someone follow if they want to contribute to your project?', 'contributionGuidelines'],
    ['If your project has any tests, what must be done to run them?', 'testInstructions'],
    ['What is your GitHub username?', 'username'],
    ['What is your email address?', 'email']
];

const licenseChoices = ['Apache License 2.0', 'Boost Software License 1.0', 'GNU General Public License v2.0',
'GNU General Public License v3.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'MIT', 'ISC',
'Mozilla Public License 2.0', 'The Unlicense', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0',
'Creative Commons Attribution ShareAlike 4.0', 'SIL Open Font License 1.1', 'None'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generator.generateMarkdown(data);
    console.log(markdown);
    //fs.writeFile(fileName, markdown, (err) => err ? console.error(err) : console.log("Successfully created Readme File."));
}

// TODO: Create a function to initialize app
function init() {
    const questionPrompts=[];
    questions.forEach(question => {
        questionPrompts.push({type: 'input', message: question[0], name: question[1]});
    });
    questionPrompts.push({type: 'list', message: 'What license is this project under?', name: 'license', choices: licenseChoices});
    inquirer.prompt(questionPrompts)
    .then((response) => {
        let fileName = `${response.title.toLowerCase().split(' ').join('-')}.md`;
        if(response.title===null||response.title.trim()===''){
            response.title='New Project';
            fileName = 'README.md';
        }
        console.log(fileName);
        writeToFile(fileName, response);
    });
}

// Function call to initialize app
init();