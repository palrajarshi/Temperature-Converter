// Targeting Elements in the DOM
const fahrenheit = document.querySelector(".fahrenheit-inp");
const celcius = document.querySelector(".celcius-inp");
const kelvin = document.querySelector(".kelvin-inp");
const clearbtn = document.getElementById("clear");

// Listening to Input Events
window.addEventListener("input", (e) => {
  console.log(e.target.value);
  if (isNaN(Number.parseFloat(e.target.value))) {
    kelvin.value = "";
    celcius.value = "";
    fahrenheit.value = "";
    return;
  }
  if (e.target.classList.contains("celcius-inp")) {
    const celciusVal = Number.parseFloat(celcius.value);
    fahrenheit.value = celciusVal * 1.8 + 32;
    kelvin.value = celciusVal + 273.15;
  } else if (e.target.classList.contains("fahrenheit-inp")) {
    const fahrenheitVal = Number.parseFloat(fahrenheit.value);
    celcius.value = (fahrenheitVal - 32) * (5 / 9);
    kelvin.value = (fahrenheitVal - 32) * (5 / 9) + 273.15;
  } else if (e.target.classList.contains("kelvin-inp")) {
    const kelvinVal = Number.parseFloat(kelvin.value);
    celcius.value = kelvinVal - 273.15;
    fahrenheit.value = (kelvinVal - 273.15) * (9 / 5) + 32;
  }
});

// Clear btn logic
clearbtn.addEventListener("click", () => {
  kelvin.value = "";
  celcius.value = "";
  fahrenheit.value = "";
});
