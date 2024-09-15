const form = document.querySelector('.form')
const container = document.querySelector('.js-box')

const BASE_URL = 'http://api.weatherapi.com/v1'
const KEY = 'cf6ade792c254893abb72132241109'

function submitForm(evt) {
    evt.preventDefault()
    const { city, days } = evt.target.elements;
    fetchForecast(city.value, days.value)
        .then(data => container.innerHTML = createMarkup(data))
        .catch(err => console.log(err))
}

function createMarkup({ current: {temp_c}, location: {name, region, country}, forecast:{forecastday}}) {
    return forecastday.map(({ date, astro: { sunrise, sunset }, day: { avgtemp_c, condition: { text, icon }, maxtemp_c, mintemp_c } }) =>
    { 
        return `
        <h1>Прогноз погоди - ${name} ${region} ${country}</h1>
        <h2>Дата - ${date}</h2>
        <img src="${icon}" alt="${text}">
        <p>${text}</p>
        <p>Температура зараз - ${temp_c}</p>
        <p>Середня температура - ${avgtemp_c}</p>
        <p>Максимальна температура - ${maxtemp_c}</p>
        <p>Мінімальна температура - ${mintemp_c}</p>
        <p>Схід сонця ${sunrise}</p>
        <p>Захід сонця ${sunset}</p>
        `
    }
    ).join('')
}

function fetchForecast(city, days) {
     return fetch(`${BASE_URL}/forecast.json?key=${KEY}&q=${city}&days=${days}&lang=uk`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.statusText}`);
            }
            return response.json()
        }
        )
        .catch(err => console.log(err))
}


form.addEventListener('submit', submitForm)