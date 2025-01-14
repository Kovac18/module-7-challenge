// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of this README?',
    name: 'title',
  },
  {
    type: 'input',
    message: "Provide a brief description of your application.",
    name: 'Description',
  },
  {
    type: 'input',
    message: 'Describe how to install your application.',
    name: 'Installation',
  },
  {
    type: 'input',
    message: 'Describe what your application could be used for.',
    name: 'Usage',
  },
  {
    type: 'input',
    message: 'Who contributed on this project?',
    name: 'Contributing',
  },
  {
    type: 'input',
    message: 'Describe how to use your application.',
    name: 'Tests',
  },
  {
    type: 'list',
    message: 'Pick your license',
    name: 'License',
    choices: ['MIT', 'l2', 'l3'],
  },
  {
    type: 'input',
    message: 'Enter your username.',
    name: 'Username',
  },
  {
    type: 'input',
    message: 'Enter your email address.',
    name: 'Email',
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err){
            console.error(err);
        } else {
            console.log('README created!');
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => 
            writeToFile(generateMarkdown(response))
        );
}

// Function call to initialize app
init();
