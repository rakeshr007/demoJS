// if 

const isUserLoggedIn = true
const temperature = 41

// if(isUserLoggedIn){
//     console.log('excuted');
// }


// if(temperature === 40){
//     console.log('temperature less than 50');
// } else{
//     console.log('temperature more than 50');
// }


/**
 * < , > , <= , >= , == -- check  ,=== check datataype also , !=
 * 
 *  3 != 2  , !== check , -ve sign 
*/

const score = 200
if (score > 100) {
    const power = "fly"
   // console.log(`User Power : ${power}`);
}

// console.log(`User Power : ${power}`); // here power is not defined

//const balance = 1000
// if (balance > 500) console.log("test"), // implesit scope
// console.log("test2");

//================= nesting ====================

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance <750){
//     console.log("less than 750");
// }else {
//     console.log("mre than 999");
// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn  && debitCard && 2==2 ) {
    //console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    // console.log("Allow to buy courses");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//const month = 3
// const month = "march"

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("mar");
//         break;
//     case 4:
//         console.log("apr");
//         break;
//     case 5:
//         console.log("may");
//         break;
        

//     default:
//         console.log("Default value");
//         break;
// }

//============================ truthy values and falsy values ===========================

// const userEmail = "rakesh@gmail.com"
const userEmail = []

// if (userEmail) {
//     console.log("got user Email");
// }else{
//     console.log("Don't have user email");
// }

//================ falsy Value

// false , 0 , -0, BigInt 0n , "", null , undefined, NAN

//================ truthy Value

// "0" , 'false' , " ",[],{}, function(){} <== it is empty function it is also truthy value

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // we converted object to array and applied length property in array 
   // console.log("Object is empty");
}

//=============================   Nullish Coalescing Operator (??) : null undefined it's------->like a fallback 

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

//console.log(val1);


// =============================== Terniary Operator ================

// condition ? true : false

const iceteadPrice =100

//iceteadPrice >= 80 ? console.log("more than 80") : console.log("less than 80");



