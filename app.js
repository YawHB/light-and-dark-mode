"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);
  detectUserPreference();
}

// Detect and set previous selected color mode from localStorage
function detectUserPreference() {
  const modeFromLocalStorage = readUserColorMode();
  console.log("detectUserPreference: " + modeFromLocalStorage);

  if (modeFromLocalStorage) {
    changeMode(modeFromLocalStorage);
    document.querySelector("#select-color-mode").value = modeFromLocalStorage;
  }
}

// Read and return userColorMode from localStorage
function readUserColorMode() {
  const userColorMode = localStorage.getItem("userColorMode");
  return userColorMode;
}

// Save color color mode to localStorage
function saveUserColorMode(mode) {
  localStorage.setItem("userColorMode", mode);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  changeMode(selectedColorMode);
  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  resetColorMode();
  console.log("changeMode: " + mode);
  if (mode === "dark") {
    document.querySelector("body").classList.add("dark-mode");
  } else if (mode === "grey") {
    document.body.classList.add("grey-mode");
  } else if (mode === "green") {
    document.body.classList.add("green-mode");
  } else {
    document.querySelector("body").classList.remove("dark-mode");
  }
}

function resetColorMode() {
  document.body.classList = "";
}
