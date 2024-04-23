let questionTwo = ("\n Question No.2\n");
console.log(questionTwo);
let _name: string = "Eric";
console.log(`"Hello ${_name}, would you like to learn some Python today?"`);

let questionThree = ("\n Question No.3\n");
console.log(questionThree);

let imran: string = "Salman";
console.log(imran.toLowerCase());
console.log(imran.toUpperCase());
console.log(imran.charAt(0).toUpperCase() + imran.slice(1).toLowerCase());


let questionFour = ("\n Question No.4 \n");
console.log(questionFour);
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

let questionFive = ("\n Question No.5\n ");
console.log(questionFive);

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);

let questionSix = ("\n Question No.6\n ");
console.log(questionSix);

let _name1: string = "\t\n Albert Einstein \t\n";

console.log(_name1);
console.log(_name1.trim());

let questionSeven = ("\n Question No.7\n ");
console.log(questionSeven);

// addition
console.log(5 + 3); 
// subtraction
console.log(11 - 3);
// multiplication
console.log(2 * 4); 
// division
console.log(32 / 4); 

let questionEight = ("\n Question No.8\n ");
console.log(questionEight);

// addition
console.log(5 + 3); 
// subtraction
console.log(11 - 3);
//  multiplication
console.log(2 * 4); 
// division
console.log(32 / 4); 

let questionNine = ("\n Question No.9\n ");
console.log(questionNine);

let favorite_number: Number = 7;

console.log(`My Favorite Number Is: ${favorite_number}.`); 
 
let questionTen = ("\n Question No.10\n ");
console.log(questionTen);

// Salman Ansari, 14-04-2024
// This program print to solve some math solution 

// addition
console.log(5 + 3); 
// subtraction
console.log(11 - 3);
//  multiplication
console.log(2 * 4); 
// division
console.log(32 / 4);

let questionEleven = ("\n Question No.11\n ");
console.log(questionEleven);

let name: string [] = ["Aman Rajput", "Ahsan Khan", "Faheem Ahmed", "Syed Asif Ali"];
for (let y = 0; y < name.length; y++){
console.log(name[y]);
}

let questionTwelve = ("\n Question No.12\n ");
console.log(questionTwelve);

let names: string [] = ["Aman Rajput", "Ahsan Khan", "Faheem Ahmed", "Syed Asif Ali"];
for (let name of names ){
console.log(`Welcome ${name} can i teach you some html`);
}

let questionThirteen = ("\n Question No.13\n ");
console.log(questionThirteen);

let transportation: string [] = ["Toyota Car", "HI Speed Motorcycle", "Electric Bike"];
transportation.forEach(transport => {
    console.log(`i would like to own a ${transport}.`);
});

let questionFourteen = ("\n Question No.14\n ");
console.log(questionFourteen);

let guestsList: string [] = ["Jameel", "Raza", "Taha"];
guestsList.forEach(guest => {
    console.log(`Dear ${guest} can you join me for Dinner.`);
});

let questionFifteen = ("\n Question No.15\n ");
console.log(questionFifteen);

let guestsList1: string [] = ["Jameel", "Raza", "Taha"];
let unableToAttend = "Taha";
console.log(`${unableToAttend} can't make it to dinner`);
let newGuest = "Sajid";
guestsList1[guestsList1.indexOf(unableToAttend)] = newGuest;
guestsList1.forEach(guest => {
    console.log(`Dear ${guest}, can you join me for Dinner.`);
});

let questionSixteen = ("\n Question No.16\n ");
console.log(questionSixteen);

let guestsList2: string [] = ["Jameel", "Raza", "Taha"];
console.log("Great News! I found a bigger dinner table!");
// Adding More Guest
guestsList2.unshift("Kashif");
guestsList2.splice(guestsList2.length / 2, 0, "Haider");
guestsList2.push("farhan");
guestsList2.forEach(guest => {
    console.log(`Dear ${guest}, can you join me for Dinner.`); 
});


