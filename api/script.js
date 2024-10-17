console.log("hello");

const API_KEY = "3b75328a2366d5d6b254658494e2bc16";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    try {
        let city = "purnia";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
    
        console.log("Weather data:-> ",data);
        renderWeatherInfo(data);

    } catch (error) {
        console.log("error :-> ", error);
    }
}