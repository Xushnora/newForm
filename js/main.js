
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
});


let modalBodyEdit = document.querySelector('.modalBodyEdit');
let addNewList = document.querySelector('.add-new-list');
let modalRemoveBox = document.querySelector('.modalRemoveBox');
let errorTextEmail = document.querySelector('.errorTextEmail');

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
}

// functions

let submitTwo = document.querySelector('.submitTwo');
let elForm2 = document.querySelector('.form2');

let searchInput = document.querySelector('#searchInput');

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

function getRemove(elId) {
    let a = [];
  
    allUsers.forEach((element) => {
      if (element.id === elId) {
        modalRemoveBox.classList.add('testRemove');
        yesBtn.addEventListener('click', (el) => {
            if(el.target.textContent == 'Yes') {
                modalRemoveBox.classList.remove('testRemove');
            }
        });
        noBtn.addEventListener('click', (el) => {
            if(el.target.textContent == 'No') {
                modalRemoveBox.classList.remove('testRemove');
            }
            a.push(element);
        });
      } else {
        a.push(element);
      }
    });
    allUsers = a;
    renderFunc(allUsers);
}

searchInput.addEventListener("keyup", () => {
    let searchText = searchInput.value.toLowerCase();

    let elNames = document.querySelectorAll('.employe-item');

    elNames.forEach((item) => {
        let elTextContent = item.textContent;
        if(!elTextContent.toLowerCase().includes(searchText)){
          item.parentNode.parentNode.parentNode.style.display = "none";
        } else{
          item.parentNode.parentNode.parentNode.style.display = "";
        }
    })
})

// validation tekshiruv

let erorTextName = document.querySelector('.erorTextName');

fullname.addEventListener("keyup", () => {
    let fullnameKey = fullname.value.trim().toLowerCase();
    erorTextName.innerHTML = "";
    try {
        if(fullnameKey.match(/[a-z]/) !=null && fullnameKey.match(/[!@#$%^&*]/)==null && fullnameKey!== "" && fullnameKey.match(/[0-9]/)==null) {
            fullname.classList.add('greenBr');
            fullname.classList.remove('redBr');
            
        } else {
            fullname.classList.remove('greenBr');
            fullname.classList.add('redBr');
            erorTextName.style.color = "red";
            throw "*Ismingizni kiriting ..."
        }
    } catch (e) {
        erorTextName.innerHTML = e;
    }
})  
// fullname.addEventListener('blur', () => {
//     if(fullname.value.trim() == ' ') {
//         erorTextName.innerHTML = "*Ismingizni kiriting ...";
//         fullname.style.borderColor = "red";
//     } else {
//         fullname.style.borderColor = "green";
//     }
// });

email.addEventListener("keyup", ()=> {
    errorTextEmail.innerHTML = "";
    let emailKey = email.value.trim();
    try {
        if(! emailKey.includes('@')) throw "*Email bo'lish sharti bajarilmadi..."
    } catch (err){
        errorTextEmail.innerHTML = err;
    }
    try {
        if(! emailKey.includes('.')) throw "*Email bo'lish sharti bajarilmadi..."
    } catch (err){
        errorTextEmail.innerHTML = err;
    }
    try {
        if(emailKey = "") throw "*Email kiriting..."
    } catch (err){
        errorTextEmail.innerHTML = err;
    }
})

email.addEventListener('blur', () => {
    if(email.value.trim() == '') {
        errorTextEmail.innerHTML = "*Email kiriting...";
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "green";
    }
});

let errorNumb = document.querySelector('.errorNumb');

mobile.addEventListener('keyup', () => {
    let mobileKey = mobile.value.trim()
    errorNumb.innerHTML = "";
    try {
        if(mobileKey.includes("+") &&  mobileKey != "" || mobileKey.match(/[0-9]/) !=null && mobileKey.length >= 10 ) {
            mobile.classList.add('greenBr')
            mobile.classList.remove('redBr')
    }
        else {
            mobile.classList.remove('greenBr')
            mobile.classList.add('redBr')
            throw "*10 tadan ko'p raqam kiriting...";
        }
    }catch(e) {
        errorNumb.innerHTML = e
    }
})

let errorCity = document.querySelector('.errorCity');

city.addEventListener("keyup", () => {
    let cityKey = city.value.trim().toLowerCase();
    errorCity.innerHTML = "";
    try {
        if(cityKey.match(/[a-z]/) !=null && cityKey.match(/[!@#$%^&*]/)==null && cityKey!== "" && cityKey.match(/[0-9]/)==null) {
            city.classList.add('greenBr');
            city.classList.remove('redBr');
            
        } else {
            city.classList.remove('greenBr');
            city.classList.add('redBr');
            errorCity.style.color = "red";
            throw "*City kiriting ..."
        }
    } catch (e) {
        errorCity.innerHTML = e;
    }
})  

let errorType = document.querySelector('errorType');

department.addEventListener("keyup", () => {
    let departmentKey = department.value.trim().toLowerCase();
    errorType.innerHTML = "";
    try {
        if(departmentKey.match(/[a-z]/) !=null && departmentKey.match(/[!@#$%^&*]/)==null && departmentKey!== "" && departmentKey.match(/[0-9]/)==null) {
            department.classList.add('greenBr');
            department.classList.remove('redBr');
            
        } else {
            department.classList.remove('greenBr');
            department.classList.add('redBr');
            errorType.style.color = "red";
            throw "*Department kiriting ..."
        }
    } catch (e) {
        errorType.innerHTML = e;
    }
})  







