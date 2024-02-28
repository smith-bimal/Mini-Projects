const currentApiKey = "a0aeb998a358ffad5fbf4a8d7e00c9cb";
const searchBtn = document.querySelector("#search-btn");
const searchCity = document.querySelector(".search input");
let currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=` + searchCity.value;
let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=` + searchCity.value;

const closeErrorBtn = document.querySelector("#popup-close");
const headDate = document.querySelector("#main-day");
const headMonth = document.querySelector("#main-month");
const dateFn = new Date();
const date = dateFn.getDate();
const month = dateFn.getMonth();

const bgVideo = document.querySelector(".card video");
const mainWeatherLogo = document.querySelector(".hero-sec img");
const mainWeatherName = document.querySelector("#weather-type");
const mainTemp = document.querySelector("#temp");
const mainCity = document.querySelector("#city");
const weatherDesc = document.querySelector("#weather-description");
const mainMaxTemp = document.querySelector("#max-temp");
const mainMinTemp = document.querySelector("#min-temp");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");



const checkDate = () => {

    if (date < 10) {
        headDate.innerHTML = `0${date}`;
    } else {
        headDate.innerHTML = date;
    }

    switch (month) {
        case 0:
            headMonth.innerHTML = "Jan";
            break;
        case 1:
            headMonth.innerHTML = "Feb";
            break;
        case 2:
            headMonth.innerHTML = "Mar";
            break;
        case 3:
            headMonth.innerHTML = "Apr";
            break;
        case 4:
            headMonth.innerHTML = "May";
            break;
        case 5:
            headMonth.innerHTML = "Jun";
            break;
        case 6:
            headMonth.innerHTML = "Jul";
            break;
        case 7:
            headMonth.innerHTML = "Aug";
            break;
        case 8:
            headMonth.innerHTML = "Sep";
            break;
        case 9:
            headMonth.innerHTML = "Oct";
            break;
        case 10:
            headMonth.innerHTML = "Nov";
            break;
        case 11:
            headMonth.innerHTML = "Dec";
            break;
    }
}
checkDate();

let checkTableDay = () => {
    const dayIdx = dateFn.getDay();
    const nextDay = document.querySelectorAll(".nextday");

    for (let i = 0; i < nextDay.length; i++) {

        function dayCheck(el) {
            switch (el) {
                case 0:
                    nextDay[i].innerHTML = "Sun";
                    break;
                case 1:
                    nextDay[i].innerHTML = "Mon";
                    break;
                case 2:
                    nextDay[i].innerHTML = "Tue";
                    break;
                case 3:
                    nextDay[i].innerHTML = "Wed";
                    break;
                case 4:
                    nextDay[i].innerHTML = "Thu";
                    break;
                case 5:
                    nextDay[i].innerHTML = "Fri";
                    break;
                case 6:
                    nextDay[i].innerHTML = "Sat";
                    break;
            }
        }

        let currentDay = parseInt(nextDay[i].innerHTML, 10);
        if (currentDay > 6) {
            dayCheck(currentDay % 7);
        } else {
            dayCheck((dayIdx + i + 1) % 7);
        }
    }
}
checkTableDay();

