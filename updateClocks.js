import { getTimeOfCity } from "./API.js";

let clockElement = document.querySelectorAll(".clock-block");
let topRightCurrentTimeClock = document.querySelector(".heading-time-now");
topRightCurrentTimeClock.textContent = getTime();

let myTimes = [];

for (let clock of clockElement) {
  myTimes.push(await getTimeOfCity(getCityNameFromHeader(clock)));
}

for (let i = 0; i < myTimes.length; i++) {
  myTimes[i] = getTime(myTimes[i]);
}

setInterval(() => {
  topRightCurrentTimeClock.textContent = getTime();
  for (let i = 0; i < clockElement.length; i++) {
    initializeClocks(myTimes[i], clockElement[i], i);
  }
}, 1000);

function getCityNameFromHeader(clock) {
  return clock.querySelector(".clock-header").textContent;
}

export function initializeClocks(startTime, clock, index) {
  let digitalClockTime = clock.querySelector(".clock-time");

  let hourArrow = clock.querySelector(".hr");
  let minuteArrow = clock.querySelector(".min");
  let secondArrow = clock.querySelector(".sec");

  // Split the input string into its hour, minute, and second components
  let timeComponents = startTime.split(":");

  // Convert the hour, minute, and second components into numbers
  let hour = parseInt(timeComponents[0]);
  let minute = parseInt(timeComponents[1]);
  let second = parseInt(timeComponents[2]);

  // Add one to the seconds value
  second = (second + 1) % 60;
  if (second === 0) {
    minute = (minute + 1) % 60;
    if (minute === 0) {
      hour = (hour + 1) % 24;
    }
  }

  second = second.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  hour = hour.toString().padStart(2, "0");

  // Update the start time with the new values
  myTimes[index] = `${hour}:${minute}:${second}`;

  let rotation = getRotation(myTimes[index]);

  digitalClockTime.textContent = myTimes[index];
  hourArrow.style.transform = `translate(-50%,-100%) rotate(${rotation.hr}deg)`;
  minuteArrow.style.transform = `translate(-50%,-100%) rotate(${rotation.min}deg)`;
  secondArrow.style.transform = `translate(-50%,-85%) rotate(${rotation.sec}deg)`;
}

export function getTime(timeString) {
  if (timeString) {
    // Define the regular expression pattern for matching the time
    console.log(timeString);
    const timePattern = new RegExp(/([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/);

    // Use the regular expression to search the string for a match
    let timeMatch = timeString.match(timePattern);

    if (timeMatch) {
      // If a match is found, extract the matched time and print it
      let time = timeMatch[0];
      return time.toString();
    } else {
      // If no match is found, print an error message
      console.log("Error: Could not find a time in the specified format");
      alert("Error: Could not find a time in the specified format");
    }
  } else {
    let date = new Date();
    return date.toLocaleTimeString();
  }
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
