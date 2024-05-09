#! /usr/bin/env node  

import inquirer from "inquirer";

const random: number = 10000 + Math.floor(Math.random() * 90000);

let myblc = 0;

let answer = await inquirer.prompt([
  {
    name: "student",
    type: "input",
    message: "Please Enter Your name",
    validate: function (value) {
      if (value.trim() != "") {
        return true;
      }
      return "Name is not valid";
    },
  },
  {
    name: "courses",
    type: "list",
    message: "Select the course from the list",
    choices: ["html", "javaScript", "typeScript", "Python"],
  },
]);

const coursefee: { [key: string]: number } = {
  html: 5000,
  javaScript: 6000,
  typeScript: 7000,
  Python: 8000,
};
console.log(`\n Course fee ${coursefee[answer.courses]}/-\n`);
console.log(`Your balance is ${myblc}\n`);

let paymentmethod = await inquirer.prompt([
  {
    name: "payment",
    type: "list",
    message: "Please select your payment method",
    choices: ["Bank transfer", "easypaisa", "jazzcash"],
  },
  {
    name: "amount",
    type: "input",
    message: "Please enter your amount",
    validate: function (value) {
      if (value.trim() != "") {
        return true;
      }
      return "Name is not valid";
    },
  },
]);

console.log(`\nYou select payment method ${paymentmethod.payment}`);

const coursefees = coursefee[answer.courses];

const paymentamount = parseFloat(paymentmethod.amount);

console.log(`\nYour balance is ${coursefees}`);

if (coursefees === paymentamount) {
  console.log(
    `\nCongratulations you have successfully enrolled in ${answer.courses} course\n`
  );
} else {
  console.log("Please enter valid amount");
}

let status = await inquirer.prompt([
  {
    name: "statusreport",
    type: "list",
    message: "What do you want to do next?",
    choices: ["View Student status", "Exit"],
  },
]);

if (status.statusreport == "View Student status") {
  console.log("\n************Status************\n");
  console.log(`Student name: ${answer.student}`);
  console.log(`Student ID: ${random}`);
  console.log(`Course: ${answer.courses}\n`);
} else {
  console.log("\n******Thank you*****");
}
