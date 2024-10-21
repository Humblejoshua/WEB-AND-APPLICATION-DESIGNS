//number 1
//prices of products bought
var pdt_1 = 15000;
var pdt_2 = 30000;
var pdt_3 = 60000;
var sum_pdt = pdt_1 + pdt_2 + pdt_3;
console.log(`Total price of products is ${sum_pdt}`);
//creating an if function to check if customer is qualified for discount
if(sum_pdt>100000){
    console.log("Qualified for discount");
}else{
    console.log("Not qualified for discount")
}

//number 2
let UACE_pts = 6;
if(UACE_pts>=7){
    console.log("Eligible for BSIT and Data Science");
}else{
    console.log("Choose social science")
}