const API_KEY = "c9083851ff561db1c840153cc2af7890";
function onGeoOK(position){

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const weather= document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    fetch(url).then(response => response.json().then(data=>{
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} \n\n ${data.main.temp}`;
    }));

}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

// 37.5112  126.9741

// c9083851ff561db1c840153cc2af7890