// Write your solution here!
// Initial value of cats array
// l

// Initial value of cats array
// let cats = ["Milo", "Otis", "Garfield"];

// // Function to destructively append a cat to the end of the cats array
// function destructivelyAppendCat(name) {
//     cats.push(name);
// }

// // Function to destructively prepend a cat to the beginning of the cats array
// function destructivelyPrependCat(name) {
//     cats.unshift(name);
// }

// // Function to destructively remove the last cat from the cats array
// function destructivelyRemoveLastCat() {
//     cats.pop();
// }

// // Example usage
// console.log(cats); // Outputs: ["Milo", "Otis", "Garfield"]

// // Appending a new cat
// destructivelyAppendCat("Whiskers");
// console.log(cats); // Outputs: ["Milo", "Otis", "Garfield", "Whiskers"]

// // Prepending a new cat
// destructivelyPrependCat("Felix");
// console.log(cats); // Outputs: ["Felix", "Milo", "Otis", "Garfield", "Whiskers"]

// // Removing the last cat
// destructivelyRemoveLastCat();
// console.log(cats); // Outputs: ["Felix", "Milo", "Otis", "Garfield"]
 
// Assigning the initial value of cats array
let cats = ["Milo", "Otis", "Garfield"];

// Function to return the current cats array (for verification)
function getCats() {
    return cats;
}

// Function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function to destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function to destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat to the cats array and return a new array
function appendCat(name) {
    return [...cats, name];
}

// Function to prepend a cat to the cats array and return a new array
function prependCat(name) {
    return [name, ...cats];
}

// Function to remove the last cat and return a new array
function removeLastCat() {
    return cats.slice(0, -1);
}

// Function to remove the first cat and return a new array
function removeFirstCat() {
    return cats.slice(1);
}

// Example usage
console.log(getCats()); // Outputs: ["Milo", "Otis", "Garfield"]

// Testing the functions
destructivelyAppendCat("Whiskers");
console.log(getCats()); // Outputs: ["Milo", "Otis", "Garfield", "Whiskers"]

destructivelyPrependCat("Felix");
console.log(getCats()); // Outputs: ["Felix", "Milo", "Otis", "Garfield", "Whiskers"]

destructivelyRemoveLastCat();
console.log(getCats()); // Outputs: ["Felix", "Milo", "Otis", "Garfield"]

destructivelyRemoveFirstCat();
console.log(getCats()); // Outputs: ["Milo", "Otis", "Garfield"]

const newCatsArray = appendCat("Tom");
console.log(newCatsArray); // Outputs: ["Milo", "Otis", "Garfield", "Tom"]
console.log(getCats()); // Outputs: ["Milo", "Otis", "Garfield"]

const newPrependedArray = prependCat("Jerry");
console.log(newPrependedArray); // Outputs: ["Jerry", "Milo", "Otis", "Garfield"]
console.log(getCats()); // Outputs: ["Milo", "Otis", "Garfield"]

const lastCatRemoved = removeLastCat();
console.log(lastCatRemoved); // Outputs: ["Milo", "Otis"]
console.log(getCats()); // Outputs: ["Milo", "Otis", "Garfield"]

const firstCatRemoved = removeFirstCat();
console.log(firstCatRemoved); // Outputs: ["Otis", "Garfield"]
console.log(getCats()); // Outputs: ["Milo", "Otis", "Garfield"]
