let submit = document.querySelector("button");
let output = document.querySelector(".output");
let previousCalculations = [];

submit.addEventListener("click", calculateBMI);

function calculateBMI() {
  let firstName = document.querySelector('input[name="name"]').value;
  let height = document.querySelector('input[name="height"]').value;
  let weight = document.querySelector('input[name="weight"]').value;
  let bmi = Math.floor(weight / ((height / 100) * (height / 100)));
  let newCalculation = {
    name: firstName,
    height: `${height}cm`,
    weight: `${weight}kg`,
    bmi: bmi,
  };
  output.textContent = firstName + ", your BMI is: " + bmi;

  previousCalculations.push(newCalculation);
  console.log(previousCalculations);
}
