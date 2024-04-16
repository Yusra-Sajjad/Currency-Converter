#! /usr/bin/env node
import inquirer from "inquirer";
let c_value = {
    USD: 1,
    PKR: 278,
    UAE: 3.6,
    INR: 83.5,
    SAR: 3.75,
    MYR: 4.7
};
let user_answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "converting from",
        choices: ['PKR', 'UAE', 'USD', 'INR', 'SAR', 'MYR']
    },
    {
        name: "to",
        type: "list",
        message: "converting to",
        choices: ['PKR', 'UAE', 'USD', 'INR', 'SAR', 'MYR']
    },
    {
        name: "amount",
        type: "number",
        message: "your amount to convert"
    }
]);
console.log(c_value[user_answer.to] / c_value[user_answer.from] * user_answer.amount);
