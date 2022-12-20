import { getTime, initializeClocks } from "./updateClocks.js";
import { getTimeOfCity } from "./API.js";
import { countries } from "./search.js";

document
  .getElementById("submitClockCity")
  .addEventListener("click", myFunction);

let classes = document.querySelectorAll(".clock-border");

async function myFunction() {
  let searchText = document.getElementById("myInput").value;
  if (countries.includes(searchText)) {
    console.log("yay");
  }

  for (let i = 0; i < classes.length; i++) {
    if (classes[i].dataset.selected == "true") {
      let classes2 = document.querySelectorAll(".clock-block");

      let header = classes2[i].querySelector(".clock-header");

      header.textContent = document.getElementById("myInput").value;

      let time = await getTimeOfCity(header.textContent);
      time = getTime(time);

      initializeClocks(time, classes2[i], i);
    }
  }
}
