/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * A list of inpsiring and motivating quotes, which are placed in a `quotes` array 
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

/*** 
 * A test to make sure the quotes properly print to the console after being defined
 * Statement can be uncommented whenever it is needed for use
***/
//console.log(quotes);

/*** 
 * Variables to be used in a function that will be defined later
***/
var displayed_quote; 
var object_elements_message;

/***
 * A function that will randomly generate a number between 0 and 6
 * The number will then be used to return the object at that index location
 * Also includes a statement to automatically log the number to the console. Can help with testing to ensure the function is printing numbers within the correct range 
***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  return quotes[randomNumber];
}

/***
 * A test to make sure that, when called, the `getRandomQuote` function properly returns the object stored in a particular location within the array 
 * Statement can be uncommented whenever it is needed for use
 ***/ 
//console.log(getRandomQuote());

/***
 * Takes the object returned from the `getRandomQuote` function and stores its contents in a variable
 * A separate variable is used to build the HTML message by specfically calling each of the object's properties
 * Conditional statements are included to catch properties that might not be defined in all of the array's objects
 * The final message is then printed to the page by leveraging a function and a property performed on the document object
***/
function printQuote(){
  displayed_quote = getRandomQuote();
  object_elements_message = '';
  object_elements_message += '<p class="quote">' + displayed_quote.quote + '</p>'; 
  object_elements_message += '<p class="source">' + displayed_quote.source ;
  if("citation" in displayed_quote){
    object_elements_message += '<span class="citation">' + displayed_quote.citation + '</span>';
        }
  if("year" in displayed_quote){
    object_elements_message += '<span class="year">' + displayed_quote.year + '</span>';
    }
  object_elements_message += '</p>';
  document.getElementById('quote-box').innerHTML = object_elements_message;  
}

/*** 
 * A test to make sure that the `getRandomQuote` function properly works with the HTML message being constructed, as well as the conditional statements
 * Statement can be uncommented whenever it is needed for use
***/
//console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);