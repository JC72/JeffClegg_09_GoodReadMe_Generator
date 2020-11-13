//needed dendencies (make sure they are instaled
//using npm install)

const inquirer = require ('inquirer');
const fs = require('fs');
const axios = require('axios');

// internal javascript modules

const generateMarkdown =  require ('./utils/generateMarkdown');



// questions for user to answer with some default values
const responses = [


    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'userName',
        default: 'JC72',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'JeffClegg_09_GoodReadMe_Generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A GitHub repo is required for a link.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What title did you give this project?",
        name: 'title',
        default: 'Good ReadMe Generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is necessary for the README.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Give a brief description of what your project does.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is mandatory.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is your professional email address?",
        name: 'emailAddress',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A email address is necessary for contact information.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "How do you install the dependencies for your project",
        name: 'installation'
    },

    {
        type: 'input',
        message: "How do you run your program and what is the command.",
        name: 'installation'
    },

    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },

    {
        type: 'input',
        message: "List other developers or sites that helped to create your project.",
        name: 'contributing'            
    },

    {
        type: 'input',
        message: "Name any tests that you have written for your application.",
        name: 'tests'
    },

    {
        type: 'list',
        message: "What is the license that you are using for this project?",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];




// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Congratulations! Your README.md file has been successfully generated")
    });
}


// Get user's information from GitHub API
async function getUserName(userData) {
    try { let response = await axios
        
              .get(`https://api.github.com/users/${userData.userName}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
};


async function init() { 

    const userData = await inquirer.prompt(responses);
        console.log("Here are your responses: ", userData);
        console.log("All responses have been submitted!");
        console.log("Fetching your GitHub data please wait...");
    gitHubApi(userData);
};

        
    
        // Call GitHub api
async function gitHubApi (userData) {
        const userInfo = await getUserName(userData);
        console.log("Your GitHub user info: ", userInfo);
        markDown(userData, userInfo);
};
    
        // generateMarkdown
async function markDown (userData, userInfo) {
        console.log("Generating your README file next...")
        const markdown = generateMarkdown(userData, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        writeToFile('ExampleREADME.md', markdown);
};
    

// function call to initialize program
init();
