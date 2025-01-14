// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return ' ';
  } else if (license = 'MIT'){
    return `https://img.shields.io/badge/License-MIT-yellow.svg`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    return ' ';
  } else if (license = 'MIT'){
    return `https://opensource.org/licenses/MIT`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return ' ';
  } else if (license = 'MIT'){
    return `This application uses the MIT License: ${renderLicenseLink(license.License)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![No License](${renderLicenseBadge(data.License)})
  ## Table of Contents
  [Description](#Description)\n
  [Installation](#Installation)\n
  [Usage](#Usage)\n
  [Contributing](#Contributing)\n
  [Tests](#Tests)\n
  [Liscense](#License)\n
  [Questions](#Questions)

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
  https://github.com/${data.Username} \n
  If you have any other questions, let me know by emailing me at ${data.Email}!
`;
}

export default generateMarkdown;
