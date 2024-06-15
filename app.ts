#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log("\n")
console.log(chalk.bgCyan.red("----------------------- ATM MACHINE --------------------"))
console.log("\n")
let myBalance = 15000;
let myPincode = 12345;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Code",
        type: "input",
        validate: (input) => {
            if (input.trim() === "") {
                return "Please Enter Your Pin Code!";
            }
            if (!/^\d+$/.test(input)) {
                return "Only Numbers are Allowed!";
            }
            if (input.length > 5) {
                return "Only 5 Digits Allowed!";
            }
            return true;
        }
    }
]);

if (parseInt(pinAnswer.pin) === myPincode) {
    console.log("\n")
    console.log("-----------------------")
    console.log(chalk.bgWhite.black("--- Correct Pin Code ---"))
    console.log("-----------------------")
    console.log("\n")


    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an Option",
            type: "list",
            choices: ["WithDraw", "Check Balance"]
        }
    ]);

    if (operationAnswer.operation === "WithDraw") {
        let Amount = await inquirer.prompt([
            {
                name: "amount",
                message: "Select Your Amount",
                type: "list",
                choices: [5000, 10000, 15000, 20000, 25000]
            }
        ]);

        if (Amount.amount === 5000 && Amount.amount <= myBalance) {
            myBalance -= Amount.amount;

            console.log("\n")
            console.log(chalk.yellow("------------ WithDraw Successfully :) -----------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.green(`-------- Your Remaining Balance is ${chalk.yellow("$" + myBalance)} -------`))
            console.log("\n")
        }
        else if (Amount.amount === 10000 && Amount.amount <= myBalance) {
            myBalance -= Amount.amount;

            console.log("\n")
            console.log(chalk.yellow("------------ WithDraw Successfully :) -----------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.green(`-------- Your Remaining Balance is ${chalk.yellow("$" + myBalance)} -------`))
            console.log("\n")
        }
        else if (Amount.amount === 15000 && Amount.amount <= myBalance) {
            myBalance -= Amount.amount;

            console.log("\n")
            console.log(chalk.yellow("------------ WithDraw Successfully :) -----------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.green(`-------- Your Remaining Balance is ${chalk.yellow("$" + myBalance)} -------`))
            console.log("\n")
        }
        else if (Amount.amount === 20000 && Amount.amount <= myBalance) {
            myBalance -= Amount.amount;

            console.log("\n")
            console.log(chalk.yellow("------------ WithDraw Successfully :) -----------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.green(`-------- Your Remaining Balance is ${chalk.yellow("$" + myBalance)} -------`))
            console.log("\n")
        }
        else if (Amount.amount === 25000 && Amount.amount <= myBalance) {
            myBalance -= Amount.amount;

            console.log("\n")
            console.log(chalk.yellow("------------ WithDraw Successfully :) -----------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.yellow("-------------------------------------------------"))
            console.log(chalk.green(`-------- Your Remaining Balance is ${chalk.yellow("$" + myBalance)} -------`))
            console.log("\n")
        }
        else {
            console.log("\n")
            console.log(chalk.red("----------- Insuficient Balance :( ------------"))
            console.log(chalk.yellow("-----------------------------------------------"))
        }

    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log("\n")
        console.log(chalk.green.bold(`------- Your Current Balance is ${chalk.yellow("$" + myBalance)} -------`))
        console.log(chalk.yellow("---------------------------------------------"))
    }
} else {
    console.log("\n")
    console.log(chalk.red("----------- Incorrect Pin Code! ------------"))
    console.log(chalk.yellow("--------------------------------------------"))
}