const $form = document.contactForm;

function validateForm(event) {
    const nameError = validateName($form.name.value);
    const emailError = validateEmail($form.email.value);
    const messageError = validateMessage($form.message.value);

    const errors ={
        'error-name' : nameError,
        'error-email' : emailError,
        'error-message' : messageError	
    }

    if (errorHandling(errors)){
        document.querySelector("#contact-form").className = "isHidden";
        document.querySelector("#success").className = "";
    }

    event.preventDefault();
    
}


function validateName(nameSent) {
    if (nameSent.length === 0) {
        return 'Por favor ingresa tu nombre.';
    }

    if (!/^[a-z]+$/i.test(nameSent)) {
        return 'El nombre solo puede contener letras.'
    }

    if (nameSent.length > 50) {
        return 'El nombre debe ser menor a 50 caracteres.';
    }

    return '';

}

function validateEmail(emailSent) {
    if (emailSent.length === 0) {
        return 'Por favor ingresa tu email.';
    }   
    
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailSent)) {
        return 'Por favor ingresa un email válido.';
    }

    return '';    
}

function validateMessage(messageSent) {
    if (messageSent.length === 0) {
        return 'Por favor ingresa un mensaje.';
    }

    if (messageSent > 1000) {
        return 'El mensaje debe ser menor a 1000 caracteres.';
    }

    return '';
}

function errorHandling(errors) {
    const $errors = document.querySelectorAll('.error-label');
    let isValid = true;

    $errors.forEach(error => {
        error.innerHTML = errors[error.id];
        if (errors[error.id] !== '') {
            isValid = false;
        }
    });

    return isValid;
}


$form.onsubmit = validateForm;