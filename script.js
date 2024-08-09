const hourtick = document.querySelector(".hour-tick")
const minutetick = document.querySelector(".minute-tick")
const secondtick = document.querySelector(".second-tick")
setInterval(() => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if (hours > 12) {
       let currenthour = hours - 12
       hourtick.style.transform = `rotate(${currenthour * 30}deg)`
    } else{
        hourtick.style.transform = `rotate(${hours * 30}deg)`
    }
    minutetick.style.transform = `rotate(${minutes * 6}deg)`
    secondtick.style.transform = `rotate(${seconds * 6}deg)`
}, 1000);
