// function to generate markdown for README
function generateMarkdown(userData,userInfo) {
  
  let markStart = 
 
  `# ${userData.title}
  
  This project has been deployed to my Personal GitHub Page. To get this project up and running, you can follow the deployment links that I have included in the Link Section below.;
  
   
    # Table of Contents
  * [Description](#Project Overview)
  * [Links](#Links)
  * [Demo](#Demo)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Quetsions](#questions)

  
  
  ## Description
  
  #${userData.description}

  

  //Links Section

  ## Links
  
  *[Github Repository](https://github.com/${userData.userName}/${userData.repo})
  

  // Demo Video

  ## Demo

  [Demo Video](https://github.com/${userData.userName}/${userData.repo}/blob/main/${userData.videoSrc}


  // Installation section
   
  
  ## Installation
  
  Download (and unpack) or clone the repo, then using a CLI run the ${userData.usage} command.
  

  // Usage section
   
  
  ## Usage 
    
  Run the application with the CLI command ${userData.installation} and follow the prompts.
  
  
  
  // Contributing section

  
  
  ## Contributing
  
  *Please read [CONTRIBUTING.md](https://github.com/${userData.userName}/${userData.repo}/blob/main/CONTRIBUTING.md) for details
  
  #${userData.contributing}
`
  
let markTest = 
  `
  ## Tests`;

if (userData.tests === "") { markTest +=
  `
  There are no tests for this project.`;
} else { markTest +=

  `
  ${userData.tests}
    Run this test using the CLI command: npm ${userData.tests}`

};

  // License section is required

  
 let markFinish = 
 ` ## License
  
  This project is licensed under the ${userData.license} License

  ![Badge for GitHub repo license](https://img.shields.io/github/license/${userData.userName}/${userData.repo}?style=flat&logo=appveyor)


  
  ---
  
  ## Questions
  
    
  Please contact me by on of the following links below:

 |--|
  GitHub: [@${userInfo.login}](${userInfo.html_url})
  |--|
  Email: ${userData.emailAddress}
  
`
markStart += markTest
markStart += markFinish

return markStart
}


module.exports = generateMarkdown;
