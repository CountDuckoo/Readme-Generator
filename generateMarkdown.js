// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

function renderDescription(description){
  if (description===null || description.trim()===''){
    return '';
  } else {
    return `## Description

${description}

`;
  }
}

function renderTableOfContents(data){
  let tableOfContents='## Table of Contents\n';
  let count=0;
  // installation, usage, license, contributing, tests, questions
  // if no installationInstructions, skip it
  if(!(data.installationInstructions===null || data.installationInstructions.trim()==='')){
    tableOfContents+='- [Installation](#installation)\n';
    count++;
  }
   // if no usageInformation, skip it
  if(!(data.usageInformation===null || data.usageInformation.trim()==='')){
    tableOfContents+='- [Usage](#usage)\n';
    count++;
  }
  // if no license, skip it
  if(!(data.license.trim()==='None')){
    tableOfContents+='- [License](#license)\n';
    count++;
  }
  // if no contributionGuidelines, skip it
  if(!(data.contributionGuidelines===null || data.contributionGuidelines.trim()==='')){
    tableOfContents+='- [Contributing](#Contributing)\n';
    count++;
  }
  // if no testInstructions, skip it
  if(!(data.testInstructions===null || data.testInstructions.trim()==='')){
    tableOfContents+='- [Tests](#Tests)\n';
    count++;
  }  
  // if no username AND no email, skip it
  if(!((data.email===null || data.email.trim()==='') || (data.username===null || data.username.trim()===''))){
    tableOfContents+='- [Questions](#Questions)\n';
    count++;
  }
  // if there are 4 or more sections, include the table of contents
  if(count>=4){
    return tableOfContents+'\n';
  } else{
    return '';
  }
}

function renderInstallation(installationInstructions){
  if (installationInstructions===null || installationInstructions.trim()===''){
    return '';
  } else {
    return `## Installation

${installationInstructions}

`;
  }
}

function renderUsage(usageInformation){
  if (usageInformation===null || usageInformation.trim()===''){
    return '';
  } else {
    return `## Usage

${usageInformation}

`;
  }
}

function renderLicenseSection(license){
  if (license.trim()==='None'){
    return '';
  } else {
    return `## License

${renderLicenseLink(license)}

`;
  }
}

function renderLicenseLink(license){
  if (license.trim()==='None'){
    return '';
  } else {
    return `[${license}](/LICENSE)`;
  }
}

function renderContributing(contributionGuidelines){
  if (contributionGuidelines===null || contributionGuidelines.trim()===''){
    return '';
  } else {
    return `## Contributing

${contributionGuidelines}

`;
  }
}

function renderTests(testInstructions){
  if (testInstructions===null || testInstructions.trim()===''){
    return '';
  } else {
    return `## Tests

${testInstructions}

`;
  }
}

function renderQuestions(username, email, title){
  if ((username===null || username.trim()==='') && (email===null || email.trim()==='')){
    return '';
  } else {
    return `## Questions

${addUsername(username)}${addEmail(email, title)}
`;
  }
}

function addUsername(username){
  if(username===null || username.trim()===''){
    return '';
  } else {
    return `GitHub Username: [${username}](github.com/${username})
`;
  }
}

function addEmail(email, title){
  if(email===null || email.trim()===''){
    return '';
  } else {
    return `Email: [${email}](mailto:${email}?subject=${title})
`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.split(' ').join('-')}

${renderDescription(data.description)}${renderTableOfContents(data)}${renderInstallation(data.installationInstructions)}${renderUsage(data.usageInformation)}${renderLicenseSection(data.license)}${renderContributing(data.contributionGuidelines)}${renderTests(data.testInstructions)}${renderQuestions(data.username, data.email, data.title)}

`;
}

module.exports = {generateMarkdown};