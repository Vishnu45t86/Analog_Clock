const body = document.querySelector("body");
const hrHand = document.querySelector(".hr");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");
const modeSwitch = document.querySelector("button");
const greet = document.querySelector(".Greet");
const quotetext = document.querySelector(".quote");
const dates = document.querySelector(".dates");


let currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

dates.innerText = `${day}-${month}-${year}`;
let quotes = {
    morning: [
        "Good morning! A new day is like a blank canvas. Fill it with beautiful colors and amazing memories.",
        "Rise and shine! Today is a new opportunity to make the most of your blessings.",
        "Mornings are full of possibilities. Embrace them with a grateful heart and a positive mindset."
    ],
    afternoon: [
        "Good afternoon! Take a break, recharge your energy, and keep moving forward towards your goals.",
        "The afternoon is a reminder to pause, reflect, and appreciate the journey you're on.",
        "Make the most of this afternoon by taking small steps towards big dreams."
    ],
    evening: [
        "Good evening! As the day winds down, let go of any negativity and focus on the blessings around you.",
        "The evening is a gentle reminder to slow down, cherish the moments, and spend time with loved ones.",
        "Enjoy the beauty of the evening sky and let its colors inspire peace and tranquility within."
    ],
    night: [
        "Good night! Rest your mind, recharge your soul, and wake up refreshed to embrace a new day.",
        "As the night falls, let go of worries and find comfort in the serenity of the darkness.",
        "Take a moment to appreciate the stillness of the night and the possibilities it holds for tomorrow."
    ]
};

let date = new Date();
let hr = date.getHours();
if (hr >= 5 && hr < 12) {
    greet.innerText = "Good Morning";
    quotetext.innerText = quotes.morning[Math.floor(Math.random() * quotes.morning.length)];
} else if (hr >= 12 && hr < 17) {
    greet.innerText = "Good Afternoon";
    quotetext.innerText = quotes.afternoon[Math.floor(Math.random() * quotes.morning.length)];
} else if (hr >= 17 && hr < 21) {
    greet.innerText = "Good Evening";
    quotetext.innerText = quotes.evening[Math.floor(Math.random() * quotes.morning.length)];
} else {
    greet.innerText = "Good Night";
    quotetext.innerText = quotes.night[Math.floor(Math.random() * quotes.morning.length)];
}


if (localStorage.getItem("mode") == "Dark Mode") {
    body.classList.add("dark");
    modeSwitch.textContent = "Ligth Mode";
}
modeSwitch.addEventListener('click', () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode")
});

const updateTime = () => {
    let date = new Date();
    let secToDeg = (date.getSeconds() / 60) * 360;
    let minToDeg = (date.getMinutes() / 60) * 360;
    let hrToDeg = (date.getHours() / 12) * 360;
    secHand.style.transform = `rotate(${secToDeg}deg)`;
    minHand.style.transform = `rotate(${minToDeg}deg)`;
    hrHand.style.transform = `rotate(${hrToDeg}deg)`;

}

const updateQuote = () => {
    let date = new Date();
    let hr = date.getHours();
    if (hr >= 5 && hr < 12) {
        greet.innerText = "Good Morning";
        quotetext.innerText = quotes.morning[Math.floor(Math.random() * quotes.morning.length)];
    } else if (hr >= 12 && hr < 17) {
        greet.innerText = "Good Afternoon";
        quotetext.innerText = quotes.afternoon[Math.floor(Math.random() * quotes.morning.length)];
    } else if (hr >= 17 && hr < 21) {
        greet.innerText = "Good Evening";
        quotetext.innerText = quotes.evening[Math.floor(Math.random() * quotes.morning.length)];
    } else {
        greet.innerText = "Good Night";
        quotetext.innerText = quotes.night[Math.floor(Math.random() * quotes.morning.length)];
    }
}
setInterval(updateQuote, 3000);
setInterval(updateTime, 1000);