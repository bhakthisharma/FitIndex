document.addEventListener("DOMContentLoaded", function () {
  let bmi = parseFloat(sessionStorage.getItem("bmiResult")).toFixed(2);
  let resultMessage = "";

  if (bmi) {
    if (bmi < 18.5) {
      resultMessage +=
        "You are considered underweight. Consider consulting with a healthcare provider.";
      bmiStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultMessage += "You have a normal weight. Keep up the good work!";
      bmiStatus = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      resultMessage +=
        "You are considered overweight. Consider adopting a healthier lifestyle.";
      bmiStatus = "Overweight";
    } else {
      resultMessage +=
        "You are considered obese. It's advisable to consult with a healthcare provider for guidance.";
      bmiStatus = "Obese";
    }
    document.getElementById("bmiStatus").textContent = bmiStatus;
    document.getElementById("bmiValue").textContent = bmi;
    document.getElementById("bmiMessage").textContent = resultMessage;
  } else {
    document.getElementById("result").innerHTML = "No BMI result available.";
  }
});
