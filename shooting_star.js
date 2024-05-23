document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let isValid = true;

    // Kiểm tra tính hợp lệ của email
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        document.getElementById('emailError').style.color = 'red';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Kiểm tra tính hợp lệ của số điện thoại
    if (!validatePhone(phone)) {
        document.getElementById('phoneError').innerText = 'Invalid phone number';
        document.getElementById('phoneError').style.color = 'red';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    // Nếu hợp lệ, submit form
    if (isValid) {
        alert('Form submitted successfully!');
        event.target.submit();
    }
});

function validateEmail(email) {
    // Biểu thức chính quy để kiểm tra email
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    // Biểu thức chính quy để kiểm tra số điện thoại (chỉ cho phép số và phải từ 10-15 số)
    const re = /^\d{10,15}$/;
    return re.test(String(phone));
}
