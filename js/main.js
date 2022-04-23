
let addButton = document.querySelector('.addButton');


let fullname = document.querySelector('.fullname');
let email = document.querySelector('.email');
let mobile = document.querySelector('.mobile');
let city = document.querySelector('.city');
let type = document.querySelector('#type');
let submitBtn = document.querySelector('.submit');
let resetBtn = document.querySelector('.reset');
let elForm = document.querySelector('#form');
let elEmploye = document.querySelector('.employe');


elForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const newObj = 
        {
            name: fullname.value,
            email: email.value,
            number: mobile.value,
            city: city.value,
            department: type.value,
        }

    renderFunc(newObj);

    fullname.value = ""
    email.value = ""
    mobile.value = ""
    city.value = ""
    type.value = ""
});

resetBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    fullname.value = ""
    email.value = ""
    mobile.value = ""
    city.value = ""
    type.value = ""
})

let modalBodyEdit = document.querySelector('.modalBodyEdit');
let addNewList = document.querySelector('.add-new-list');

function renderFunc (newObj) {
    console.log(newObj);

    let box = document.createElement('div');
    box.classList = `newBox`
    box.innerHTML  = `
    <div class="employe-name all-items">
      <ul class="employe-list">
        <li class="employe-item">${newObj.name}</li>
      </ul>
    </div>
    <div class="email-adres all-items">
        <ul class="email-list">
        <li class="email-item">
            ${newObj.email}
        </li>
        </ul>
    </div>
    <div class="mobile-num all-items">
        <ul class="mobile-list">
        <li class="mobile-item">${newObj.number}</li>
        </ul>
    </div>
    <div class="department all-items">
        <ul class="department-list">
        <li class="department-item">
            ${newObj.department}
        </li>
        </ul>
    </div>
    <div class="actions all-items">
        <ul class="actions-list">
        <li class="actions-item">
            <button class="edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <i class='bx bx-edit-alt'></i>
            </button>
            <button type = "button" class="close-btn" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">
                <i class='bx bx-x' style='color:#fd0000'></i>
            </button>
        </li>
        </ul>
    </div> `

    addNewList.appendChild(box);

    let removeBtn = document.querySelectorAll('.close-btn');
    removeBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            // item.setAttribute("id", "staticBackdrop");
            e.preventDefault();
            console.log(item);

            confirm("Rostan ham o'chirmoqchimisiz"); 
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove()
        })
    })

    let editBtns = document.querySelectorAll('.edit-btn');

    // editBtns.forEach(item => {
    //     let editModal = document.createComment('div');
    //     editModal.classList = "formBox";
    //     editModal.innerHTML = `
      
    //     `
    //     modalBodyEdit.appendChild(editBtns);
    // })


}


