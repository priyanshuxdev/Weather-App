const inputEle = document.querySelector(".loc__input");
const btnEle = document.querySelector(".btn");
const locEle = document.querySelector(".location");
const tempEle = document.querySelector(".temperature");
const descEle = document.querySelector(".description");

async function getWeatherData(location) {
    const apiKey = "16add4389534901077d4e002cce4e53a";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const url = `${apiUrl}?q=${location}&appid=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    locEle.textContent = data.name;
    tempEle.textContent = `${Math.round(data.main.temp).toString().slice(0, 2)} °C`
    descEle.textContent = data.weather[0].description;
}

btnEle.addEventListener("click", () => {
  const location = inputEle.value;
  if (location) {
    getWeatherData(location);
  }
});
