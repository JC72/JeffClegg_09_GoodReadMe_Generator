// function to generate markdown for README
function generateMarkdown(userData,userInfo) {
  
  // Generate Table of Contents conditionally based on userData
  let draftToC = `## Table of Contents`;

  if (userData.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (userData.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (userData.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (userData.tests !== '') { draftToC += `
  * [Tests](#tests)` };


  // Generate markdown for the top required portions of the README

  // Title Portion
  let draftMarkdown = 
  `# ${userData.title}`;
  
    // Descriptions Section

  let draftDesc =

  `
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userData.description}

  `
  draftMarkdown += draftDesc;

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)
  * [Quetsions](#questions)`;

  

  // Optional Installation section
  if (userData.installation !== '') {
  
  draftMarkdown +=
  `
  

  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userData.installation}
  
  `
  };
  

  // Optional Usage section
  if (userData.usage !== '') {
  
  draftMarkdown +=
  
  `
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userData.usage}
  
  `
  };
  
  
  // Optional Contributing section
  if (userData.contributing !== '') {

draftMarkdown +=

  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userData.contributing}
  
  `
  };
  

  // Optional Tests section
  if (userData.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userData.tests}`
  };


  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${userData.license}

  ![Badge for GitHub repo license](https://img.shields.io/github/license/${userData.username}/${userData.repo}?style=flat&logo=appveyor)
   
  
`
  // Questions / About Developer section
  let draftDev = 
  `
  ---
  
  ## Questions?
  
    
  For any questions, please contact me with the following information below:

 
  GitHub: [@${userInfo.login}](${userInfo.html_url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  draftDev +=
  `
  Email: ${userInfo.email}
  `};

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}


module.exports = generateMarkdown;
