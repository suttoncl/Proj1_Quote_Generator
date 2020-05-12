/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "If you want to have more, you have to become more.",
    source: "Jim Rohn",
  },
  {
    quote: "Every morning you get up, put on the breastplate of God's approval. You deserve his blessings.",
    source: "Joel Osteen",
  },
  {
    quote: "Build the person you want to be so that you can have the life you want to have.",
    source: "Thomas Bilyeu",
  },
  {
    quote: "Determine to live life with flair and laughter.",
    source: "Maya Angelou",
  },
  {
    quote: "Don't just aspire to make a living, aspire to make a difference.",
    source: "Denzel Washington",
    citation: "www.passiton.com"
  },
  {
    quote: "I refuse to be ordinary. I will never settle for anything less than legendary!",
    source: "Team Fearless",
    year: 2019
  },
  {
    quote: "When you're on fire people will travel from miles around to watch you burn. Tap into your inner power!",
    source: "Sam Crowley",
  }
];

//console.log(quotes);

var displayed_quote; 
var object_elements_message = '';

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  return quotes[randomNumber];
  
}

//console.log(getRandomQuote());

// function print(object_elements_message){
//   var outputDiv = document.getElementById('quote-box');
//   outputDiv.innerHTML = object_elements_message;
// }


/***
 * `printQuote` function
***/
function printQuote(){
  displayed_quote = getRandomQuote();
  object_elements_message += '<p class="quote">' + displayed_quote.quote + '</p>'; 
  object_elements_message += '<p class="source">' + displayed_quote.source ;
  if("citation" in displayed_quote){
    object_elements_message += '<span class="citation">' + displayed_quote.citation + '</span>';
        }
  if("year" in displayed_quote){
    object_elements_message += '<span class="year">' + displayed_quote.year + '</span>';
    }
  object_elements_message += '</p>';
  //return object_elements_message;
  document.getElementById('quote-box').innerHTML = object_elements_message;  
}

//console.log(printQuote());
//printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);