document.addEventListener("DOMContentLoaded", function () {
  const sliderEl = document.querySelector("#range");
  const sliderValue = document.querySelector(".value");
  const heightValue = document.getElementById("heightValue");
  const resultElement = document.getElementById("result");

  sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;

    sliderValue.textContent = tempSliderValue;
    heightValue.textContent = tempSliderValue;
    const progress = (tempSliderValue / sliderEl.max) * 100;

    sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
  });

  const femaleCard = document.getElementById("femaleCard");
  const maleCard = document.getElementById("maleCard");

  femaleCard.addEventListener("click", function () {
    handleGenderSelection("female");
  });

  maleCard.addEventListener("click", function () {
    handleGenderSelection("male");
  });

  const addWeightButton = document.querySelector(".addWeightButton");
  const subtractWeightButton = document.querySelector(".subtractWeightButton");
  const addButtonAge = document.querySelector(".addButton");
  const subtractButtonAge = document.querySelector(".subtractButton");

  addWeightButton.addEventListener("click", function () {
    const weightElement = document.getElementById("weight");
    weightElement.textContent = parseFloat(weightElement.textContent) + 1;
  });

  subtractWeightButton.addEventListener("click", function () {
    const weightElement = document.getElementById("weight");
    weightElement.textContent = Math.max(
      0,
      parseFloat(weightElement.textContent) - 1
    );
  });

  addButtonAge.addEventListener("click", function () {
    const ageElement = document.getElementById("age");
    ageElement.textContent = parseInt(ageElement.textContent) + 1;
  });

  subtractButtonAge.addEventListener("click", function () {
    const ageElement = document.getElementById("age");
    ageElement.textContent = Math.max(0, parseInt(ageElement.textContent) - 1);
  });

  document.querySelector(".calcu a").addEventListener("click", bmiCalculator);
});

function handleGenderSelection(gender) {
  const selectedHeight = parseFloat(document.getElementById("range").value);
  const selectedWeight = parseFloat(
    document.getElementById("weight").textContent
  );
  const selectedAge = parseInt(document.getElementById("age").textContent);

  console.log("Selected gender:", gender);
  console.log("Selected height:", selectedHeight);
  console.log("Selected weight:", selectedWeight);
  console.log("Selected age:", selectedAge);

  document.getElementById("femaleCard").classList.remove("selected");
  document.getElementById("maleCard").classList.remove("selected");
  document.getElementById(`${gender}Card`).classList.add("selected");
}

function bmiCalculator() {
  var height = parseFloat(document.getElementById("range").value);
  var weight = parseFloat(document.getElementById("weight").textContent);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter valid height and weight.";
    return;
  }

  var bmi = weight / ((height / 100) * (height / 100));
  sessionStorage.setItem("bmiResult", bmi);
  window.location.href = "bmi_result.html";
}
