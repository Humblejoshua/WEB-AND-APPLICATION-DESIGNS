// && is for and - two conditions that must be met
//|| is for or - two conditions where any can be met
// ! is for not - the contrary must happen

age = 18;
nationality = "Ugandan";
if (age === 18 && nationality === "Ugandan") {
  console.log("This person is eligible to vote");
} else if (age < 18) {
  console.log("This person is below age.");
} else {
  console.log("This person is not a Ugandan.");
}
