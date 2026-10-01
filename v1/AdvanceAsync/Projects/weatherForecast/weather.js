document.getElementById("weatherForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const city = document.getElementById("cityInput").value;
  getWeather(city);
});

async function getWeather(city) {
  try {
    const apiKey = "ca4bf5f3b86626cb9b01bcdaf9f89dcf";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    console.log("Data", data);

    if (data.cod === 200) {
      displayWeather(data);
    } else {
      displayError(data.message);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    displayError("Error fetching weather data");
  }
}

function displayWeather(data) {
  const weatherResult = document.querySelector(".weather-result");
  weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function displayError(message) {
  const weatherResult = document.getElementById("weatherResult");
  weatherResult.innerHTML = `<p class="error">${message}</p>`;
}
