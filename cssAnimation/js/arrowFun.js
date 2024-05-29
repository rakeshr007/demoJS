const user = {
    username: "Steve",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website `); // current conext
        console.log(this);
    }
}

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

const addTwo = (num1 , num2) => ({username : " neymar"})
// console.log(addTwo(3 , 4));

// const myArray = [2,3,5,4,8,9]

// myArray.forEach()