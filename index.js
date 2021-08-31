var variable = require('readline-sync');
const chalk = require('chalk');



var username = variable.question('what is your name ? ');

console.log(chalk.blue("welcome",username,"lets play"));


console.log("--------------------------------------\n");




score = 0;

const warning=chalk.red;
const welcome=chalk.green;
const endgame=chalk.yellow;

function playGAme(question,answer){
  var Userans = variable.question(question);

  if (Userans === answer){
    console.log(welcome('you are right! '));
    score = score+ 1;
  }else{
    console.log(warning('oops! its wrong'));

  }

}

playGAme("What Is position of Michel Scott in The Office  ?  ","manager");

console.log(welcome("Your Final Score",score));

console.log("--------------------------------------\n");



playGAme("what is Rainn Wilson name in The Office ? ","dwight");

console.log(welcome("Your Final Score",score));
console.log("--------------------------------------\n");
playGAme("Who was the fat guy in the Office ? ","kevin");



console.log(welcome("Your Final Score",score));

console.log("--------------------------------------\n");


var questions = [{
  question : "What Is Toby In The Office   ?  ",
  answer : "hr"
},
{
  question : "what is Stanley Hudson Department in The Office ?  ",
  answer : "sales"
}];


for (var i=0 ; i<questions.length ; i++){

    var currentQues = questions[i];
    playGAme(currentQues.question,currentQues.answer)
    console.log("--------------------------------------\n");

}


console.log(welcome("Your Final Score",score));
console.log("--------------------------------------\n");
