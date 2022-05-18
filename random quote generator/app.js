const generateButton = document.querySelector('.generate');

const TDK = ["The Dark Knight",
"Madness, as you know, is like gravity, all it takes is a little push.",
"It's not about what I want. It's about what's fair!",
"Some men just want to watch the world burn.",
"What doesn't kill you makes you stranger.",
"You either die a hero or live long enough to see yourself become the villain."]; 

const godfather = ["Godfather",
"He's Still Alive. They Hit Him With 5 Shots And He's Still Alive",
"I Don’t Like Violence, Tom. I’m A Businessman. Blood Is A Big Expense.",
"Revenge Is A Dish Best Served Cold.",
"Finance Is A Gun. Politics Is Knowing When To Pull The Trigger.",
"I’m Gonna Make Him An Offer He Can’t Refuse."];

const taxiDriver = ["Taxi Driver",
"There Never Has Been Any Choice For Me.",
"Someday, A Real Rain Will Come And Wash All This Scum Off The Streets.",
"I’m God’s Lonely Man.",
"You’re In A Hell, And You’re Gonna Die In A Hell, Just Like The Rest Of ‘Em!",
"Days Go On And On. They Don’t End."];

const ESotSM = ["Eternal Sunshine of the Spotless Mind",
"You can erase someone from your mind. Getting them out of your heart is another story.",
"Well, technically speaking, the procedure is brain damage, but it's on a par with a night of heavy drinking. Nothing you'll miss.",
"You are what you love, not what loves you.",
"You looked happy. Happy with a secret.",
"Random thoughts for Valentine's Day, 2004. Today is a holiday invented by greeting card companies to make people feel like crap."];

const shawshankRed = ["Shawshank Redemption",
"She was beautiful. God, I loved her. I just didn’t know how to show it; that’s all. I killed her, Red. I didn’t pull the trigger, but I drove her away. And that’s why she died, because of me.",
"It’s my life. Don’t you understand? It’s my life!",
"Brook was here.",
"I don’t waste time on losers, Tommy.",
"Every man’s got a breaking point."];


const quotes = [TDK, godfather, taxiDriver, ESotSM, shawshankRed];

let getQuote = document.querySelector('.quote');
let getMovie = document.querySelector('.movie');


generateButton.addEventListener('click', () => {
    let setRandom = Math.floor(Math.random() * 5 + 1);
    let setQuoteRandom = Math.floor(Math.random() * quotes.length);

    let getNewQuotes = quotes[setQuoteRandom];

    getQuote.innerHTML = getNewQuotes[setRandom];
    getMovie.innerHTML = `- ${getNewQuotes[0]}`;
});