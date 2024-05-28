// Singleton -

// object literals 
// Object.create // using constructore ke throu

const mySym = Symbol("key1")

const jsUser = {
    name : "ramesh",
    "full name":"ramesh sharma",
    [mySym] : "myKey1", // to use as a symbol in key form
    age: 18,
    loaction : " mumbai",
    email: "ramesh@gmail.com",
    usLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "thankur@outlook.coom"
// Object.freeze(jsUser)
jsUser.email = " hacker@gmail.com"

// console.log(jsUser);

//output ========>>
// {
//     name: 'ramesh',
//     'full name': 'ramesh sharma',
//     age: 18,
//     loaction: ' mumbai',
//     email: 'thankur@outlook.coom',
//     usLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'myKey1'
//   }
  
jsUser.greeting = function(){
    console.log("hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`hello js User,${this.name}`);
}


// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//=====================================part 2 ===============

// const meta = new Object() // singleton oject
const metaUser = {} // non-singleton oject

metaUser.id = "123abc"
metaUser.name = " Sam"
metaUser.isLoggedIn = false

// console.log(metaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname : {
            firstname : "ram",
            lastname : "sharma"
        }
    }
}

regularUser.newGen = function(){
    console.log( `hello my name is,${this.fullname.userfullname.firstname}`);
}

regularUser.newGen()

// console.log(regularUser.newGen()); // it will show hitesh with undefined

//==================================================================================

//console.log(regularUser.fullname?.userfullname.firstname);

const objectOne = { 1 : "a", 2:"b"}
const objectTwo = { 3 : "a", 4:"b"}
const objectThree = { 5 : "a", 6:"b"}

// const obj3 = Object.assign({}, objectOne,objectTwo,objectThree)

const obj3 ={ ...objectOne,...objectTwo,...objectThree}

// console.log(obj3);

const users = [
    {
        id : 1,
        wmail : "h@gmail.com",
    },
    {
        id : 1,
        wmail : "h@gmail.com",
    },
    {
        id : 1,
        wmail : "h@gmail.com",
    },
    {
        id : 1,
        wmail : "h@gmail.com",
    },
    {
        id : 1,
        wmail : "h@gmail.com",
    },
] 

users[1].email

// console.log(metaUser);

// console.log(Object.keys(metaUser));
// console.log(Object.values(metaUser));
// console.log(Object.entries(metaUser));

// console.log(metaUser.hasOwnProperty('isLoggedIn'))//true


//========================destructuring of objects==================

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const{courseInstructor: instructor} = course

// console.log(courseInstructor);


console.log(instructor);
//============= react ============

// const navbar  = ({company}) => {

// }

// navbar(company = "hitesh")
//================================

// {
//     "name" : "hitesh",
//     "coursenamen" : "js in hindi",
//     "Price" : "free"
// }

const userDetailOne = {
    name : "shami",
    age : 32,
    wicket : 356,
    town : "rajasthan",
}

const userDetailTwo = {
    name : "Rohit",
    age : 30,
    run : 168879,
    town : "mumbai",
}

const detailPage = {...userDetailOne,...userDetailTwo}

console.log(detailPage);

console.log(Object.values(detailPage));
console.log(Object.keys(detailPage));

const { wicket : stumpout} = userDetailOne

console.log(stumpout);

userDetailOne.newdata = function() {
   console.log( `shami took a wicket which make him to a total of ${this.wicket}`);
}

userDetailOne.newdata()

console.log([userDetailOne].concat([userDetailTwo]));

