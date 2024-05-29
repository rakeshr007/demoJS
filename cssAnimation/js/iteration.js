// iteration

// for ( let i = 0; i <= 12; i++ ) {
//     const element = i ;
//     if (element == 5) {
//         //console.log("5 is best number");
//     }
//     //console.log(element);

// }

// console.log(element);

for (let i = 1; i <= 10; i++) {
   
   //console.log(`outer loop ${i}`);

    for (let j = 1; j <= 10 ; j++) {
        //console.log(`iNNER loop ${j} and inner loop ${i}`);
       // console.log(i+ '*' +j + '=' + i*j);
    }
    
}

const myArray = ["flash","batman ", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
    //  console.log(`Detected 5`);
        continue
    }
  // console.log(`value of i is ${index}`);
    
}

//==========================================

// let index = 0
// while (index < 10) {
//     console.log(`value of index i9s ${index}`);
//     index = index + 2
// }

let myHeros = ["flash","batman ", "superman"]

let arr = 0
while (arr < myHeros.length) {
   // console.log(`value is ${myHeros[arr]}`);
    arr = arr + 1
}

let score = 11

do {
   // console.log(`Score is ${score}`);
    score++
} while (score <= 10 );

//===============for of loop========================

["","",""]
[{},{},{}]

const arrNum = [1,2,3,4,5,6]

for (const num of arrNum) {
    //console.log(num);
}

const greeting = "hello World!"

for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
}

//=============== Maps =============================

const map = new Map()

map.set('IN',"india")
map.set('USA',"united state of america")
map.set('Fr',"france")

map.set('IN','india') // it hold's unique values

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'Forza'
}

// for (const [key,value] of myObject) {
//     console.log(key ,':-',Object); ====> it will not work
// }

