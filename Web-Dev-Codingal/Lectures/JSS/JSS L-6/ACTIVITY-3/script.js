function validate(e) {
    e.preventDefault();


    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');


    var message = '';

    if (email === ''){
        message = 'please enter yout email.';
        msgBox.style.color = 'red';
    }
    else if (pass === ''){
        message = 'please enter your password and it must be 8 letters or higher.';
        msgBox.style.color = 'red';
    }
    else if (age === ''){
        message = 'Your age Must Be Atleast 12 to 50.';
        msgBox.style.color = 'red';
    }
    else {
        message = 'You Have Succesfully Login.';
        msgBox.style.color = 'green';
    }

    msgBox.innerHTML = message;

}