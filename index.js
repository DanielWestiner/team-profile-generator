const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team.html");

const generateHTML = require("./output/generateHTML");
let teamProfile = [];


function init() {
    function buildTeam() {
        inquirer.prompt([{
            type: "list",
            message: "Which employee would you like to add?",
            name: "addEmployee",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "No more, all finished."
            ],
        }])
        .then(function (userAnswers) {
            switch(userAnswers.addEmployee) {
                case "Manager": buildManager();
                    break;
                case "Engineer": buildEngineer();
                    break;
                case "Intern": buildIntern();
                    break;
                default: renderHTML() ;
                break;
            }
        })
    }
    function buildManager() {
        inquirer.prompt ([
            {
                type: "input",
                message: "Please enter the employee's name:",
                name: "managerName"
            },

            {
                type: "input",
                message: "What is the employee's ID?",
                name: "id"
            },

            {
                type: "input",
                message: "Please enter the employee's email",
                name: "email"
            },

            {
                type: "input",
                message: "Please enter the manager's office phone number:",
                name: "officeNumber"
            }
        ])
        .then(userResponses => {
            const manager = new Manager(userResponses.managerName, userResponses.id, userResponses.email, userResponses.officeNumber);
            teamProfile.push(manager);
            buildTeam();
        });
    }

    function buildEngineer() {
        inquirer.prompt ([
            {
                type: "input",
                message: "Please enter the employee's name:",
                name: "engineerName"
            },

            {
                type: "input",
                message: "What is the employee's ID?",
                name: "id"
            },

            {
                type: "input",
                message: "Please enter the employee's email",
                name: "email"
            },

            {
                type: "input",
                message: "Please enter the engineer's Github username:",
                name: "github"
            }
        ])
        .then(userResponses => {
            const engineer = new Engineer(userResponses.engineerName, userResponses.id, userResponses.email, userResponses.github);
            teamProfile.push(engineer);
            buildTeam();
        });
    }

    function buildIntern() {
        inquirer.prompt ([
            {
                type: "input",
                message: "Please enter the employee's name:",
                name: "internName"
            },

            {
                type: "input",
                message: "What is the employee's ID?",
                name: "id"
            },

            {
                type: "input",
                message: "Please enter the employee's email",
                name: "email"
            },

            {
                type: "input",
                message: "Please enter the intern's school:",
                name: "school"
            }
        ])
        .then(userResponses => {
            const intern = new Intern(userResponses.internName, userResponses.id, userResponses.email, userResponses.school);
            teamProfile.push(intern);
            buildTeam();
        });
    }
    

    function renderHTML() {
        console.log("Team profile successfully created!")
        fs.writeFile(outputPath, generateHTML(teamProfile), (err) => {
            if (err) throw err;
        });
    };

    // const writeToFile = (fileName, data) => {
    //     fs.writeFile(fileName, data, (err) =>
    //     {
    //         err ? console.log(err) : console.log("You've successfully created the team profile!");;
    //     });
    // };


    // const renderHTML = (fileName, data) => {
    //     fs.writeFile(fileName, data, (err) =>
    //     {
    //         err ? console.log(err) : console.log("You've successfully created the team profile!");;
    //     });
    // };
    
    
    
    // function to initialize app
    
    // const init = () => {
    //     buildTeam()
    //     .then((userResponses) => renderHTML("./output/team.html", generateHTML(teamProfile)))
    // }



    
    buildTeam();
    
    }



// Function call to initialize app
init();
