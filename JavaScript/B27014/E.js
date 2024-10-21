//number 1
//Decided to use a for loop 
// Below is my rainfall data for the last 10 days in mm
const rainfallData = [12, 25, 23, 43, 12, 51, 9, 0, 34, 7];

for (let day = 0; day<10; day++) {
    console.log(` The rainfall recieved on Day ${day + 1} is ${rainfallData[day]} mm`);
}