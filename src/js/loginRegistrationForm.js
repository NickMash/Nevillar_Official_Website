let form = document.getElementById('registrationForm');
let login = form.login.value;
let pd = form.pd.value;
let cpd = form.cpd.value;
let email = form.email.value;
let adr_pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let pd_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
let login_pattern = /^[a-zA-Z]+([-_]?[a-zA-Z0-9]+){0,2}$/i;

let check = () => {
    let inputs = document.getElementsByClassName('for-js-check');
    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].value &&
            (document.getElementById('form-male').checked || document.getElementById('form-female').checked) &&
            document.getElementById('form-checkbox').checked) {
            document.getElementById('register-form-submit-button').disabled = false;
        } else {
            document.getElementById('register-form-submit-button').disabled = true;
            return;
        }
    }
};

let valid = () => {
    let strPass="<span style='color:red;'>"+document.getElementById('form-login').value+"</span>";
    document.getElementById('result').innerText=strPass;

    let inputs = document.getElementsByClassName('for-js-check');
    let p = document.getElementsByClassName('notice');
    let patterns = [/^[a-zA-Z]+([-_]?[a-zA-Z0-9]+){0,2}$/i , /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/ , /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/ , /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i , /^[+]{1}[0-9]{12}$/];

    for (let i = 0; i < inputs.length-3; i++) {
        if (patterns[i].test(inputs[i].value) === false) {
            p[i].classList.add('notice-display');
            inputs[i].classList.add('checking-mistake');
        }

        else {
            p[i].classList.remove('notice-display');
            inputs[i].classList.remove('checking-mistake');
        }
    }
};

if (pd_pattern.test(pd) === false)
    document.getElementById("appear-password-notice").classList.add('notice-display');

else if (pd_pattern.test(pd) === true)
    document.getElementById("appear-password-notice").classList.remove('notice-display');



if (login_pattern.test(login) === false)
    document.getElementById("appear-login-notice").classList.add('notice-display');

else if (login_pattern.test(login) === true)
    document.getElementById("appear-login-notice").classList.remove('notice-display');



if (cpd !== pd)
    document.getElementById("appear-confirmPassword-notice").classList.add('notice-display');

else if (cpd === pd)
    document.getElementById("appear-confirmPassword-notice").classList.remove('notice-display');



if (adr_pattern.test(email) === false)
    document.getElementById("appear-email-notice").classList.add('notice-display');

else if (adr_pattern.test(email) === true)
    document.getElementById("appear-email-notice").classList.remove('notice-display');

let elements = document.getElementsByClassName('for-js-check');
let submit = document.getElementById('register-form-submit-button');

submit.addEventListener('click', () => {
    valid();
});

for(let k = 0; k < elements.length; k++) {

    elements[k].addEventListener('change', () => {
        check();

    });

    elements[k].addEventListener('keyup', () => {
        check();
    });
}
