"use strict";

// selecting elements
const quote = document.querySelector("[data-quote]");
const author = document.querySelector("[data-author");
const quoteButton = document.querySelector("[data-quote-button]");

// adding event listener to button

quoteButton.addEventListener("click", quoteGenerator);

// calling api

async function quoteGenerator() {
  const quoteResponse = await fetch("https://api.quotable.io/random");
  const quoteJSON = await quoteResponse.json();
  const quoteAuthor = quoteJSON.author;
  const quoteContent = quoteJSON.content;

  //   setting content
  quote.textContent = quoteContent;
  author.textContent = `- ${quoteAuthor}`;
}

// calling function when page loads
quoteGenerator();
