class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-description');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelsLike');
        this.dewPoint = document.getElementById('w-dewPoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather.description;
        this.string.textContent = weather.main.temp;
        // this.details.textContent = weather.
        this.icon.setAttribute('src', weather.icon.url);
        this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
        this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
        this.wind.textContent = `Wind: ${weather.wind_string}`;

    }

}