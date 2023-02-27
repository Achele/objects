/**
 * QUESTION ONE
 * Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
 * Handle of author
 * content,
 * An image link posted by the author of the post
 * Number of views,
 * Number of likes,
 */

function InstagramPost(
  authorsHandle,
  content,
  image,
  numberOfViews,
  numberOfLikes
) {
  this.authorsHandle = authorsHandle;
  this.content = content;
  this.image = image;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}

/**
 *  QUESTION TWO
 * Create 2 Instagram post objects from the constructor function you created above
 */
const instagramPost1 = new InstagramPost(
  "@amy",
  "Grace! Grace!! Grace!!! that is my story",
  "amyImg.jpg",
  2500,
  1500
);
const instagramPost2 = new InstagramPost(
  "@ryan",
  "I am like a tree planted by the river side",
  "ryanImg.jpg",
  2500,
  1500
);

// console.log(InstagramPost);
console.log(instagramPost1);
console.log(instagramPost2);

/** 
 *  QUESTION THREE
 * Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
 * ENG - 70
 * GOVT - 85
 * LIT - 82
 * CRK - 94
  a) Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
  b) Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
*/

// solution to part a
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

// Create an object representing Musa from the factory function
const musa = createPerson("Musa", 19, "Lekki, Lagos State");
// console.log(musa);

// part b solution
function JambScores(eng, govt, lit, crk) {
  return {
    ENG: eng,
    GOVT: govt,
    LIT: lit,
    CRK: crk,
  };
}

// Adding the object musaJamScore to the Musa object
const MusaJambScore = JambScores(70, 85, 82, 94);
musa.JambScores = MusaJambScore;
console.log(musa);

// QUESTION FOUR
// What are the different ways you can clone an object? Give examples for each of them.
let input = {
  firstName: "Ojoachele",
  lastName: "Onuh",
  age: 25,
};

//  (a) - Object.assign() method
let firstInput = Object.assign({}, input);
console.log(firstInput);

let secondInput = { ...input }; //(b) - Spread Syntax method
console.log(secondInput);

let thirdInput = JSON.parse(JSON.stringify(input)); //(c) - JSON.parse() method
console.log(thirdInput);

input.height = "5.3ft";
console.log(input);

// QUESTION FIVE
// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// ’Omoyele Sowore is the presidential candidate of AAC’

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

// enumeration method - For..in
for (const party in presidentialCandidates) {
  console.log(
    `${presidentialCandidates[party]} is the presidential candidate of ${party}`
  );
}

console.log("FOR OF METHOD");
// enumeration method - For..of
for (let [party, candidate] of Object.entries(presidentialCandidates)) {
  console.log(`${candidate} is the presidential candidate of ${party}`);
}
