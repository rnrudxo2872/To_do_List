const InsertWeather = document.querySelector('.WeathData');
const Geo = 'CurWeather';
const Weather_API_KEY = "9ec4f040743c8a068d8372f0f8af47d2";

function AskWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=kr&appid=${Weather_API_KEY}&units=metric`).then(res => {
        return (res.json());
    }).then(json => {
        console.log(json);
        let NowWeather = json.weather[0].description;
        InsertWeather.innerHTML = `${NowWeather}, ${json.main.temp} 도, ${json.name}`;
    })
}

function Success(GeoPosition) {
    let latitude = GeoPosition.coords.latitude;
    let longitude = GeoPosition.coords.longitude;
    let Object = {
        latitude,
        longitude
    };

    localStorage.setItem(Geo, JSON.stringify(Object));
    AskWeather(latitude, longitude);
}

function ErrorCatch() {
    console.log('Weather Loading Error.');
}

function AskGeo() {
    navigator.geolocation.getCurrentPosition(Success, ErrorCatch);
}

function getWeather() {
    const loadGeo = localStorage.getItem(Geo);
    if (loadGeo === null) {
        AskGeo();
    } else {
        let GeoData = JSON.parse(loadGeo);
        let lat = GeoData.latitude;
        let lon = GeoData.longitude;
        AskWeather(lat, lon);

    }
}

getWeather();