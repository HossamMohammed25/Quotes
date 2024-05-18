let quotes = [
  {
    quote: "“So many books, so little time.”",
    author: "--Frank Zappa",
  },
  {
    quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "-- Robert Frost",
  },
  {
    quote: " “If you tell the truth, you don't have to remember anything.” ",
    author: "-- Mark Twain",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "-- Elbert Hubbard",
  },
  {

    quote: "“Without music, life would be a mistake.”",
    author: "--Friedrich Nietzsche",
  },
  {
    quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "-- Dr. Seuss",
  },
  {
    quote: "“Be yourself; everyone else is already taken”",
    author: "-- Oscar Wilde",
  },
  {
    quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "-- Oscar Wilde",
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "-- Oscar Wilde",
  },
  {
    quote: "“Insanity is doing the same thing, over and over again, but expecting different results.”",
    author: "-- Narcotics Anonymous",
  },

]


let lastRandom;

function quotation() {
  const paragraphElement = document.getElementById("quoteOutput");
  const paragraphElement2 = document.getElementById("authorOutput");

  let randomQuote;
  do {
    randomQuote = Math.floor(Math.random() * quotes.length);
  } while (randomQuote === lastRandom);

  console.log(lastRandom);
  console.log(randomQuote);
  console.log('--------------------------------');

  lastRandom = randomQuote;
  console.log('--------------------------------');

  console.log(lastRandom);
  console.log(randomQuote);
  paragraphElement.textContent = quotes[randomQuote].quote;
  paragraphElement2.textContent = quotes[randomQuote].author;

}