let questionSeventeen = ("\n Question No.17\n ");
console.log(questionSeventeen);

let guestsList3: string [] = ["Jameel", "Raza", "Taha"];
console.log("Unfortunately, I can only invite two people for dinner.");
guestsList3.unshift("Kashif");
guestsList3.splice(guestsList3.length / 2, 0, "Haider");
guestsList3.push("farhan");
//  inform that only two guests can be invited for dinner 
while (guestsList3.length  > 2) {
    let removedGuest = guestsList3.pop();
    console.log(`sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guestsList3.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to Dinner.`); 
});
guestsList3.splice(0, guestsList3.length);
console.log("Empty List", guestsList);

let questionEighteen = ("\n Question No.18\n ");
console.log(questionEighteen);

let countriesList: string [] = ["Pakistan", "China", "England", "Dubai"];
console.log("Original", countriesList);
console.log("Alphabetical",[...countriesList].sort());
console.log("Still in Original Order", countriesList);
console.log("Reverse Order",[...countriesList].reverse());
console.log("Still in Original Order", countriesList);
console.log("Reverse Original", countriesList.reverse());
console.log("Back to Original", countriesList.reverse());
console.log("Sort in Alphabetical Order", countriesList.sort());
console.log("Reverse Original Again", countriesList.reverse());

let questionNineteen = ("\n Question No.19\n ");
console.log(questionNineteen);

let guestsList4: string [] = ["Jameel", "Raza", "Taha"];
    console.log(`I am Inviting Total ${guestsList4.length} People to Dinner.`);

    let questionTwenty = ("\n Question No.20\n ");
    console.log(questionTwenty);

let languages: string [] = ["Urdu", "Sindhi", "Punjabi", "Balochi", "Pashto"];
console.log("This Languages Use In Pakistan:",);
languages.forEach(language => console.log(language));

let questionTwentyOne = ("\n Question No.21\n ");
console.log(questionTwentyOne);

let medicalCollege: {name: string; program: string; vacantSeat : number;} =
{
    name: "Muhammad Medical College",
    program: "MBBS",
    vacantSeat: 100,
};
console.log(`Name of Medical College: ${medicalCollege.name}
Program Name: ${medicalCollege.program}
Total Number of Seats: ${medicalCollege.vacantSeat}`);


let questionTwentyTwo = ("\n Question No.22\n");
console.log(questionTwentyTwo);

let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
console.log(friends[2]); // Correcting the error by accessing a valid index.

let questionTwentyThree = ("\n Question No.23\n");
console.log(questionTwentyThree);

let number1 = 10;
let number = 5;

console.log("Fist Test:");
console.log(number1 == 10); // True

console.log("\n Second Test:");
console.log(number == 5); // True

console.log("\n Third Test:");
console.log(number != 7); // True

console.log("\n Fourth Test:");
console.log(number1 > 4); // True

console.log("\n Fifth Test:");
console.log(number < 8); // True

console.log("\n Sixth Test:");
console.log(number1 == 6); // False

console.log("\n Seventh Test:");
console.log(number == 2); // False

console.log("\n Eight Test:");
console.log(number != 5); // False

console.log("\n Ninth Test:");
console.log(number > 8); // False

console.log("\n Tenth Test:");
console.log(number < 4); // False

let questionTwentyFour = ("\n Question No.24\n");
console.log(questionTwentyFour);

let apple = "apple";
let ten = 10;
let twenty = 15;
let fruits = ["apple", "banana", "cherry"];

// Equality with strings
console.log("\n Testing equality with strings:");
console.log(apple == "apple"); // True
console.log(apple != "apple"); // False

// Using the lower case function
console.log("\n Testing with lower case:");
console.log(apple.toLowerCase() == "apple"); // True
console.log(apple.toLowerCase() != "apple"); // False

// Numerical tests
console.log("\n Numerical tests:");
console.log(ten > 5); // True
console.log(twenty < 1); // False

