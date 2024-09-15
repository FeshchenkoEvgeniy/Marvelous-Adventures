const dateDay = document.querySelector('.date-day')
const date = document.querySelector('.date')
const dateMonth = document.querySelector('.date-month')
const dateYear = document.querySelector('.date-year')
const digitalClock = document.querySelector('.digital-clock')
const secondsArrow = document.querySelector('.clock-seconds__arrow');
const minutesArrow = document.querySelector('.clock-minutes__arrow');
const hoursArrow = document.querySelector('.clock-hours__arrow');

const namesOfMonth = ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];

const arrDay = ["Неділя","Понеділок","Вівторок","Середа","Четвер","П`ятниця","Субота"];

function clock() {
    const currentDate = new Date()

    date.textContent = currentDate.getDate()
    dateDay.textContent = arrDay[currentDate.getDay()]
    dateMonth.textContent = namesOfMonth[currentDate.getMonth()]
    dateYear.textContent = currentDate.getFullYear()

    let hours = currentDate.getHours().toString().padStart(2,'0');
    let minutes = currentDate.getMinutes().toString().padStart(2,'0');
    let seconds = currentDate.getSeconds().toString().padStart(2,'0');
    let currentTime = `${hours}:${minutes}:${seconds}`
    digitalClock.textContent = `Поточний час: ${currentTime}`

    secondsArrow.style.transform = `rotate(${(360 / 60) * seconds}deg)`
    minutesArrow.style.transform = `rotate(${(360 / 60) * minutes}deg)`
    hoursArrow.style.transform = `rotate(${(360 / 12) * hours + (360 / 12 / 60) * minutes}deg)`
}


setInterval(clock, 1000)