searchBtn.addEventListener("click", () => {

    function errorPopup() {
        document.querySelector("#popup-msg").style.transform = "scale(1)";
        document.querySelector(".hero-container").style.display = "none";
        searchCity.setAttribute("disabled", true);

        closeErrorBtn.addEventListener("click", () => {
            searchCity.removeAttribute("disabled");
            document.querySelector("#popup-msg").style.transform = "scale(0)";
            document.querySelector(".hero-container").style.display = "flex";
        })
    }

    if (searchCity.value == "") {
        errorPopup();
    } else {
        currentApiUrl += searchCity.value;
        forecastApiUrl += searchCity.value;

        async function checkCurrentWeather() {
            let currentResponse = await fetch(currentApiUrl + `&appId=${currentApiKey}`);
            let currentData = await currentResponse.json();
            let weatherName = currentData.weather[0].main;

            mainWeatherName.innerHTML = weatherName;
            mainWeatherLogo.style.opacity = "1";
            mainTemp.innerHTML = Math.round(currentData.main.temp);
            mainCity.innerHTML = currentData.name;
            weatherDesc.innerHTML = currentData.weather[0].description;
            mainMaxTemp.innerHTML = currentData.main.temp_max + "°c";
            mainMinTemp.innerHTML = currentData.main.temp_min + "°c";
            humidity.innerHTML = currentData.main.humidity;
            windSpeed.innerHTML = currentData.wind.speed;

            function weatherVisual(type) {
                if (type == "") {
                    bgVideo.src = `BG-videos/Default.mp4`;
                    mainWeatherLogo.src = `Images/Clear.png`;
                } else if (type == "Clouds" || type == "Clear" || type == "Drizzle" || type == "Rain" || type == "Snow" || type == "Thunderstorm") {
                    bgVideo.src = `BG-videos/${type}.mp4`;
                    mainWeatherLogo.src = `Images/${type}.png`;
                } else {
                    bgVideo.src = `BG-videos/Mist.mp4`;
                    mainWeatherLogo.src = `Images/Mist.png`;
                }
            }
            weatherVisual(weatherName);
        }
        checkCurrentWeather();

        async function checkForecastWeather() {
            let forecastResponse = await fetch(forecastApiUrl + `&appId=${currentApiKey}`);
            let forecastData = await forecastResponse.json();
            let i = 0;
            const miniTime = document.querySelectorAll(".mini-hour");
            const miniTemp = document.querySelectorAll(".mini-hour-temp");
            const miniWeatherHourLogo = document.querySelectorAll(".mini-tab img")

            miniTime.forEach((el) => {
                const unixTime = forecastData.list[i].dt;
                let unixDateCon = new Date(unixTime * 1000);
                el.innerHTML = unixDateCon.getHours() + ' : ' + unixDateCon.getMinutes();
                i++;
            })

            i = 0;
            miniTemp.forEach((el) => {
                const Temp = forecastData.list[i].main.temp;
                el.innerHTML = Math.floor(Temp) + "°c";
                i++;
            })

            i = 0;
            miniWeatherHourLogo.forEach((el) => {
                let weatherLogoName = forecastData.list[i].weather[0].main
                el.style.opacity = "1";

                if (weatherLogoName == "") {
                    el.src = `Images/Clear.png`;
                } else if (weatherLogoName == "Clouds" || weatherLogoName == "Clear" || weatherLogoName == "Drizzle" || weatherLogoName == "Rain" || weatherLogoName == "Snow" || weatherLogoName == "Thunderstorm") {
                    el.src = `Images/${weatherLogoName}.png`;
                } else {
                    el.src = `Images/Mist.png`;
                }
            })

            const fdForecarstWeathers = document.querySelectorAll(".mini5-weather");
            let idx = 0;
            fdForecarstWeathers.forEach((weatherText) => {
                let temp = forecastData.list[idx].main.temp;

                weatherText.innerHTML = forecastData.list[idx].weather[0].main;
                weatherText.nextElementSibling.firstElementChild.src = `Images/${forecastData.list[idx].weather[0].main}.png`;
                weatherText.nextElementSibling.firstElementChild.style.opacity = "1";
                weatherText.nextElementSibling.nextElementSibling.innerHTML = Math.floor(temp) + "°c";
                idx += 8;
            })
        }

        checkForecastWeather();
    }

    searchCity.value = "";
    currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=` + searchCity.value;
    forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=` + searchCity.value;
})

// async function checkForecastWeather() {
//     let forecastResponse = await fetch(forecastApiUrl + `cuttack&appId=${currentApiKey}`);
//     let forecastData = await forecastResponse.json();

//     console.log(forecastData);

//     const fdForecarstWeathers = document.querySelectorAll(".mini5-weather");

//     let idx = 0;
//     fdForecarstWeathers.forEach((weatherText) => {
//         let temp = forecastData.list[idx].main.temp;

//         weatherText.innerHTML = forecastData.list[idx].weather[0].main;
//         weatherText.nextElementSibling.firstElementChild.src = `Images/${forecastData.list[idx].weather[0].main}.png`;
//         weatherText.nextElementSibling.nextElementSibling.innerHTML = Math.floor(temp)+"°c";
//         console.log(forecastData.list[idx].weather[0].main);
//         idx += 8;
//     })
// }
// checkForecastWeather();