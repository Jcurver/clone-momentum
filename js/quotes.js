const quotes = [
{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    ,author: " - Nelson Mandela - "
},
{
    quote: "The way to get started is to quit talking and begin doing."
    ,author: " - Walt Disney - "
},
{
    quote: "If life were predictable it would cease to be life, and be without flavor."
    ,author: " - Eleanor Roosevelt - "
},
{
    quote: "Life is what happens when you are busy making other plans."
    ,author: " - John Lennon - "
},
{
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
    ,author: " - Mother Teresa - "
},
{
    quote: "When you reach the end of your rope, tie a knot in it and hang on."
    ,author: " - Franklin D. Roosevelt - "
},
{
    quote: "Always remember that you are absolutely unique. Just like everyone else."
    ,author: " - Margaret Mead - "
},
{
    quote: "Do not judge each day by the harvest you reap but by the seeds that you plant."
    ,author: " - Robert Louis Stevenson - "
},
{
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."
    ,author: " - Benjamin Franklin - "
},
{
    quote: "It does not matter how slowly you go as long as you do not stop."
    ,author: " - Confucius - "
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
quote.style.color = "white";
quote.style.fontSize="20px";

author.style.color = "white";