// define the three classes using querySelectorAll
var classes = document.querySelectorAll(".clock-border");

classes[0].dataset.selected = "true";
classes[0].style.borderColor = "purple";

// define a function to handle the click events
function handleClick(clickedClass) {
  // remove the border from the other classes
  classes.forEach(function (x) {
    if (x !== clickedClass) {
      x.dataset.selected = "false";
      x.style.borderColor = "#26272b";
    }
  });

  // if the clicked x was already selected, unselect it
  if (clickedClass.dataset.selected === "false") {
    // add a border to the clicked x
    clickedClass.dataset.selected = "true";
    clickedClass.style.borderColor = "purple";
  }
}

// add a click event listener to each x using a loop
classes.forEach((x) => {
  x.addEventListener("click", () => {
    handleClick(x);
  });
});
