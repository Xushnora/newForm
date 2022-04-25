
let addButton = document.querySelector('.addButton');
// add input
let fullname = document.querySelector('.fullname');
let email = document.querySelector('.email');
let mobile = document.querySelector('.mobile');
let city = document.querySelector('.city');
let type = document.querySelector('#type');
let submitBtn = document.querySelector('.submit');
let resetBtn = document.querySelector('.reset');
let elForm = document.querySelector('#form');
let elEmploye = document.querySelector('.employe');

let cityValue = city.value;

// edit uchun
let editName = document.querySelector('.editName');
let editEmail = document.querySelector('.editEmail');
let editNumb = document.querySelector('.editNumb');
let editCity = document.querySelector('.editCity');
let editType = document.querySelector('.editType');

// remove modal btn 
let noBtn = document.querySelector('.noBtn');
let yesBtn = document.querySelector('.yesBtn');

let allUsers = []

elForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const newObj = {
        id: allUsers.at(-1)?.id ? allUsers.at(-1).id + 1 : 1,
        name: fullname.value,
        email: email.value,
        number: mobile.value,
        city: city.value,
        department: type.value,
    }

    allUsers.push(newObj)

    renderFunc(allUsers);
    
    // fullname.value = ""
    // email.value = ""
    // mobile.value = ""
    // city.value = ""
    // type.value = ""
});

resetBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    fullname.value = ""
    email.value = ""
    mobile.value = ""
    city.value = ""
    type.value = ""
});


let modalBodyEdit = document.querySelector('.modalBodyEdit');
let addNewList = document.querySelector('.add-new-list');
let modalRemoveBox = document.querySelector('.modalRemoveBox');

function renderFunc (allUsers) {
    addNewList.innerHTML = null

    allUsers.forEach((item, index) => {
        let box = document.createElement('div');
        box.classList = `newBox`
        box.innerHTML  = `
        <div class="employe-name all-items">
        <ul class="employe-list">
            <li class="employe-item">${item.name}</li>
        </ul>
        </div>
        <div class="email-adres all-items">
            <ul class="email-list">
            <li class="email-item">
                ${item.email}
            </li>
            </ul>
        </div>
        <div class="mobile-num all-items">
            <ul class="mobile-list">
            <li class="mobile-item">${item.number}</li>
            </ul>
        </div>
        <div class="department all-items">
            <ul class="department-list">
            <li class="department-item">
                ${item.department}
            </li>
            </ul>
        </div>
        <div class="actions all-items">
            <ul class="actions-list">
            <li class="actions-item">
                <button class="edit-btn" onclick = "getEdit(${item.id})"  data-bs-toggle="modal" data-bs-target="#exampleModal2">  
                    <i class='bx bx-edit-alt'></i>
                    
                </button>
                <button type = "button" class="close-btn" onclick = "getRemove(${item.id})">
                    <i class='bx bx-x' style='color:#fd0000'></i>
                </button>
            </li>
            </ul>
        </div> `

        addNewList.appendChild(box);
    })

    // let removeBtn = document.querySelectorAll('.close-btn');
    // removeFunc(removeBtn);
    // let editBtns = document.querySelectorAll('.edit-btn');
    // editFunc(editBtns);


    let nameItem = document.querySelectorAll('.employe-item');
    let emailItem = document.querySelectorAll('.email-item');
    let mobileItem = document.querySelectorAll('.mobile-item');
    let departmentItem = document.querySelectorAll('.department-item');
}


let submitTwo = document.querySelector('.submitTwo');
let elForm2 = document.querySelector('.form2');

function getEdit(id) {
    allUsers.forEach((user, i) => {
        if (user.id === id) {
            console.log(allUsers[i])
            editName.value = allUsers[i].name;
            editEmail.value = allUsers[i].email;
            editNumb.value = allUsers[i].number;
            editType.value =  allUsers[i].department;  
            changeUser(i);
        }
    })
}

function changeUser(index) {
    let idx = 1;

    elForm2.addEventListener('submit', (e) =>{
        e.preventDefault();

        if(idx === 1) {
            allUsers[index].name = editName.value;
            allUsers[index].email = editEmail.value;
            allUsers[index].number = editNumb.value;
            allUsers[index].department =  editType.value;

            renderFunc(allUsers)

            idx++;
        }

    
    })
}


// function getRemove(id) {
//     console.log(id.target);
//     allUsers.forEach((user, index) =>{
//         if(user.id == id) {
//             // console.log(allUsers[index]);
//         //    allUsers[user].addEventListener('click', (e) =>{
//         //         e.preventDefault();
//         //         let targetBtn = e.currentTarget;
//         //         modalRemoveBox.classList.add('testRemove');

//         //         yesBtn.addEventListener('click', (el) => {
//         //             if(el.target.textContent == 'Yes') {
//         //                 allUsers[index].remove()
//         //                 modalRemoveBox.classList.remove('testRemove');
//         //             }
//         //         });

//         //         noBtn.addEventListener('click', (el) => {
//         //             if(el.target.textContent == 'No') {
//         //                 modalRemoveBox.classList.remove('testRemove');
//         //             }
//         //         });

//         //    })
//         }
//     })
// }

function getRemove(elId) {
    let a = [];
  
    allUsers.forEach((element) => {
      if (element.id === elId) {
        modalRemoveBox.classList.add('testRemove');
      } else {
        yesBtn.addEventListener('click', (el) => {
            if(el.target.textContent == 'Yes') {
                modalRemoveBox.classList.remove('testRemove');
            }
        });
        noBtn.addEventListener('click', (el) => {
            if(el.target.textContent == 'No') {
                modalRemoveBox.classList.remove('testRemove');
            }
            // a.push(element);
        });
        a.push(element);
      }
    });
    allUsers = a;
    renderFunc(allUsers);
  }


// function removeFunc(removeBtn) {
//     removeBtn.forEach(item => {
//         item.addEventListener('click', (e) => {
//             e.preventDefault();
//             let targetBtn = e.currentTarget;
//             modalRemoveBox.classList.add('testRemove');

//             yesBtn.addEventListener('click', (el) => {
//                 if(el.target.textContent == 'Yes') {
//                     targetBtn.parentNode.parentNode.parentNode.parentNode.remove()
//                     modalRemoveBox.classList.remove('testRemove');
//                 }
//             });
//             noBtn.addEventListener('click', (el) => {
//                 if(el.target.textContent == 'No') {
//                     modalRemoveBox.classList.remove('testRemove');
//                 }
//             });

//         })
//     })
// }
