let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let gender = document.querySelector('#gender');
const error_message = document.getElementById('error-message');
let validFname = false;
let validLname = false;
let validEmail = false;
let validPhone = false;
 
fname.addEventListener('blur',()=>{
    let regex = /^[a-zA-Z ]/;
    let str = fname.value;
    if(regex.test(str)){
        error_message.innerHTML = '';
        validFname = true;
    }
    else{
        error_message.innerHTML = `Please enter a valid name`;
        validFname = false;
    }
})

lname.addEventListener('blur',()=>{
    let regex = /^[a-zA-Z ]/;
    let str = lname.value;
    if(regex.test(str)){
        error_message.innerHTML = '';
        validLname = true;
    }
    else{
        error_message.innerHTML = `Please enter a valid name`;
        validLname = false;
    }
})

phone.addEventListener('blur',()=>{
    let regex = /^([0-9]{10}$)/;
    let str = phone.value;
    if(regex.test(str)){
        error_message.innerHTML = '';
        validPhone = true;
    }
    else{
        error_message.innerHTML = 'Please enter 10 digit phone number'
        validPhone = false;
    }
})
email.addEventListener('blur',()=>{
    let regex = /^([_\.0-9a-zA-Z]+)@([_\.0-9a-zA-Z]+)\.([a-zA-Z])/;
    let str = email.value;
    if(regex.test(str)){
        error_message.innerHTML = '';
        validEmail = true;
    }
    else{
        error_message.innerHTML = 'Please enter a valid email'
        validEmail = false;
    }
})


var key=0;
function saveData(){
    console.log("You clicked on submit");
    if(validFname && validLname && validEmail && validPhone){
        acceptData();
        removeData();
    }
    else{
        alert('Form cannot be submitted! Please correct the errors.');
    }
}
let data = [];
let acceptData=() =>{
    var table = document.getElementById('dataTable');
        key++;
        table.innerHTML +=
        `<tr>
        <td class="input-val">${key}</td>
        <td class="input-val">${fname.value}</td>
        <td class="input-val">${lname.value}</td>
        <td class="input-val">${email.value}</td>
        <td class="input-val">${gender.value}</td>
        <td class="input-val">${phone.value} 
        <span>
            <i class="fas fa-edit" onclick="editItem(this,key)"></i>
            <i class="fas fa-trash-alt" onclick="deleteItem(this,key)"></i>
        </span> </td>
      </tr>`
      
    data.push({
        FirstName : fname.value,
        LastName : lname.value,
        Email : email.value,
        Gender : gender.value,
        Phone : phone.value
    })
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
}
function removeData(){
    fname.value='';
    lname.value='';
    email.value='';
    gender.value = 'Select';
    phone.value='';
}

let deleteItem = (e,key) => {
    e.parentElement.parentElement.parentElement.remove();
    data.splice(e.key, 1);
    // localStorage.getItem(key);
    // localStorage.removeItem(key);
    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
}
// e.parentElement.parentElement.parentElement.value
let editItem = (e,key)=> {
    let d = data[key-1];
    e.parentElement.parentElement.parentElement.remove();
    data.splice(e.key-1,1);
    document.getElementById('fname').value = d.FirstName;
    document.getElementById('lname').value = d.LastName;
    document.getElementById('email').value = d.Email;
    document.getElementById('gender').value = d.Gender;
    document.getElementById('phone').value = d.Phone;
}
