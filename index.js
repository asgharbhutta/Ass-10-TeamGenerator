const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const output_dir = path.resolve(__dirname, "output")
const outputPath = path.join(output_dir, "team.html")

const render = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];

function appMenu(){

    //create the manager questions
    function createManager(){
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's Id?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?",
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        }); 
    }

    function createTeam(){
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which team member do you wanna add to your roster?",
                choices: ["Engineer","Intern","No more to add"]
            }
        ]).then(userChoice => {
            switch(userChoice.memberChoice){
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineers name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineers id?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineers email?",
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail)
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        }); 
    }

    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your inters name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is your interns id?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your inters email?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your inters school?",
            }
            
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        }); 
    }

    function buildTeam(){
        if(!fs.existsSync(output_dir)){
            fs.mkdirSync(output_dir)
        }
        fs.writeFileSync(outputPath, render(teamMembers),"utf-8");
    }

    createManager();
}

appMenu()