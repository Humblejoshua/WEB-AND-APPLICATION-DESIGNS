//var num = 23;
//var num_two = 2;
//var sum = num + num_two;
//console.log("Sum", sum)

//var num_three = 40;
//var num_four  = 60;
//var sum_two = num_three+num_four
//console.log("Sum two:", sum_two)

//functions

//Void function
function summation(){
    var num_five=40;

    var num_six=4;

    var sum_three = num_five + num_six;

    console.log("Sum_three:", sum_three)
}
summation();

//Return function
function summation_two(){
    var num_five=40;

    var num_six= 4;

    var sum_three = num_five + num_six;

    return sum_three;
}

//How can we use a value of a function??
//a) Use it by printing the value directly on the terminal
console.log("Sum four:", summation_two())
//b)assigning the value to a variable
var sum_four = summation_two();

summation_three(40,4);
summation_three(60,50);

//function that asks for name and greets
function greet(name){
    console.log("Jeebale ko", name);
}
greet("Humble")

//Calculate profit function
function calc_profit(selling_price,cost_price, units_sold){
    var sold = selling_price*units_sold;
    var bought = cost_price*sold;
    var profit = sold - bought;
    return profit
}
calc_profit(4000,3000,4)
console.log(profit)