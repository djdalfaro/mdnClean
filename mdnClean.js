// ==UserScript==
// @name         MDN Clean
// @namespace    https://github.com/djdalfaro/mdnClean
// @version      0.1
// @description  Clean's up MDN to eliminate distractions when pulling up research for coding.
// @author       Damon Alfaro
// @include      https://developer.mozilla.org*
// @include      http://developer.mozilla.org*
// @grant        none
// ==/UserScript==

"use strict";

const globalElements = {
  // Add any elements by KNOWN id here
  footer: "nav-footer",
};
const noIds = {
  // Add any elements (UNKNOWN id) by class here
  header: ".page-header",
  news: ".newsletter-container",
};

const hideGlobalElements = function () {
  // Removes elements by id
  for (const elem of Object.keys(globalElements)) {
    if (document.getElementById(globalElements[elem])) {
      document.getElementById(globalElements[elem]).remove();
    }
  }
  // Removes other found elements
  for (const elem of Object.keys(noIds)) {
    if (document.querySelector(noIds[elem])) {
      document.querySelector(noIds[elem]).remove();
    }
  }
};
// Moves search block to new location
const moveSearch = function () {
  if (
    document.querySelector(".titlebar") &&
    document.querySelector(".header-search")
  ) {
    document
      .querySelector(".titlebar")
      .appendChild(document.querySelector(".header-search"));
  }
};
moveSearch();
hideGlobalElements();
