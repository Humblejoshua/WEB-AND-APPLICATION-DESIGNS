function greet(name){
    console.log(`hello ${name}`);
}
greet("Joshua")

function helloName(name){
    return `Hello ${name}`;
}
console.log(helloName("Matthew"));

function product(){
    var num_1 = 20;
    var num_2 = 30;
    var product = num_1 * num_2;
    console.log(`the product is ${product}`)
}
product()

function summation(num_2, num_3){
    return num_2 + num_3;
}
console.log(summation(20, 30));

function calc_profit(buying, selling, units){
    var bought = buying*units;
    var sold = selling*units;
    var profit = sold - bought;
    return profit;
}
console.log(calc_profit(200,100,2));


let waterAvail = 400;
if(waterAvail>500){
    console.log("Flooding");
}else if( waterAvail>200 && waterAvail <500){
    console.log("Moderate therefore no flooding");
} else{
    console.log("Very okay");
}

for( i=1; i<= 20; i++){
    console.log(i)
}

for(i=1; i<=10; i++){
    console.log(`5*${i} = ${5*i}`);
}

let sum = 0;
let i = 1;
while(i<=100){
    sum += 1;
    i++;
}
console.log(`the sum of numbers from 1 to 100 is ${sum}`)