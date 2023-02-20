const time = document.querySelector('.time');

time.textContent = "Text";

function showTime() {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec;
    
    document.querySelector('.time').innerHTML = currentTime;


    setTimeout(function() { showTime() }, 1000)
}
function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('en-US', options);
    document.querySelector('.date').innerHTML = currentDate;
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);

    setTimeout(function() { showDate() }, tomorrow - date)
}
showTime()
showDate()

let timeOfDay = ''
let randnum = 1

function setBg(index) { 
    const randfile = (index < 10) ? '0' + index : index
    let url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randfile}.jpg`;

    const img = new Image();
    img.src = url 
    img.onload = () => {      
      document.body.style.backgroundImage = `url('${url}')`
    }; 
}

function nextBg() {
    randnum = (randnum == 20) ? 1 : randnum + 1
    setBg(randnum)
}

function prevBg() {
    randnum = (randnum == 0) ? 20 : randnum - 1
    setBg(randnum)
}

document.querySelector('.slide-prev').onclick = prevBg;
document.querySelector('.slide-next').onclick = nextBg;

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    
    switch (Math.floor(hours / 6)) {
        case 0: timeOfDay = 'night'; break
        case 1: timeOfDay = 'morning'; break
        case 2: timeOfDay = 'afternoon'; break
        case 3: timeOfDay = 'evening'; break
    }
    document.querySelector('.greeting').innerHTML = `Good ${timeOfDay}`
    let nextDate = new Date();
    nextDate.setMinutes(0)
    nextDate.setSeconds(0)
    nextDate.setHours(hours + (6 - (hours % 6)))
    if (nextDate.getHours() == 24) {
        nextDate.setHours(0)
        nextDate += 86400
    }
    randnum = (Math.floor(Math.random()*19)+1)
    
    setBg(randnum)
    
    setTimeout(function() { getTimeOfDay() }, nextDate - date)
}
getTimeOfDay()

const name = document.querySelector('.name');
function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)