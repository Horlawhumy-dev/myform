
// Blur Event Listeners
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('form2').addEventListener('submit', loginForm);

// FUNCTIONS

function loginForm(e){
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    // Validation
    if(email.value === '' || password.value === ''){
        showError('Please all fields are required!', ' small is-invalid')
    }else{
        if(confirm("Would you like to save your details?")){
          alert("Thanks for coming!")
        }
    }
    // PreventDefault();
    e.preventDefault();
}


function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;

    if(!re.test(email.value)){
       // create error div message
       const errorMssg = document.createElement('small');
       errorMssg.className = 'error is-invalid';
       errorMssg.textContent = "Example: test@example.com";

       const divCont = document.getElementById('div1');
       divCont.insertAdjacentElement('beforeend', errorMssg);

       setTimeout(() => {
           errorMssg.remove();
       },3000);
    }else{
      // create error div message
      const errorMssg = document.createElement('small');
      errorMssg.className = 'error is-valid';
      errorMssg.textContent = "Email Matched!";

      const divCont = document.getElementById('div1');
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

        const divCont = document.getElementById('div2');
        divCont.insertAdjacentElement('beforeend', errorMssg);

        setTimeout(() => {
            errorMssg.remove();
        },3000);
    }else{
        // create error div message
        const errorMssg = document.createElement('small');
        errorMssg.className = 'error is-valid';
        errorMssg.textContent = "Password Matched!";
  
        const divCont = document.getElementById('div2');
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
    const form =  document.querySelector('#form2');

    container.insertBefore(error, form);

    setTimeout(() => {
        error.remove();
    },3000);

}