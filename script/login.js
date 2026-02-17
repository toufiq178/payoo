//1 access the login button and do function
document.getElementById('login-btn').addEventListener('click', function(){

    // 2 access the input number value
    const inputNumber = document.getElementById('input-number');
    const number = inputNumber.value;
    // 3 access the input digit value
    const inputDigit = document.getElementById('input-digit');
    const digit = inputDigit.value;

    if (number == '01234567890' && digit == '1234') {
        
        // 4.1 if number and value match :::> alert true
        window.location.assign('/home.html');
    }else{

        // 4.2 else not match ::> alert false and return
        alert('login failed');
        return;
    }

})