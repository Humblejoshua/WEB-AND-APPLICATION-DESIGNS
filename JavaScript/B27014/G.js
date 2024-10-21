//number 2
function greetUser(name){
    console.log(`Welcome to Africa, ${name}!`);
}
greetUser("Brian")

//number 1
function calculateTax(income){
    const rate = 0.15;
    const tax_payable = income*rate; 
    return tax_payable;
}
calculateTax(50000);
console.log(`The tax to be paid is ${calculateTax(50000)}`);
