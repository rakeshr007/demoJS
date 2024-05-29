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

// for (const key in map) {
//    console.log(key);
// }

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }



// for (const [key,value] of myObject) {
//     console.log(key ,':-',Object); // ====> it will not work
// }

//============================ for in loop ====================

const myObjectOne = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "Swift by apple"

}

for (const key in myObjectOne) {
  // console.log(myObjectOne[key]);
  //console.log(`${key} shortcut is for ${myObjectOne[key]}`);
}

const programmming = ["js","java",'c++','Spring','rb']

for (const key in programmming) {
  //console.log(key);
  //console.log(programmming[key]);
}
//.. output
// 0
// 1
// 2
// 3
// 4

//==================for each loop ===================

//const coding = ["js","java",'c++','Spring','rb','react']

// coding.forEach( function (val) { // call back fundction don't have name
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

//--------------------------------------------

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
//--------------------------------------------

// coding.forEach( (item , index , arr)=>{
//     console.log(item,index,arr);
// })

// const myCoding = [
//     {
//         languageName : 'javascript',
//         languageFileName : 'js'
//     },
//     {
//         languageName : 'java',
//         languageFileName : 'java'
//     },
//     {
//         languageName : 'python',
//         languageFileName : 'py'
//     },
// ]

// myCoding.forEach( (item) => {
//         console.log(item.languageName);
// })

//=================================

// const coding = ["js","java",'c++','Spring','rb','react']

// const values = coding.forEach((item) => {  // it dont return values
//     console.log(item);
//     return item
// });

// console.log(values);

//----------------------------------------------
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) =>{
//     return num > 4 
// }) // it retuen values explicitely if currly bracket are given
//console.log(newNums);


const newNums = []

myNums.forEach( (num) =>{
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);

const books = [
        {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925,
        "genre": "Fiction",
        "isbn": "9780743273565"
        },
        {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960,
        "genre": "Fiction",
        "isbn": "9780060935467"
        },
        {
        "title": "1984",
        "author": "George Orwell",
        "year": 1949,
        "genre": "Dystopian",
        "isbn": "9780451524935"
        },
        {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "year": 1813,
        "genre": "Romance",
        "isbn": "9780141199078"
        },
        {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "year": 1951,
        "genre": "Fiction",
        "isbn": "9780316769488"
        },
        {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "year": 1937,
        "genre": "Fantasy",
        "isbn": "9780547928227"
        },
        {
        "title": "Moby Dick",
        "author": "Herman Melville",
        "year": 1851,
        "genre": "Adventure",
        "isbn": "9781503280786"
        },
        {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "year": 1869,
        "genre": "Historical Fiction",
        "isbn": "9780199232765"
        },
        {
        "title": "The Odyssey",
        "author": "Homer",
        "year": -800,
        "genre": "Epic",
        "isbn": "9780140268867"
        },
        {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "year": 1866,
        "genre": "Philosophical Fiction",
        "isbn": "9780140449136"
        },
        {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925,
        "genre": "Fiction",
        "isbn": "9780743273565"
      },
      {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960,
        "genre": "Fiction",
        "isbn": "9780060935467"
      },
      {
        "title": "1984",
        "author": "George Orwell",
        "year": 1949,
        "genre": "Dystopian",
        "isbn": "9780451524935"
      },
      {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "year": 1813,
        "genre": "Romance",
        "isbn": "9780141199078"
      },
      {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "year": 1951,
        "genre": "Fiction",
        "isbn": "9780316769488"
      },
      {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "year": 1937,
        "genre": "Fantasy",
        "isbn": "9780547928227"
      },
      {
        "title": "Moby Dick",
        "author": "Herman Melville",
        "year": 1851,
        "genre": "Adventure",
        "isbn": "9781503280786"
      },
      {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "year": 1869,
        "genre": "Historical Fiction",
        "isbn": "9780199232765"
      },
      {
        "title": "The Odyssey",
        "author": "Homer",
        "year": -800,
        "genre": "Epic",
        "isbn": "9780140268867"
      },
      {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "year": 1866,
        "genre": "Philosophical Fiction",
        "isbn": "9780140449136"
      },
      {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "year": 1932,
        "genre": "Dystopian",
        "isbn": "9780060850524"
      },
      {
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "year": 1847,
        "genre": "Romance",
        "isbn": "9780141441146"
      },
      {
        "title": "Wuthering Heights",
        "author": "Emily Brontë",
        "year": 1847,
        "genre": "Gothic Fiction",
        "isbn": "9780141439556"
      },
      {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "year": 1954,
        "genre": "Fantasy",
        "isbn": "9780261102385"
      },
      {
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "year": 1880,
        "genre": "Philosophical Fiction",
        "isbn": "9780374528379"
      },
      {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "year": 1890,
        "genre": "Philosophical Fiction",
        "isbn": "9780141439570"
      },
      {
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "year": 1862,
        "genre": "Historical Fiction",
        "isbn": "9780451419439"
      },
      {
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "year": 1877,
        "genre": "Romance",
        "isbn": "9780143035008"
      },
      {
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "year": 1953,
        "genre": "Dystopian",
        "isbn": "9781451673319"
      },
      {
        "title": "Madame Bovary",
        "author": "Gustave Flaubert",
        "year": 1856,
        "genre": "Fiction",
        "isbn": "9780140449129"
      }
  ];

  
  let userBooks = books.filter((bk)=>
    bk.genre === 'Romance'
  )

  userBooks = books.filter( (bk) => {
   return bk.year >= 1800 && bk.genre === "Romance"
}) 

  console.log(userBooks);

