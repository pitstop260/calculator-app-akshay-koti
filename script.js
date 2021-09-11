"use strict";

// THEME TOGGLER
const toggle1 = document.getElementById("toggle1");
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");
const redSlider = document.querySelector(".red-slider");
const body = document.querySelector("body");
const display = document.getElementById("display");
const slider = document.querySelector(".red-slider");
const logo = document.querySelector(".logo");
const theme = document.querySelector(".toggler");
const keyboard = document.querySelector(".keyboard");
const btn = document.querySelectorAll(".btn");
const del = document.getElementById("del");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const a = document.querySelectorAll("a");
const attribution = document.querySelector(".attribution");
const dot = document.querySelector(".dot");

function preventUncheck(e, toggle) {
  const checkbox = document.getElementById(toggle);
  if (checkbox.checked === false) {
    e.preventDefault();
  }
  if (toggle === "toggle1") {
    toggle2.checked = false;
    toggle3.checked = false;
    redSlider.style.paddingLeft = "5px";
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    display.style.backgroundColor = "hsl(224, 36%, 15%)";
    display.style.color = "white";
    slider.style.backgroundColor = "hsl(223,31%,20%)";
    logo.style.color = "white";
    theme.style.color = "white";
    keyboard.style.backgroundColor = "hsl(223,31%,20%)";
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "hsl(30, 25%, 89%)";
      btn[i].style.boxShadow = "0 5px hsl(28, 16%, 65%)";
      btn[i].style.color = "hsl(221, 14%, 31%)";
    }
    del.style.backgroundColor = "hsl(225, 21%, 49%)";
    del.style.color = "white";
    del.style.boxShadow = "0 5px hsl(224, 28%, 35%)";
    reset.style.backgroundColor = "hsl(225, 21%, 49%)";
    reset.style.color = "white";
    reset.style.boxShadow = "0 5px hsl(224, 28%, 35%)";
    equal.style.backgroundColor = "red";
    equal.style.boxShadow = "0 5px hsl(6, 70%, 34%)";
    equal.style.color = "white";
    for (let i = 0; i < a.length; i++) a[i].style.color = "hsl(28, 16%, 65%)";
    attribution.style.color = "hsl(30, 25%, 89%)";
    dot.style.backgroundColor = "red";
  }
  if (toggle === "toggle2") {
    toggle1.checked = false;
    toggle3.checked = false;
    redSlider.style.paddingLeft = "25px";
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    display.style.backgroundColor = "hsl(0, 0%, 93%)";
    display.style.color = "black";
    slider.style.backgroundColor = "hsl(0, 5%, 81%)";
    logo.style.color = "black";
    theme.style.color = "black";
    keyboard.style.backgroundColor = "hsl(0, 5%, 81%)";
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "hsl(45, 7%, 89%)";
      btn[i].style.color = "hsl(221, 14%, 31%)";
      btn[i].style.boxShadow = "0 5px hsl(35, 11%, 61%)";
    }
    del.style.backgroundColor = "hsl(185, 42%, 37%)";
    del.style.color = "white";
    del.style.boxShadow = "0 5px hsl(185, 58%, 25%)";
    reset.style.backgroundColor = "hsl(185, 42%, 37%)";
    reset.style.color = "white";
    reset.style.boxShadow = "0 5px hsl(185, 58%, 25%)";
    equal.style.backgroundColor = "red";
    equal.style.color = "white";
    equal.style.boxShadow = "0 5px hsl(6, 70%, 34%)";
    for (let i = 0; i < a.length; i++) a[i].style.color = "hsl(185, 42%, 37%)";
    attribution.style.color = "black";
    dot.style.backgroundColor = "red";
  }
  if (toggle === "toggle3") {
    toggle1.checked = false;
    toggle2.checked = false;
    redSlider.style.paddingLeft = "45px";
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    display.style.backgroundColor = "hsl(268, 71%, 12%)";
    display.style.color = "hsl(52, 100%, 62%)";
    slider.style.backgroundColor = "hsl(268, 71%, 12%)";
    logo.style.color = "hsl(52, 100%, 62%)";
    theme.style.color = "hsl(52, 100%, 62%)";
    keyboard.style.backgroundColor = "hsl(268, 71%, 12%)";
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "hsl(268, 47%, 21%)";
      btn[i].style.color = "hsl(52, 100%, 62%)";
      btn[i].style.boxShadow = "0 5px hsl(290, 70%, 36%)";
    }
    del.style.backgroundColor = "hsl(281, 89%, 26%)";
    del.style.color = "white";
    del.style.boxShadow = "0 5px hsl(285, 91%, 52%)";
    reset.style.backgroundColor = "hsl(281, 89%, 26%)";
    reset.style.color = "white";
    reset.style.boxShadow = "0 5px hsl(285, 91%, 52%)";
    equal.style.backgroundColor = "hsl(176, 100%, 44%)";
    equal.style.color = "black";
    equal.style.boxShadow = "0 5px hsl(177, 92%, 70%)";
    for (let i = 0; i < a.length; i++) a[i].style.color = "gray";
    attribution.style.color = "hsl(52, 100%, 62%)";
    dot.style.backgroundColor = "hsl(176, 100%, 44%)";
  }
}

toggle1.addEventListener("click", function (e) {
  preventUncheck(e, "toggle1");
});
toggle2.addEventListener("click", function (e) {
  preventUncheck(e, "toggle2");
});
toggle3.addEventListener("click", function (e) {
  preventUncheck(e, "toggle3");
});

// CALCULATOR

btn.forEach((el) => {
  el.addEventListener("click", function (e) {
    const value = display.value;
    if (el.value === "DEL") {
      const arr = [...display.value];
      arr.pop();
      display.value = arr.join("");
    } else if (el.value === "=") {
      display.value =
        Math.round((eval(display.value) + Number.EPSILON) * 100) / 100;
    } else if (el.value === "RESET") display.value = "";
    else if (
      Number(value[value.length - 1]) === 0 ||
      el.value === "0" ||
      (el.value === "." && display.value === "")
    ) {
      display.value += el.value;
    } else if (!Number(value[value.length - 1]) && !Number(el.value)) {
      return false;
    } else display.value += el.value;
  });
});

// Prevent input from keyboard
document.onkeydown = function (e) {
  return false;
};
