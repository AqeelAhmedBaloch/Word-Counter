#! /usr/bin/env node
import inquirer from "inquirer";

const answer :{
    Sentence: string;
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to Count the Word.."
    }
])

const answerFinal = answer.Sentence.trim().split(" ");
console.log(answerFinal);
console.log(`Your sentence world count a : ${answerFinal.length}`);

