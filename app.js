
// Load Events listeners
loadEventListeners();

function loadEventListeners(){
  
    // BLUR Event Listeners
    document.getElementById('firstname').addEventListener('blur', validateFirst);
    document.getElementById('lastname').addEventListener('blur', validateLast);
    document.getElementById('zipcode').addEventListener('blur', validateZip);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('password').addEventListener('blur', validatePassword);
    document.getElementById('phone').addEventListener('blur', validatePhone);
    
    // submit listeners
    document.getElementById('form1').addEventListener('submit', submitForm);

}

// FUNCTIONS

function submitForm(e){
    // Selectors from html
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const zipCode = document.getElementById('zipcode');
    const phoneNumber = document.getElementById('phone');
        

    // Form Validation

    if(firstName.value === '' || lastName.value === '' || email.value === '' || password.value === '' || zipCode.value === '' || phoneNumber.value === ''){
       showError('Please fill in all fields', ' small is-invalid');
    } else{
        showError('All fields are correctly filled!', ' small is-valid');
    }
  
    // PreventDefault();
    e.preventDefault();
}


function validateFirst(){
    const firstName = document.getElementById('firstname');
    const re = /^[a-zA-Z]{2,}$/;

    if(!re.test(firstName.value)){
      // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-invalid';
        errorMssg.textContent = "Please enter a valid name!";

        const divCont = document.getElementById('div1');
        divCont.insertAdjacentElement('beforeend', errorMssg);

        setTimeout(() => {
            errorMssg.remove();
        },3000);
       
    }else{
       // create error div message
       const errorMssg = document.createElement('small');
       errorMssg.className = 'error is-valid';
       errorMssg.textContent = "Name Matched!";

       const divCont = document.getElementById('div1');
       divCont.insertAdjacentElement('beforeend', errorMssg);
        
        setTimeout(() => {
            errorMssg.remove();
        },3000);
    }
}

function validateLast(){
    const lastName = document.getElementById('lastname');
    const re = /^[a-zA-Z]{2,}$/;

    if(!re.test(lastName.value)){
        // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-invalid';
        errorMssg.textContent = "Please enter a valid name!";

        const divCont = document.getElementById('div2');
        const input =  document.querySelector('#firstname');
        divCont.insertAdjacentElement('beforeend', errorMssg);

        setTimeout(() => {
            errorMssg.remove();
        },3000);
    
    }else{
        // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-valid';
        errorMssg.textContent = "Names Matched!";

        const divCont = document.getElementById('div2');
        divCont.insertAdjacentElement('beforeend', errorMssg);
        
        setTimeout(() => {
            errorMssg.remove();
        },3000);
    }
    
}


function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;

    if(!re.test(email.value)){
       // create error div message
       const errorMssg = document.createElement('small');
       errorMssg.className = 'error is-invalid';
       errorMssg.textContent = "Example: test@example.com";

       const divCont = document.getElementById('div3');
       divCont.insertAdjacentElement('beforeend', errorMssg);

       setTimeout(() => {
           errorMssg.remove();
       },3000);
    }else{
      // create error div message
      const errorMssg = document.createElement('small');
      errorMssg.className = 'error is-valid';
      errorMssg.textContent = "Email Matched!";

      const divCont = document.getElementById('div3');
      divCont.insertAdjacentElement('beforeend', errorMssg);
      
      setTimeout(() => {
          errorMssg.remove();
      },3000);
    }
}


function validatePassword(){
    const password = document.getElementById('password');
    const re = /^([a-zA-Z_]+)@?([0-9]+)$/;

    if(!re.test(password.value)){
         // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-invalid';
        errorMssg.textContent = "Must contains characters like [a-z,A-Z,0-9]";

        const divCont = document.getElementById('div4');
        divCont.insertAdjacentElement('beforeend', errorMssg);

        setTimeout(() => {
            errorMssg.remove();
        },3000);
    }else{
        // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-valid';
        errorMssg.textContent = "Password Matched!";
  
        const divCont = document.getElementById('div4');
        divCont.insertAdjacentElement('beforeend', errorMssg);
        
        setTimeout(() => {
            errorMssg.remove();
        },3000);
    }
}


function validateZip(){
    const zipCode = document.getElementById('zipcode');
    const re = /^[0-9]{4,10}(-[0-9]+)?$/;

    if(!re.test(zipCode.value)){
        // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-invalid';
        errorMssg.textContent = "Min 4, Max 10 Characters required!";

        const divCont = document.getElementById('div5');
        divCont.insertAdjacentElement('beforeend', errorMssg);

        setTimeout(() => {
            errorMssg.remove();
        },3000);
    }else{
        // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-valid';
        errorMssg.textContent = "ZipCode Matched!";
  
        const divCont = document.getElementById('div5');
        divCont.insertAdjacentElement('beforeend', errorMssg);
        
        setTimeout(() => {
            errorMssg.remove();
        },3000);
    }
}

function validatePhone(){
    const phoneNumber = document.getElementById('phone');
    const re = /^\+?\(?\d{3}\)?\-?([0-9]{3})\-?([0-9]+)$/;

    if(!re.test(phoneNumber.value)){
        // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-invalid';
        errorMssg.textContent = "Please enter valid phone numbers! Country code required";

        const divCont = document.getElementById('div6');
        divCont.insertAdjacentElement('beforeend', errorMssg);

        setTimeout(() => {
            errorMssg.remove();
        },3000);
    }else{
      // create error div message
      const errorMssg = document.createElement('small');
      errorMssg.className = 'error is-valid';
      errorMssg.textContent = "Phone Number Matched!";

      const divCont = document.getElementById('div6');
      divCont.insertAdjacentElement('beforeend', errorMssg);
      
      setTimeout(() => {
          errorMssg.remove();
      },3000);
    }
}

// show errors
function showError(message, className){
    // create error div message
    const error = document.createElement('div');
    error.className = className;
    error.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form =  document.querySelector('#form1');

    container.insertBefore(error, form);

    setTimeout(() => {
        error.remove();
    },3000);

}
