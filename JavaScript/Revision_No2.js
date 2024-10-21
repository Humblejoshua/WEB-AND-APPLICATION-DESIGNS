let score = 80;
if (score > 90 && score <= 100) {
  console.log("A grade");
} else if (score > 75 && score <= 90) {
  console.log("B grade");
} else if (score >= 50 && score <= 75) {
  console.log("C grade");
} else {
  console.log("Fail");
}

//The code displays 'B grade'

//change it to a switch statement
//THe code below is wrong even if it runs???
let score1 = 80;
switch (true) {
  case score1 > 90 && score1 <= 100:
    console.log("A grade");
    break;
  case score1 > 75 && score1 <= 90:
    console.log("B grade");
    break;
  case score1 >= 50 && score1 <= 75:
    console.log("C grade");
    break;
  default:
    console.log("Fail");
}
