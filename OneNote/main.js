const btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click',()=> addNote());


function addNote(text = ""){

    const note = document.createElement('div');
    note.classList.add("note-wrapper");
}