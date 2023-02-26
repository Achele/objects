// QUESTION ONE
// const instagramPost = new Object();
// const authorsHandle = "@ojoachele";
// const content = "I have entered my recieving season";
// const image = "";
// const numberOfViews = 10000;
// const numberOfLikes = 1500;

// QUESTION ONE

function instagramPost(
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

// QUESTION TWO

const instagramPost1 = new instagramPost(
  "@amy",
  "Grace! Grace!! Grace!!! that is my story",
  2500,
  1500
);
const instagramPost2 = new instagramPost(
  "@ryan",
  "I am like a tree planted by the river side",
  2500,
  1500
);

// console.log(instagramPost);
console.log(instagramPost1);
console.log(instagramPost2);

// QUESTION THREE
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

const musa = createPerson("Musa", 19, "Lekki, Lagos State");
// console.log(musa);

// question 3b
function JambScores(eng, govt, lit, crk) {
  return {
    ENG: eng,
    GOVT: govt,
    LIT: lit,
    CRK: crk,
  };
}
const MusaJambScore = JambScores(70, 85, 82, 94);
musa.JambScores = MusaJambScore;
console.log(musa);

// QUESTION FOUR
let firstInput = { firstName: "Ojoachele", lastName: "Onuh", age: 25 };

let secondInput = Object.assign({}, firstInput); //(a) - Object.assign() method

let thirdInput = { ...firstInput }; //(b) - Spread Syntax method

let fourthInput = JSON.parse(JSON.stringify(firstInput)); //(c) - JSON.parse() method

firstInput.height = "5.3ft";

console.log(firstInput);

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
