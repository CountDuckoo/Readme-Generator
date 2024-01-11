// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache License 2.0': return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0': return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'GNU General Public License v2.0': return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU General Public License v3.0': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU Affero General Public License v3.0': return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU Lesser General Public License v3.0': return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'MIT License': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'ISC License': return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'Mozilla Public License 2.0': return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense': return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'Creative Commons Zero v1.0 Universal': return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Creative Commons Attribution 4.0': return '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
    case 'Creative Commons Attribution ShareAlike 4.0': return '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)';
    case 'SIL Open Font License 1.1': return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
    default:
      return '';
  }
}

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

This project is covered under${license==='The Unlicense' ? '' : ' the'} ${license}.

[Link to License Page](/LICENSE)

`;
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

function renderQuestions(username, email){
  if ((username===null || username.trim()==='') && (email===null || email.trim()==='')){
    return '';
  } else {
    return `## Questions

If you have any questions, you can reach me at one of these place(s):  

${addUsername(username)}${addEmail(email)}
`;
  }
}

function addUsername(username){
  if(username===null || username.trim()===''){
    return '';
  } else {
    return `GitHub: [${username}](github.com/${username})

`;
  }
}

function addEmail(email){
  if(email===null || email.trim()===''){
    return '';
  } else {
    return `Email: [${email}](mailto:${email})
`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.split(' ').join('-')} ${renderLicenseBadge(data.license)}

${renderDescription(data.description)}${renderTableOfContents(data)}${renderInstallation(data.installationInstructions)}${renderUsage(data.usageInformation)}${renderLicenseSection(data.license)}${renderContributing(data.contributionGuidelines)}${renderTests(data.testInstructions)}${renderQuestions(data.username, data.email)}

`;
}

module.exports = {generateMarkdown};