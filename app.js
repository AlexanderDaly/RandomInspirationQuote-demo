// Array of three random word parts to construct message  
const prefixes = ['You can', 'Go for it', 'Reach for'];
const verbs = ['achieve', 'build', 'create']; 
const objects = ['your dreams', 'the stars', 'your goals'];

// Generate random index for each array  
const prefixIndex = Math.floor(Math.random() * prefixes.length);
const verbIndex = Math.floor(Math.random() * verbs.length);
const objectIndex = Math.floor(Math.random() * objects.length);

// Construct message  
const message = `${prefixes[prefixIndex]} ${verbs[verbIndex]} ${objects[objectIndex]}.`;

// Display message
console.log(message);