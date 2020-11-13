// function to generate markdown for README
function generateMarkdown(userData,userInfo) {
  
  // Title Portion
 
  `# ${userData.title}
  
  This project has been deployed to my Personal GitHub Page. To get this project up and running, you can follow the deployment links that I have included in the Link Section below.`;
  
   
  // Table of Contents section
  `# Table of Contents
  * [Description](#Project Overview)
  * [Links](#Links)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Quetsions](#questions)`;

  
  // Description Section
  `
  
  ## Project Overview 
  
  ${userData.description}

  `

  //Links Section

  `## Links
  
  *[Github Repository](https://github.com/JC72/JeffClegg_09_GoodReadMe_Generator)
  `

  // Installation section
   `
  

  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userData.installation}
  `  

  // Usage section
   
  `
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userData.usage}
  
  `
  
  // Contributing section

  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userData.contributing}
  
  `
  

  // Tests section
  
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userData.tests}`


  // License section is required

  `
  
  ## License
  
  This project is licensed under the ${userData.license} License

  ![Badge for GitHub repo license](https://img.shields.io/github/license/${userData.username}/${userData.repo}?style=flat&logo=appveyor)
   
  
`
  // Questions / About Developer section

  `
  ---
  
  ## Questions
  
    
  Please contact me by on of the following links below:

 
  GitHub: [@${userInfo.login}](${userInfo.html_url})
  Email: ${userData.emailAddress}
  `;
  
}


module.exports = generateMarkdown;
