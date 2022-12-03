// Selecting all of the css classes
// on which we want to apply functionalities
// const hr = document.querySelectorAll(".hr");
// const min = document.querySelectorAll(".min");
// const sec = document.querySelectorAll(".sec");

// const hrr = document.querySelector(".hr");

// console.log("HR: " + hr + " min: " + min + " sec: " + sec);
// console.log("all: " + hr + " vs normal: " + hrr);

let clockElement = document.querySelectorAll(".clock-block");

for (clock of clockElement) {
  console.log(clock);
  let digitalClockTime = clock.querySelector(".clock-time");

  let hourArrow = clock.querySelector(".hr");
  let minuteArrow = clock.querySelector(".min");
  let secondArrow = clock.querySelector(".sec");

  setInterval(() => {
    let day = new Date();
    let hour = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();

    let hrrotation = 30 * hour + 0.5 * minutes;
    let minrotation = 6 * minutes;
    let secrotation = 6 * seconds;

    digitalClockTime.textContent = hour + ":" + minutes + ":" + seconds;
    hourArrow.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
    minuteArrow.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
    secondArrow.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
  });
}

// for (el of hourElements) {
//   let hrr = el.querySelectorAll(".hr");
//   hrr.style.transform = `translate(-50%,-100%) rotate(${30}deg)`;
// }

// // Setting up the period of working
// setInterval(() => {
//   // Extracting the current time
//   // from DATE() function
//   let day = new Date();
//   let hour = day.getHours();
//   let minutes = day.getMinutes();
//   let seconds = day.getSeconds();

//   // Formula that is explained above for
//   // the rotation of different hands
//   let hrrotation = 30 * hour + 0.5 * minutes;
//   let minrotation = 6 * minutes;
//   let secrotation = 6 * seconds;

//   let currentTime = hour + ":" + minutes + ":" + seconds;

//   let textTime = document.getElementsByClassName("clock-time");

//   for (text of textTime) {
//     text.textContent = currentTime;
//   }

//   //   hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
//   //   min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
//   //   sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
// });
