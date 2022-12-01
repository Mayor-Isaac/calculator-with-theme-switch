"use strict";
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const toggleDot = document.querySelector(".toggle .bg-orange");
const screen = document.querySelector(".result");
const keysToggleContainer = document.querySelectorAll(".bg-blue");
const whiteBGs = document.querySelectorAll(".bg-white");
const royalBGs = document.querySelectorAll(".bg-royal");
const orangeBGs = document.querySelectorAll(".bg-orange");
const whiteTexts = document.querySelectorAll(".text-white");
// SHOW SECOND THEME
const changeTheme = function () {
  body.style.backgroundColor = " hsl(0, 0%, 90%)";
  screen.style.backgroundColor = "hsl(0, 0%, 93%)";
  toggleDot.style.margin = "0 auto";
  keysToggleContainer.forEach(
    (blue) => (blue.style.backgroundColor = "hsl(0, 5%, 81%)")
  );
  whiteTexts.forEach((text) => (text.style.color = "hsl(60, 10%, 19%)"));
  whiteBGs.forEach((white) => {
    (white.style.backgroundColor = " hsl(45, 7%, 89%)"),
      (white.style.boxShadow = "2px 2px 5px 1px hsl(35, 11%, 61%)");
  });
  royalBGs.forEach((royal) => {
    (royal.style.backgroundColor = " hsl(185, 42%, 37%)"),
      (royal.style.boxShadow = "2px 2px 5px 1px hsl(185, 58%, 25%)");
  });
  orangeBGs.forEach((orange) => {
    (orange.style.backgroundColor = " hsl(25, 98%, 40%)"),
      (orange.style.boxShadow = "2px 2px 5px 1px hsl(25, 99%, 27%)");
  });
  // SHOW THIRD THEME
  toggle.addEventListener("click", function () {
    body.style.backgroundColor = "  hsl(268, 75%, 9%)";
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
    toggleDot.style.margin = "0 0 0 auto";
    keysToggleContainer.forEach(
      (blue) => (blue.style.backgroundColor = "hsl(268, 71%, 12%)")
    );
    whiteTexts.forEach((text) => (text.style.color = "hsl(52, 100%, 62%)"));
    whiteBGs.forEach((white) => {
      (white.style.backgroundColor = " hsl(268, 47%, 21%)"),
        (white.style.boxShadow = "2px 2px 5px 1px hsl(290, 70%, 36%)"),
        (white.style.color = "hsl(52, 100%, 62%)");
    });
    royalBGs.forEach((royal) => {
      (royal.style.backgroundColor = " hsl(281, 89%, 26%)"),
        (royal.style.boxShadow = "2px 2px 5px 1px hsl(285, 91%, 52%)");
    });
    orangeBGs.forEach((orange) => {
      (orange.style.backgroundColor = " hsl(176, 100%, 44%)"),
        (orange.style.boxShadow = "2px 2px 5px 1px hsl(177, 92%, 70%)");
    });
    toggle.addEventListener("click", function () {
      body.style.backgroundColor = "hsl(222, 26%, 31%)";
      screen.style.backgroundColor = " hsl(224, 36%, 15%)";
      toggleDot.style.margin = "0";
      keysToggleContainer.forEach(
        (blue) => (blue.style.backgroundColor = "hsl(268, 71%, 12%)")
      );
      whiteTexts.forEach((text) => (text.style.color = "hsl(0, 0%, 100%)"));
      whiteBGs.forEach((white) => {
        (white.style.backgroundColor = "hsl(30, 25%, 89%)"),
          (white.style.boxShadow = "2px 2px 5px 1px hsl(28, 16%, 65%)"),
          (white.style.color = "hsl(221, 14%, 31%)");
      });
      royalBGs.forEach((royal) => {
        (royal.style.backgroundColor = "hsl(225, 21%, 49%)"),
          (royal.style.boxShadow = "2px 2px 5px 1px hsl(224, 28%, 35%)");
      });
      orangeBGs.forEach((orange) => {
        (orange.style.backgroundColor = "hsl(6, 63%, 50%)"),
          (orange.style.boxShadow = "2px 2px 5px 1px hsl(6, 70%, 34%)");
      });
      toggle.addEventListener("click", function () {
        changeTheme();
      });
    });
  });
};
toggle.addEventListener("click", changeTheme);