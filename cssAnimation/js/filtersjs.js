const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers =myNums.map( (num) => num + 10)

//const newNumbers =myNums.map( (num) => { return num + 10})

// const newNumbers = myNums
//                     .map((num) => num * 10)
//                     .map((num) => num +1 )
//                     .filter( (num) => num >= 40)
// console.log(newNumbers);

//=================== reduce =======================================

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, curval) {
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNum.reduce( (acc, curval) => acc + curval,0)


//console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce( (acc ,item) => acc + item.price, 0)

console.log("price you have to pay : ",priceToPay);