// Tests using "and" and "or" operators
console.log("\n Tests with 'and' and 'or':");
console.log(ten != 10 && ten > 11); // False
console.log(twenty > 50 || twenty == 15); // True

// Test whether an item is in a array

console.log("\n Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("\n Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True


let questionTwentyFive = ("\n Question No.25\n");
console.log(questionTwentyFive);

// Version that passes:
let alien_colorOne = "green";
if (alien_colorOne == "green") {
    console.log("You just earned 5 points!");
}
// Version that fails (no output):
alien_colorOne = "red";
if (alien_colorOne == "green"){
   console.log(" No output because the condition is false")
}

let questionTwentySix = ("\n Question No.26\n");
console.log(questionTwentySix)

let alien_colorTwo = "green";
// Version that runs the if block:
alien_colorTwo = "green";
if (alien_colorTwo == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}
// Version that runs the else block:
alien_colorTwo = "yellow";
if (alien_colorTwo == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}


let questionTwentySeven = ("\n Question No.27\n");
console.log(questionTwentySeven);

let alien_color = "green";

// Green alien version:
if (alien_color === "green") {
    console.log("You earned 5 points.");
} else if (alien_color === "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color === "red") {
    console.log("You earned 15 points.");
}
// Yellow alien version:
let alien_color2 = "yellow";

if (alien_color2 === "green") {
    console.log("You earned 5 points.");
} else if (alien_color2 === "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color2 === "red") {
    console.log("You earned 15 points.");
}
// Red alien version:
let alien_color3 = "red";

if (alien_color3 === "green") {
    console.log("You earned 5 points.");
} else if (alien_color3 === "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color3 === "red") {
    console.log("You earned 15 points.");
}

let questionTwentyEight = ("\n Question No.28\n");
console.log(questionTwentyEight);

let age: number = 68;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age< 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


let questionTwentyNine = ("\n Question No.29\n");
console.log(questionTwentyNine);

let favorite_fruits: string[] = ["apples", "mango", "bananas", "orange", "cherries"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You Really like Apples!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You Really like Orange!");
}
if (favorite_fruits.includes("cherries")) {
    console.log("You Really like Cherries!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You Really like Mango!");
}


let questionThirty = ("\n Question No.30\n");
console.log(questionThirty);

let userNames: string[] = ["Admin", "Ali", "Salman", "Khan", "Mahad"];

userNames.forEach(userName => {
    if (userName === "admin") {
        console.log(`Hello ${userName}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
});

let questionThirtyOne = ("\n Question No.31\n");
console.log(questionThirtyOne);


let userNames1: string[] = ["Admin", "Ali", "Salman", "Khan", "Mahad"]
userNames1 = []

if (userNames1.length === 0) {
    console.log("We need to find some users!");
} else {
    userNames1.forEach(userName1 => {
        if (userName1 === "admin") {
            console.log(`Hello ${userName1}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${userName1}, thank you for logging in again.`);
        }
    })
    
}


let questionThirtyTwo = ("\n Question No.32\n");
console.log(questionThirtyTwo);

let current_users: string[] = ["Haider", "Amin", "Kashif", "Kamran", "Zubair"];
let new_users: string[] = ["Osama", "Amin", "Zubair", "Taha", "Raza"];

new_users.forEach(newUser => {
    let our_condition = current_users.some(currentUser => currentUser.charAt(0).toUpperCase() + currentUser.slice(1).toLowerCase() === newUser.charAt(0).toUpperCase() + newUser.slice(1).toLowerCase())
    if (our_condition) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});


let questionThirtyThree = ("\n Question No.33\n");
console.log(questionThirtyThree);

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let number of numbers) {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
};

let questionThirtyFour = ("\n Question No.34\n");
console.log(questionThirtyFour);

let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

let questionThirtyFive = ("\n Question No.35\n");
console.log(questionThirtyFive);

let petAnimals: string[] = ["dog", "cat", "rabbit"];

petAnimals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");


let questionThirtySix = ("\n Question No.36\n");
console.log(questionThirtySix);

function make_shirt(size: string, message: string) {
    console.log(`You Selected ${size} size t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");


let questionThirtySeven = ("\n Question No.37\n");
console.log(questionThirtySeven);

function make_shirt2(size2: string = "large", message2: string = "I love TypeScript") {
    console.log(`Making a ${size2} Size t-shirt with the message "${message2}" printed on Shirt.`);
}

make_shirt2(); // Default large and message
make_shirt2("medium"); // Default message, medium size
make_shirt2("small", "I Love Mirpurkhas"); // Custom message, small size

let questionThirtyEight = ("\n Question No.38\n");
console.log(questionThirtyEight);

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
//  calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Baku", "Azerbaijan");


let questionThirtyNine = ("\n Question No.39\n");
console.log(questionThirtyNine);

function city_country(city: string, country: string): string {
    return `${city} = ${country}`;
}

console.log(city_country("Lahore" , "Pakistan"));
console.log(city_country("Tokyo" , "Japan"));
console.log(city_country("Paris" , "France"));


let questionForty = ("\n Question No.40\n");
console.log(questionForty);

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title, tracks };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Martin", "The First Album")
let album2 = make_album("Joseph", "The Second Album");
let album3 = make_album("Khan", "The Third Album", 11);
console.log(album1);
console.log(album2);
console.log(album3);

let questionFortyOne = ("\n Question No.41\n");
console.log(questionFortyOne);

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let magicians_name: string[] = ["Alice", "David", "Chris"];
show_magicians(magicians_name);


let questionFortyTwo = ("\n Question No.42\n");
console.log(questionFortyTwo);


function show_magicians2(magiciansTwo: string[]) {
    magiciansTwo.forEach(magicianTwo => {
        console.log(magicianTwo);
    });
}
function make_great(magiciansTwo: string[]) {
   return magiciansTwo.map(magiciansTwo => 
       `The Great ${magiciansTwo}`);
    }

let magicians2: string[] = ["Alice", "David", "Chris"];

let greatMagiciansName = make_great(magicians2); // Modifies the original array
show_magicians2(greatMagiciansName); // Shows modified names


let questionFortyThree = ("\n Question No.43\n");
console.log(questionFortyThree);


function show_magicians3(magiciansTwo: string[]) {
    magiciansTwo.forEach(magicianTwo => {
        console.log(magicianTwo);
    });
}
function make_great2(magiciansThree: string[]) {
    return magiciansThree.map(magiciansThree => 
        `The Great ${magiciansThree}`);
     }
let magicians3: string[] = ["Alice", "David", "Chris"];

let greatMagicians = make_great2(magicians3.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians3(magicians3); // Shows original names
console.log("\n Great magicians:");
show_magicians3(greatMagicians); // Shows modified names.


let questionFortyFour = ("\n Question No.44\n");
console.log(questionFortyFour);

function make_sandwich(...items: string[]) {
        console.log(`\n Making a sandwich with the following item as under: \n`);
        items.forEach(sandwich => console.log(sandwich));
        console.log("Now Enjoy");
}

make_sandwich("Ham", "Cheese");
make_sandwich("Turkey", "Lettuce", "Tomato", "Butter");
make_sandwich("Avocado", "Sprouts", "Mustard", "Egg", "mayo");

let questionFortyFive = ("\n Question No.45\n");
console.log(questionFortyFive);

function make_car(manufacturer: string, model: string, ...options: { [key : string ]: any }[]): object {
    const car = {
        manufacturer,
        model,
        ...Object.assign({}, ...options)
    }
    return car;
}
let carInfo = make_car("Toyota", "Corolla", {color:'red'}, {year:[2020]})
let carInfo2 = make_car("Ford", "Fiesta", {color : "blue"}, {sunroof : "true"});

console.log(carInfo);
console.log(carInfo2);