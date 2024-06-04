const form = document.querySelector('form')
// this usecase will give you empty space
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
})

