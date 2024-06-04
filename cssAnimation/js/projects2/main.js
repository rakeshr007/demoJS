const form = document.querySelector('form')
// this usecase will give you empty space
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e) {
    e.preventDefault()

    const resultdiv = document.getElementById('results')
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a value height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a value weight ${weight}`
    }else {
        const BMI = (weight / ((height * height)/10000).toFixed(2))
        // show the result 
        results.innerHTML = `<span>${BMI}</span>`
    }

    // resultdiv.style.display = 'inline'
    resultdiv.classList.remove('hide')
    resultdiv.classList.add('show')

})

