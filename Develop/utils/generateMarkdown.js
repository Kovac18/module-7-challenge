// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license = 'Unlicense') {
    return `https://img.shields.io/badge/license-Unlicense-blue.svg`;
  } else if (license = 'MIT') {
    return `https://img.shields.io/badge/License-MIT-yellow.svg`;
  } else if (license = 'Boost') {
    return `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license = 'Unlicense') {
    return `http://unlicense.org/`;
  } else if (license = 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else if (license = 'Boost') {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license = 'Unlicense') {
    return `This application uses the Unlicense License: ${renderLicenseLink(license.License)}`;
  } else if (license = 'MIT') {
    return `This application uses the MIT License: ${renderLicenseLink(license.License)}`;
  } else if (license = 'Boost') {
    return `This application uses the Boost License: ${renderLicenseLink(license.License)}`;
  } else {
    return ' ';
  }
}
// This application uses the MIT License: ${renderLicenseLink(license.License)}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![No License](${renderLicenseBadge(data.License)})
  ## Table of Contents
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Liscense](#license)\n
  [Questions](#questions)

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## License
  ${renderLicenseSection(data.License)}
 
  ## Questions
  This is my Github: https://github.com/${data.Username} \n
  If you have any other questions, let me know by emailing me at ${data.Email}!
`;
}

export default generateMarkdown;
