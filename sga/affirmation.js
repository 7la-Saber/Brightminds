
const affirmations = [
    "I am enough.",
    "I am intelligent and capable of learning new things.",
    "I am capable and strong.",
    "I believe in myself and my capabilities.",
    "I am worthy of love and respect.",
    "I am in control of my thoughts and emotions.",
    "I am grateful for the good things in my life.",
    "I am constantly growing and evolving.",
    "I attract positivity and good energy.",
    "I am resilient and can overcome any challenge.",
    "I deserve happiness and success.",
    "I am at peace with who I am.",
    "Today is a new day filled with endless possibilities.",
    "I release negative thoughts and embrace positivity.",
    "I am letting go of self-doubt and embracing self-belief.",
    "I am grateful for my unique qualities and talents.",
    "I am surrounded by love and support.",
    "I am capable of creating a positive and fulfilling life.",
    "I am releasing limiting beliefs and embracing abundance.",
    "I am grateful for the journey of self-discovery and growth."
];


function getRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    return affirmations[randomIndex];
}


document.getElementById("random-affirmation-btn").addEventListener("click", function() {
    const randomAffirmation = getRandomAffirmation();
    document.getElementById("affirmation-text").innerHTML = randomAffirmation;
});
