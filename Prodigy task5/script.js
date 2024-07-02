document.getElementById('searchButton').addEventListener('click', function() {
    let locationInput = document.getElementById('locationInput').value;
    getWeather(locationInput);
});

function getWeather(location) {
    let apiKey = '2e1858205a247180cc9db20f328018ef'; // Replace with your API key
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            updateWeatherInfo(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function updateWeatherInfo(data) {
    let locationElement = document.getElementById('location');
    let temperatureElement = document.getElementById('temperature');
    let descriptionElement = document.getElementById('description');
    let humidityElement = document.getElementById('humidity');
    let windElement = document.getElementById('wind');

    locationElement.textContent = `${data.name}, ${data.sys.country}`;
    temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windElement.textContent = `Wind: ${data.wind.speed} m/s`;
}
