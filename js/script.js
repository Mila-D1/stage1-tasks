const time = document.querySelector('.time');
console.log(time);

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

    console.log(tomorrow - date)
    setTimeout(function() { showDate() }, tomorrow - date)
}
showTime()
showDate()