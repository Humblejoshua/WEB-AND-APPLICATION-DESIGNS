//number 1
function find_calling_rate(networkCode) {
    let callRate;

    switch (networkCode){
        case 1: // MTN
            callRate = "MTN: shs. 100 for each minute";
            break;
        case 2: // Airtel
            callRate = "Airtel: shs. 150 for each minute";
            break;
        case 3: // Africell
            callRate = "Africell: shs. 95 for each minute";
            break;
        default:
            callRate = "You have entered a wrong network code. Enter 1 for MTN, 2 for Airtel, and 3 for Africell.";
    }
    return callRate;
}
console.log(find_calling_rate(3));