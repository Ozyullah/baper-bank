document.getElementById('btn-submite').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use.Value to get text from an input field
    const emailField =document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // step-3.a: set id an the html element
    // step-3.b: get the element
    // step-3.c: get the value from the element
    const passwordField =document.getElementById('user-password');
    const password =passwordField.value;

    // Danger: Do Not VERIFY email password on the client side
    // step-4: Veryfy email and password and check whether valid user or not.

    if(email === 'khandokar@gmail.com' && password === 'secret'){
        window.location.href ='bank.html';
    }
    else{
       alert('duuur hoooo')
    }
})