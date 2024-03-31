import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message: "enter first number" , type: "number" , name:"firstNumber"},
    {message: "enter second number" , type: "number" , name:"secondNumber"},
    {message: "select of the operators to perform operation" , type : "list" , name : "operator"
, choices : ["addition" , "substraction" , "multiplication" , "division"]},
]);

if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber)
} else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber)
} else {
    console.log("please select valid operator")
}
