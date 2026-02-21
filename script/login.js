document.getElementById('login-btn').addEventListener('click', function(){

    // 1 get number
    // 2 check number
    // 3 get pin
    // 4 check pin 
    

    const loginNumber = getInputValueById('input-number');
    
    
    if (loginNumber.length !== 11) {
        
        alert('invalid number');
        return;
    }

    const pin = getInputValueById("input-digit");

    if (pin == '1234') {
        
        alert('login successful');
        window.location.assign('./home.html');
    }else{

        alert('invalid pin');
        return
    }
    
})