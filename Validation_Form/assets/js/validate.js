// set keywords
const usernameText = document.querySelector('#username');
const emailText = document.querySelector('#email');
const passwordText = document.querySelector('#password');
const confirmpasswordText = document.querySelector('#confirm-password');
const form = document.querySelector('#register');

// disable submit button when first load file
document.querySelector('.btn').setAttribute('disabled', true);

const checkUsername = () => {
    
    let valid = false;

    const username = usernameText.value.trim();

    if (!isRequired(username)) {
        showError(usernameText, 'Họ tên không được để trống!');
    } else if (!isUsernameValid(removeAscent(username))) {
        showError(usernameText, 'Họ tên không phù hợp định dạng!')
    } else {
        showSuccess(usernameText);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    
    let valid = false;
    const email = emailText.value.trim();
    if (!isRequired(email)) {
        showError(emailText, 'Email không được để trống.');
    } else if (!isEmailValid(email)) {
        showError(emailText, 'Email không hợp lệ.')
    } else {
        showSuccess(emailText);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    
    let valid = false;

    const password = passwordText.value.trim();

    if (!isRequired(password)) {
        showError(passwordText, 'Password không được để trống.');
    } else if (!isPasswordValid(password)) {
        showError(passwordText, 'Password phải có độ dài 8-32 kí tự, chứa ít nhất 1 chữ hoa và 1 chữ thường');
    } else {
        showSuccess(passwordText);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    
    let valid = false;
    // check confirm password
    const confirmPassword = confirmpasswordText.value.trim();
    const password = passwordText.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmpasswordText, 'Vui lòng nhập lại password!');
    } else if (password !== confirmPassword) {
        showError(confirmpasswordText, 'Password không trùng khớp!');
    } else {
        showSuccess(confirmpasswordText);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordValid = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,32})/;
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;

const removeAscent = (str) => {
    if (str === null || str === undefined) return str;
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/Đ/g, "D");
    return str;
}
const isUsernameValid = (username) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9\s]{2,}$/;
    return re.test(username);
}

const showError = (input, message) => {
    // disable submit when have error
    document.querySelector('.btn').setAttribute('disabled', true);
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('.error-fields');
    error.textContent = message;
};

const showSuccess = (input) => {
    // allow submit when no error
    document.querySelector('.btn').removeAttribute('disabled');
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('.error-fields');
    error.textContent = '';
}


const isFormValid = () => {
    let flag = false;
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
    
    if (isFormValid) {
        flag = true;
    }

    return flag;
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // submit to the server if the form is valid
    if (isFormValid()) {
        alert("Đăng ký thành công!");
    }
});


const debounce = (fn, delay = 100) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));