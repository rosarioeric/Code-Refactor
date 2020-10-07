const Manager = require("/Users/ericsstuff/Desktop/Github/Team homework/lib/Manager.js");
const Engineer = require("/Users/ericsstuff/Desktop/Github/Team homework/lib/Engineer.js");
const Intern = require("/Users/ericsstuff/Desktop/Github/Team homework/lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const newEmployee = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function createEmployee(){
    inquirer.prompt([
        {
            name: "employee",
            message: "What role do you want to create?",
            choices: ["Engineer", "Intern", "Manager", "Stop"]
        }

        ]).then(function(answer){
        
        if (Manager){
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the manager's name?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the manager's email?"
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the manager's office number?"
                }
            ]).then(function(answer){
                const id = newEmployee.length += 1;
                const role = "Manager";
                const manager = new Manager(answer.name, id, answer.email, answer.officeNumber);
                newEmployee.push(manager);
                createEmployee();    
            })
        }
        if (Engineer){
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the engineer's name?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the engineer's email?",
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's Github?"
                }
            ]).then(function(answer){
                const id = newEmployee.length += 1;
                const role = "Engineer";
                const engineer = new Engineer(answer.name, id, answer.email, answer.github);
                newEmployee.push(engineer);
                createEmployee();    
            })
        }
        if (Intern){
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the intern's name?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the intern's email?"
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school does the intern attend?"
                }
            ]).then(function(answer){
                const id = newEmployee.length += 1;
                const role = "Intern";
                const intern = new Intern(answer.name, id, answer.email, answer.school);
                newEmployee.push(intern);
                createEmployee();    
            })
    }
    }   
)}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
