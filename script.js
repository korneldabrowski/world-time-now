let clockElement = document.querySelectorAll(".clock-block");

let topRightCurrentTimeClock = document.querySelector(".heading-time-now");

initializeClocks();
topRightClock();

function topRightClock() {
  setInterval(() => {
    day = getDate();
    hour = day.getHours();
    minutes = day.getMinutes();
    seconds = day.getSeconds();

    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let time = hour + ":" + minutes + ":" + seconds;
    topRightCurrentTimeClock.textContent = time;
  });
}
function getDate() {
  return new Date();
}

for (clock of clockElement) {
  let digitalClockTime = clock.querySelector(".clock-time");

  let hourArrow = clock.querySelector(".hr");
  let minuteArrow = clock.querySelector(".min");
  let secondArrow = clock.querySelector(".sec");

  setInterval(() => {
    let day = getDate();
    let hour = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();

    let hrrotation = 30 * hour + 0.5 * minutes;
    let minrotation = 6 * minutes;
    let secrotation = 6 * seconds;

    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    digitalClockTime.textContent = hour + ":" + minutes + ":" + seconds;
    hourArrow.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
    minuteArrow.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
    secondArrow.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
  }, 1000);
}

function initializeClocks() {
  for (clock of clockElement) {
    let digitalClockTime = clock.querySelector(".clock-time");

    let hourArrow = clock.querySelector(".hr");
    let minuteArrow = clock.querySelector(".min");
    let secondArrow = clock.querySelector(".sec");

    let day = new Date();
    let hour = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();

    let hrrotation = 30 * hour + 0.5 * minutes;
    let minrotation = 6 * minutes;
    let secrotation = 6 * seconds;

    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    digitalClockTime.textContent = hour + ":" + minutes + ":" + seconds;
    hourArrow.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
    minuteArrow.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
    secondArrow.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
  }
}
