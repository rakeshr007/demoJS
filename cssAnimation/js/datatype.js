// premetive and non-premetive

//=========premetive dataype==========

// call by value (the copy of the value is given ) : String, Boolean , null , Number , Symbol , undefined , BigInt

const score = 100

const scoreValue = 100.22
const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 12545545455455215215n // automatically bigInt

const heros = ["ironman", "superman","batman"]
let myObj = {
    name : "ramesh",
    age : 22,
}

// const myFunction = function(){
//     console.log("heros");
// }

// console.log(typeof myFunction ); // return object funcation
// console.log(heros);

// refrence type (NOn premetive datatype) : array , objects , functions 


//====================== meomories =======================

//stark( Primitive),heap(non-primitive)


let myName = "Ronaldo"

let newName = myName
newName = "Messi"

// console.log(myName);
// console.log(newName); //copy beji jati hai

let userOne = {
    email : "use4r@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "ronaldo@gmail.com" // nonprimitive me refernce jata hai orignal value ki

// console.log(userOne.email);
// console.log(userTwo.email);


// dataTypes 

const name = "ronaldo"
const repoCount = 889
// console.log(name + repoCount+ "Values");

//string interpolation indirect you make placeholders

// console.log(`Hello my name is  ${name} and my goals are
// ${repoCount}`);

const gameName = new String('Leomessi')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // you get object but is not empty

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(-8,4)
// console.log(newString);//mess 0-3 are printed

const anotherString = gameName.slice(-6,4)

const newStringOne = " rohit "
// console.log(newStringOne);
// console.log(newStringOne.trim());// remove the empty space

const url = "https://hitesh.com/hitesh%20chaudhary"

// console.log(url.replace('%20','-'));

// console.log(url.includes('hitesh')) // output true or false

const newGeneration = new String ("hitesh-ramesh-com")

// console.log(newGeneration.split('-'));

const paragraph = " I think you have nice house and house is very costly"

// console.log(paragraph.replaceAll('house','boat'));
// console.log(paragraph);



//================== numbers & maths ========================


const newScore = 400
// console.log(newScore);

const balance = new Number(125.6545)
// console.log(balance); // it case its specification [Number: 100] 

// console.log(balance.toString().length);
// console.log(balance.toFixed(3)); //precision values

// console.log(balance.toPrecision(3));

const  hundereds = 1000000

// console.log(hundereds.toLocaleString('en-IN'));

//======================= maths ===============================

// console.log(Math); // its an object
// console.log(Math.abs(-4));//absolute value only -ve vale become +ve values
// console.log(Math.round(4.53));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.random()); // value come btw 0-1
// console.log((Math.random()*10) + 1);

// const min = 10 
// const max = 20

// console.log(Math.floor(Math.random() * (max-min + 1) + min )) // random aap ko 0-1 ke beach me value deta hai aur 1 ko  
                                                              // add kiya taki  0 ko avoid kar sakte hai

// console.log(Math.random());   

//================================== Date =============================

// let myDate = new Date() // date is an object 
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024 , 0 , 25) 
// let myCreatedDate = new Date(2024 , 0 , 25 , 5 , 3,45 ,12) 

// let myCreatedDate = new Date("01-02-2024") 
let myCreatedDate = new Date("2024-01-14") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // compare dates
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.toDateString());

// newDate.toLocaleString('default'.{
//     weekday:"long"
    
// })

//=========================array ======================

const myArray = [1,2,3,4,5,6] // java array are resizable
const myHeros=['ironman', 'Superman','batman']

constmyArr2 = new Array(1,2,3,4)

// console.log(myArray[1]);

// Array Methods

// myArray.push(8)
// myArray.push(10)
// myArray.pop()
// myArray.unshift(9) // add at start of array 
myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));//-1
// console.log(myArray.indexOf(3));// index : 1

// const newArray = myArray.join()

// console.log(myArray);

// slice , slpice

// console.log("A", myArray);

// const myn1 = myArray.slice(1,3) // return a section of an array     --------------------------- slice
// console.log(myn1);
// console.log("B",myArray);                                                               //--difference btw slice and splice 

// const myn2 = myArray.splice(1,3) // it removes the elements from the main array---------------- splice
// console.log(myn2);

// console.log("c",myArray);

const marvel_heros = ["thor","ironman","Spiderman"]
const dc_heros = ["superman","batman","fash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);//wrong way 

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros =[...marvel_heros, ...dc_heros] // ek ek lement spread ho gaye hai
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("hitesh")); // false
console.log(Array.from("hitesh")); // make an array
console.log(Array.from({name : "Hitesh"})); // give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

//====================== objects =============================