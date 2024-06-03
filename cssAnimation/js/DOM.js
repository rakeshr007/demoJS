// =============== dom ======================

// document.getElementById('title').innerHTML = "change the Dom"

const myTitle = document.getElementById('title')

myTitle.innerHTML = "change the name"
myTitle.style.color = "orange"

myTitle.style.fontSize = "40px"


// document object model
// document.querySelector('input[type="password"]')
// <input type=​"password" name =​"id">​

//=====================================

/**
 * const myul = document.querySelector('ul')
 * myul.querySelector('li')
<li>​…​</li>​

 turnGreen.style.backgroundColor = "green"
    turnGreen.style.innerText = "green"

 */

    const parent = document.querySelector('.parent')
    // console.log(parent);
    // console.log(parent.children);// // you get html collection
    // console.log(parent.children[1].innerHTML);

    // for (let i = 0; i < parent.children.length; i++) {
    //    console.log(parent.children[i].innerHTML);
    //     ;
        
    // }

    parent.children[1].style.color = 'orange'
    parent.children[0].style.backgroundColor = "green"


    // console.log(parent.firstElementChild);//<div class="day">Monday</div>

    const dayOne = document.querySelector('.day')
    // console.log(dayOne);
    // console.log(dayOne.parentElement);
    // console.log(dayOne.nextElementSibling);

    // console.log("NODES : " , parent.childNodes);
//============================================================
    // const div = document.createElement('div')
    // console.log(div);

    // div.className = "main"
    // div.id = Math.round(Math.random() *10 + 1)

    // div.setAttribute("title","generated title")
    // div.style.backgroundColor = "green"
    // div.style.padding = "12px"
    // div.innerText = "Hey Bagwaaan mera code!"

    // const addText = document.createTextNode("Hey code!")
    // div.appendChild(addText)

    // document.body.appendChild(div)

//=====================================================

function addLanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`

    document.querySelector('.language').appendChild(li)
}

addLanguage("python")
addLanguage("C#")
addLanguage("Java")
addLanguage("Ruby")
addLanguage("newlan")






//------------------------------------------------------

function addOptiLanguage(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}

addOptiLanguage('Springboot')
addOptiLanguage('UnReal_Engine')
addOptiLanguage('Procedural')


//====================== Edit Element ===============

const secondLang = document.querySelector('li:nth-child(3)')
//secondLang.innerHTML = "MongoDB"
const newli = document.createElement('li')
newli.textContent = "MongoDB_Atlas"
secondLang.replaceWith(newli)

//====================== edit Element ===============

// const firstLangs = document.querySelector('li:first-child')
// firstLangs.outerHTML = '<li>TypeScript</li>'

//====================== remove Element =============

// const lastLang = document.querySelector('li:last-child')
// lastLang.remove()

//======================= add cars ==================


// function addLanguage(langName) {
//     const li = document.createElement('li')
//     li.innerHTML = `${langName}`

//     document.querySelector('.language').appendChild(li)
// }


function addCars(Newcars) {
    const newCar = document.createElement('a');
    newCar.innerHTML = `${Newcars}`;
    document.querySelector('.cars').appendChild(newCar);
}

addCars('mahindra');

function newComp(comp) {
    const newComputer = document.createElement('li')
    newComputer.innerHTML = `${comp}`;
    document.querySelector('.computer').appendChild(newComputer)
}

newComp("fortnight")
newComp("navdia")

//=============== optimized Way ===========================

function addcomputer (comp) {
    const newComp = document.createElement('li')
    newComp.appendChild(document.createTextNode(comp))
    document.querySelector('.computer').appendChild(newComp)
}

addcomputer("Redon")
// addcomputer("pentagon")


function addMoviesName(movie) {
    const newMovies = document.createElement('li')
    newMovies.appendChild(document.createTextNode(movie))
    document.querySelector('.Movies').appendChild(newMovies)
}

addMoviesName("DC")
addMoviesName("HarryPotter")
addMoviesName("superman")
addMoviesName("batman")
//==============Edit =1====================

// const secondLang = document.querySelector('li:nth-child(3)')
// secondLang.innerHTML = "MongoDB"
// const newli = document.createElement('li')
// newli.textContent = "MongoDB_Atlas"
// secondLang.replaceWith(newli)

const editName = document.querySelector('.Movies li:nth-child(2)')
const newLine = document.createElement('li')
newLine.textContent = "AwT"
editName.replaceWith(newLine)

function EditMovies(position , movies) {
    const editMovies = document.querySelector(`.Movies li:nth-child(${position})`)
    const newLine  = document.createElement('li')
    newLine.textContent = movies ;
    editMovies.replaceWith(newLine);

}

EditMovies(3 ,"newMovie")

// const lastMovie = document.querySelector('.Movies li:nth-child(1)')
// lastMovie.remove()

function deleteMovies(position) {
        const lastMovie = document.querySelector(`.Movies li:nth-child(${position})`)
        lastMovie.remove()
}

deleteMovies(1) 
