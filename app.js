const result = document.getElementById("data");
const cityData = document.getElementById("search");
const btn = document.getElementById("btn");
let place = "hyderabad";

const getWeather = () => {
  let cityValue = cityData.value;
  console.log(cityData);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
  if (cityValue.length == 0) {
    result.innerHTML = `<h3> Enter a city</h3>`;
  } else {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        // console.log(item);
        // console.log(item.weather[0].icon);
        // console.log(item.weather[0].main);
        // console.log(item.weather[0].description);
        // console.log(item.name);
        // console.log(item.main.temp_max);
        // console.log(item.main.temp_min);
        result.innerHTML = `<h2>${item.name}</h2>
        <h3>${item.weather[0].main}
        <h4 class ="decri">${item.weather[0].description}</h4>
        <img src = "https://openweathermap.org/img/w/${item.weather[0].icon}.png"/>
        <h1 class = "temp">${item.main.temp} &#176;</h1>
        <h4 class = "feel_like">Feels Like</h4>
        <h4 class = "feel_like">${item.main.feels_like} &#176;</h4>
        <div class = "temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${item.main.temp_min}</h4>
            </div> 
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${item.main.temp_max}</h4>
            </div> 
        </div>
        `;
      })
      .catch(() => {
        result.innerHTML = `<h3> City not found!</h3>`;
      });
  }
};
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  getWeather();
});
window.addEventListener("load", getWeather);
