#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bold.italic.greenBright("\n\t\t Code With SDA - Words Counter "));
console.log("=".repeat(60));

let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bold.italic.blueBright("Enter Your Sentence To Count The Word !!")
    }
]);

let words = answer.sentence.trim().split(" ");

console.log("=".repeat(60));
console.log(chalk.bold.italic.cyanBright("- Sentence Words:"));
console.log(words);
console.log(chalk.bold.italic.yellowBright(`\n - Words Count: ${chalk.bold.italic.green(words.length)}`));
console.log("=".repeat(60));