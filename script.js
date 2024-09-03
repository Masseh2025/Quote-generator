"use strict";

// selecting elements
const quote = document.querySelector("[data-quote]");
const author = document.querySelector("[data-author");

// calling api

async function quoteGenerator() {
  const loadQuote = await fetch("https://api.quotable.io/random");
  console.log(loadQuote);
  const loadedQuote = await loadQuote.json();
  console.log(loadedQuote);
}

quoteGenerator();
