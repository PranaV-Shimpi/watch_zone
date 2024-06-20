var nameList = [
  "Aarav",
  "Aditi",
  "Advait",
  "Ananya",
  "Arjun",
  "Aishwarya",
  "Aryan",
  "Bhavna",
  "Dhruv",
  "Divya",
  "Kabir",
  "Kiran",
  "Krishna",
  "Laxmi",
  "Manav",
  "Meera",
  "Mohan",
  "Nisha",
  "Raj",
  "Rani",
  "Rohan",
  "Radha",
  "Samar",
  "Sita",
  "Shiva",
  "Shruti",
  "Vikram",
  "Vidya",
  "Yash",
  "Yamini",
  "Zara",
  "Zoya",
  "Akash",
  "Anjali",
  "Aman",
  "Anita",
  "Bhavesh",
  "Bhavna",
  "Chirag",
  "Chitra",
  "Dev",
  "Deepa",
  "Eshan",
  "Esha",
  "Farhan",
  "Farida",
  "Gaurav",
  "Gayatri",
  "Harsh",
  "Heena",
  "Ishan",
  "Isha",
  "Jatin",
  "Jyoti",
  "Karan",
  "Kavita",
  "Laksh",
  "Lata",
  "Madhav",
  "Maya",
  "Naveen",
  "Naina",
  "Om",
  "Ojas",
  "Pavan",
  "Priya",
  "Ravi",
  "Rekha",
  "Sagar",
  "Sanya",
  "Tarun",
  "Tanvi",
  "Uday",
  "Uma",
  "Varun",
  "Veena",
  "Vishal",
  "Vaani",
  "Yuvraj",
  "Yashika",
  "Ajay",
  "Alka",
  "Ashok",
  "Amrita",
  "Bhagya",
  "Bina",
  "Chandan",
  "Chaya",
  "Deepak",
  "Damini",
  "Eshwar",
  "Eshani",
  "Ganesh",
  "Geeta",
  "Harish",
  "Hema",
  "Inder",
  "Ila",
  "Jay",
  "Jaya",
];
export const generateRandomName = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};


const templates = [
  "The {noun} {verb}s {adverb}.",
  "She {verb}s with {noun}.",
  "The {noun} is {adjective}.",
  "He likes {noun}s that are {adjective}.",
  "They {verb} {adverb}.",
  "The {noun} {verb}s while {adverb}.",
  "She is {adjective} and {adjective}.",
  "The {noun} {verb}ed {adverb}.",
  "He enjoys {verb}ing {adverb}.",
  "The {noun} is not {adjective}.",
  "They {verb} {adverb} and {adverb}.",
  "The {noun} is {adjective} and {adjective}.",
  "She {verb}s {adverb} and {adverb}.",
  "He {verb}s the {noun} with {adjective} {adjective}.",
  "The {noun} {verb}s {adjective}ly.",
  "They {verb} {adjective} {noun}s.",
  "The {noun} is {adjective} and {adjective} when {verb}ing {adverb}.",
  "He {verb}s {adverb} to the {noun} that is {adjective}.",
  "She {verb}s {adverb} in the {noun} that is {adjective}.",
  "The {noun} {verb}s {adverb} and {adverb}."
];


const nouns = [
  "sun", "moon", "tree", "river", "mountain", "bird", "flower",
  "ocean", "lake", "star", "cloud", "rainbow", "snowflake", "sand",
  "desert", "valley", "forest", "field", "island", "canyon", "volcano",
  "planet", "galaxy", "comet", "meteor", "earthquake", "tsunami", "tornado"
];

const verbs = [
  "run", "jump", "fly", "sing", "dance", "swim", "play",
  "laugh", "cry", "talk", "read", "write", "sleep", "eat",
  "drink", "drive", "work", "study", "explore", "discover", "create",
  "solve", "win", "lose", "help", "love", "hate", "travel"
];

const adjectives = [
  "beautiful", "peaceful", "amazing", "wonderful", "joyful",
  "colorful", "magnificent", "majestic", "serene", "tranquil",
  "glorious", "stunning", "spectacular", "brilliant", "vibrant",
  "fantastic", "fabulous", "splendid", "charming", "graceful",
  "elegant", "breathtaking", "awesome", "fantastic", "magical",
  "miraculous", "fascinating", "incredible", "dazzling"
];

const adverbs = [
  "quickly", "happily", "carefully", "silently", "gently",
  "gracefully", "smoothly", "efficiently", "elegantly", "briskly",
  "cheerfully", "vividly", "boldly", "freely", "gladly",
  "warmly", "kindly", "quietly", "patiently", "safely",
  "swiftly", "steadily", "firmly", "calmly", "brightly",
  "energetically", "passionately", "politely", "promptly"
];


const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomMessage = () => {
  const template = getRandomElement(templates);

  const sentence = template.replace(/{noun}/g, getRandomElement(nouns))
                           .replace(/{verb}/g, getRandomElement(verbs))
                           .replace(/{adjective}/g, getRandomElement(adjectives))
                           .replace(/{adverb}/g, getRandomElement(adverbs));

  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
};