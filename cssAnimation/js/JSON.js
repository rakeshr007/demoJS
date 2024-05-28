// Random user website , json formatting website 

//================= functions ==========================



function sayHello(){
    console.log("h");
    console.log("i");
    console.log("i");
    console.log("!");
}

// sayHello // reference
// sayHello() // exection ---> this will give me the result

// function addTwoNumbers(num1 , num2) { // parameters
//    console.log( num1 + num2);
// }

function addTwoNumbers(num1 , num2) { // parameters
    // let result = num1 + num2 
    // return result
    return num1 + num2
 }


const result = addTwoNumbers(3,null)

// console.log("result :", result); // undefined 

function loginUserMessage(username = "rajesh"){
    if(!username){
        console.log("please enter a username !");
        return
    }
    return `${username}  just logged in`
}

// console.log(loginUserMessage("ramesh")); 
// console.log(loginUserMessage());

// function calculateCartPrice(val1, val2, ...num1){ // restoperator and spread operator
//     return num1
// }


// console.log(calculateCartPrice(200,250,300,2000)); //[ 300, 2000 ]

const user ={
    username : " hitesh",
    age : 56,
    price : 100
}

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)
// handleObject({
//     username:"sam",
//     price:454
// })

//==================================================================

// const myNewArray = [100,200,300,500]

// function returnSecondValue(getArray) {
//     return getArray[2]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100,54,587,64,121,]));

//=====================Global And local  Scopes ====================




