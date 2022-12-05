let clockElement = document.querySelectorAll(".clock-block");
let topRightCurrentTimeClock = document.querySelector(".heading-time-now");

setInterval(() => {
  topRightCurrentTimeClock.textContent = getTime();
  initializeClocks();
}, 1000);

function getTime() {
  let day = new Date();
  let hour = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();

  hour = hour.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return hour + ":" + minutes + ":" + seconds;
}

function getRotation(time) {
  let parts = time.split(":");
  let hr = parseInt(parts[0], 10);
  let min = parseInt(parts[1], 10);
  let sec = parseInt(parts[2], 10);

  let hrrotation = 30 * hr + 0.5 * min;
  let minrotation = 6 * min;
  let secrotation = 6 * sec;

  return { hr: hrrotation, min: minrotation, sec: secrotation };
}

function initializeClocks() {
  topRightCurrentTimeClock.textContent = getTime();

  for (clock of clockElement) {
    let digitalClockTime = clock.querySelector(".clock-time");

    let hourArrow = clock.querySelector(".hr");
    let minuteArrow = clock.querySelector(".min");
    let secondArrow = clock.querySelector(".sec");

    let time = getTime();
    let rotation = getRotation(time);

    digitalClockTime.textContent = time;
    hourArrow.style.transform = `translate(-50%,-100%) rotate(${rotation.hr}deg)`;
    minuteArrow.style.transform = `translate(-50%,-100%) rotate(${rotation.min}deg)`;
    secondArrow.style.transform = `translate(-50%,-85%) rotate(${rotation.sec}deg)`;
  }
}
