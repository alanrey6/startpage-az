// get the intitial dark mode state
let darkMode = localStorage.getItem("darkMode");

// dark mode toggle. #dark id on the moon icon from font awesome
const darkModeToggle = document.getElementById("dark");

const enableDarkMode = () => {
  // Set background and text colors to dark themes
  document.documentElement.style.color = "var(--dark-text)";
  document.documentElement.style.background = "var(--dark-bg-color)";
  document.getElementsByTagName("nav")[0].style.background =
    "var(--dark-middle-color)";

  const sectionTag = document.getElementsByTagName("section");
  for (let i = 0; i < sectionTag.length; i++) {
    sectionTag[i].style.background = "var(--dark-middle-color)";
  }

  const linkTag = document.getElementsByTagName("a");
  for (let i = 0; i < linkTag.length; i++) {
    linkTag[i].style.color = "var(--dark-text)";
    linkTag[i].onmouseover = mouseOverDark;
    linkTag[i].onmouseout = mouseOutDark;
  }

  document.getElementsByTagName("label")[0].style.color =
    "var(--primary-color)";

  // Set localstorage to darkMode enabled
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // Set background and text colors to light themes
  document.documentElement.style.color = "var(--light-text)";
  document.documentElement.style.background = "var(--light-bg-color)";
  document.getElementsByTagName("nav")[0].style.background =
    "var(--light-middle-color)";

  const sectionTag = document.getElementsByTagName("section");
  for (let i = 0; i < sectionTag.length; i++) {
    sectionTag[i].style.background = "var(--light-middle-color)";
  }

  const linkTag = document.getElementsByTagName("a");
  for (let i = 0; i < linkTag.length; i++) {
    linkTag[i].style.color = "var(--light-text)";
    linkTag[i].onmouseover = mouseOverLight;
    linkTag[i].onmouseout = mouseOutLight;
  }

  document.getElementsByTagName("label")[0].style.color =
    "var(--secondary-color)";

  // Set localstorage to darkMode disabled
  localStorage.setItem("darkMode", null);
};

// declare mouse over/our functions
function mouseOverDark() {
  this.style.color = "var(--primary-color)";
}

function mouseOutDark() {
  this.style.color = "var(--dark-text)";
}

function mouseOverLight() {
  this.style.color = "var(--secondary-color)";
}

function mouseOutLight() {
  this.style.color = "var(--light-text)";
}

// checks local storage for status of dark mode
if (darkMode === "enabled") {
  enableDarkMode();
}

// click event listener for moon icon
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// update clock function
function updateClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var time = hours + ":" + minutes + " " + ampm;
  document.getElementById("time").innerHTML = time;
  setTimeout(updateClock, 1000);
}

updateClock();
