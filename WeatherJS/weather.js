class Weather {
    constructor(city, state) {
        this.apiKey = '';//removed on purpose
        this.city = city;
        this.state = state;
    }

    // Fetch Weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const responseData = await fetchWeather.json();
        return {
            responseData
        }
    }


    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
