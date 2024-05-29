// const user = {
//     username: "Steve",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username} , welcome to website `); // current conext
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // orignal username chnaged to sam

// console.log(this); // you get empty object

// function chai() {
//     let username = "messi"
//     //console.log(this.username); undefined
    
// }

// chai()

// const chai = function (params) {
//     let username = "messi"
//     console.log(this.username)
// }

// chai() // undefined

// ================== functions =================

// const chai = () => {
//     let username = "messi"
//     console.log(this)
// }

// chai()

//================ pure arrow function ========= 

//const addTwo = (num1 , num2) => { return num1 + num2 } if using parenthensis then use return key word

//const addTwo = (num1 , num2) => (num1 + num2)  // no need to write return keyword

// const addTwo = (num1 , num2) => ({username : " neymar"})
// console.log(addTwo(3 , 4));

// const myArray = [2,3,5,4,8,9]

// myArray.forEach()

//=================(IIfe) Immediately Invoke function Expressions ===============

(function chai() { //its is named IIfe
    console.log(`DB CONNECT`);
})();

( (name) => {
    console.log(`DB Connected TWO ${name}`);
} )('Ramos');

// ================Call Stacks ===============================

/**
 * javascript Context
 * Global EC (exection context)
 * 
 * it exectute under thread js is signel thereaded
 * Function EC / Functioal EC
 * Eval EC
 * 
 * it run in tWo fase ---------
 * 
 * ===> memory creation phase
 * ===> Exection phase
 * 
 * class Stack
 */

let val1 = 10 
let val2 = 5

function addNum(num1 , num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

//============== control flow =================

