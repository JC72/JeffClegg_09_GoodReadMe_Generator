# JeffClegg_09_GoodReadMe_Generator

This project was designed as a homework assignment for MSU's coding bootcamp. 

This project has been deployed to my Personal GitHub Page. To get this project up and running, you can follow the deployment links that I have included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Demo](#demo)
4. [License](#license)
5. [Execution](Execution)
6. [Contains](#contains)
7. [Credit](#credit)
8. [Creators](#creators)

## Links

* [GitHub Repository](https://github.com/JC72/JeffClegg_08_PortfolioPage)

## Project Overview <a name="projectoverview"></a>
* Uses Node.js, JQuery, Axios and Inquirer to create a program that genereates a ReadME.MD File.


## Demo:

![](https://github.com/JC72/JeffClegg_09_GoodReadMe_Generator/blob/main/Assets/DemoVideo.gif)

Once node index.js is run, the application uses will prompt the user in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses axios to retrieve the users GitHub profile from the GitHub API. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the prompts  The README will also include a badge for your GitHub repo license.

Finally, fs.writeFile command will generate your project's README.md file. Check out the ExampleREADME.md in this repo as an example of the output. 

## License

This project is licensed under the MIT License License

![Badge for GitHub repo license](https://img.shields.io/github/license/JC72/JeffClegg_09_GoodReadMe_Generator?style=flat&logo=appveyor)

## Execution
### To Execute File:
> Download Node.js, then clone the repo to your local machine. Next go to the repo directory in the command prompt and run npm install then run node index.js

### Contains: 
* Two javascript files
    * Index.js 
    * generateMarkdown.js
        
* Package.json
    * Contains:
        * inquirer
        * axios
    
* Example of the generated ReadMe 
        * ExampleREADME.md 

## Credit

* Would like to thank PurpleBooth for giving me a good template for Contributing Example.

* [Contributing](https://gist.github.com/PurpleBooth/b24679402957c63ec426#file-good-contributing-md-template-md)

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp