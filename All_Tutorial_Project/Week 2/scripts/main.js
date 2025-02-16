const myImage = document.querySelector("img");

myImage.addEventListener("click",() => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "Image/logo.jpg") {
	myImage.setAttribute("src", "Image/basketball.jpeg");
	}
	else {
	myImage.setAttribute("src","Image/logo.jpg");
	}
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if(!myName) {
		setUserName();
		}
	else {
	localStorage.setItem("name",myName);
	myHeading.textContent = `Mozilla is cool, ${myName}`;
	}
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

/*
Week 2 Tutorial Starts Here
*/


//Section: What is Java Script

function createParagraph() {
	const para = document.createElement("p");
	para.textContent = "You clicked the button!";
	document.body.appendChild(para);
}

const buttons = document.querySelector("#example1");
buttons.addEventListener("click", createParagraph);

//Section: Storing the information you need--variables

const buttonA = document.querySelector("#example3");
const headingA = document.querySelector("#heading_a");

let count = 1;

buttonA.onclick = () => {
	buttonA.textContent = "Try again!";
	headingA.textContent = `${count} clicks so far`;
	count+=1;
}

//Section: Basic Math in javascript - numbers and operators
const x = 10;
const y = 20;

const z = x + y;
console.log(z)

//Section: Handling Text -- strings in JavaScript

const string = "The revolution will not be televised.";
console.log(string);

const part1 = "This is ";
const part2 = "an example!";
const joined = `${part1}${part2}`;
console.log(joined);

//section: Useful string methods

const browserType = "mozilla";
browserType.length;

if (browserType.includes("zilla")){
	console.log("Found zilla!");
} else {
	console.log("No zilla here!");
}

if (browserType.startsWith("zilla")){
	console.log("Found zilla!");
} else {
	console.log("No zilla here!");
}

if (browserType.endsWith("zilla")){
	console.log("Found zilla!");
} else {
	console.log("No zilla here!");
}

const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

const updated = browserType.replace("moz", "van");
console.log(updated);
console.log(browserType);

let quote = "To be or not to be";
quote = quote.replaceAll("be","code");
console.log(quote);

//Section : Arrays

const sequence = [1,2,3,4,5,6];
const random = ["Tree",134,[0,1,34]];
console.log(random.length);
console.log(sequence[2]);
sequence[2]=23;
console.log(sequence[2]);
console.log(random[2][2]);

random.push("apple");//push adds item to the end of array
console.log(random);

random.unshift('banana'); //unshift adds item to the start of array
console.log(random);

random.pop(); //remove the last item in array
console.log(random);

random.shift(); //remove the first item in array
console.log(random);

random.splice(0,1);
console.log(random);

const birds = ['parrot','Falcon','Owl'];

for (const bird of birds) { //accessing everything in an array
	console.log(bird);
}


//Section: Making decisions in you code -- Conditions

let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) { // &&(AND) ||(OR) can be used to add more expression, !(NOT) negates the expression
	childsAllowance = 10;
} else {
	childsAllowance = 5;
}
console.log(childsAllowance);



//Section: Looping Code

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) { //use map() and filter() to apply function to every item in array
  console.log(cat);
}

for (let i= 0;i<cats.length;i++){
	console.log(cats[i]);
}

const catss = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < catss.length) {
  if (i === catss.length - 1) {
    myFavoriteCats += `and ${catss[i]}.`;
  } else {
    myFavoriteCats += `${catss[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); 

//Section: Functions -- reusable blocks of code
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});


//Section: Function return values
function cubed(num) {
 return num*num*num
}
console.log(cubed(22));

//Section: Introduction to events 

const btn = document.querySelector("#cColor");

function random2(number){
	return Math.floor(Math.random()*(number+1));
}
btn.addEventListener("click",() => {
const rndCol= `rgb(${random2(225)} ${random2(225)} ${random2(225)})`;
document.body.style.backgroundColor = rndCol;
})
