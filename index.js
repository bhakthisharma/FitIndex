const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  console.log(event.target.value)
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
})

