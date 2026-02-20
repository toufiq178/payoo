document.getElementById('add-money-btn').addEventListener('click', function(){

    // 1 get the bank 
    const addMoneyBank = getInputValueById('add-money-bank');
    if (addMoneyBank === "Select bank") {
        alert('please select an option');
        return;
    }

    // 2 get bank number and check validation
    const addMoneyNumber = getInputValueById('add-money-number');
    if (addMoneyNumber.length !== 11) {
        alert('invalid number');
        return;
    }

    // 3 get amount 
    const addMoneyAmount = getInputValueById('add-money-amount');
    if (addMoneyAmount < 0) {
        alert('invalid amount');
        return;
    }
    
    // 4 calculate amount
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addMoneyAmount) ;
    
    // 5 get the pin & check validate
    const pin = getInputValueById('add-money-pin');
    if (pin === '1234') {

        // 5.1 true ::> alert success & set the balance
        alert('successful add money');
        setBalance(newBalance);



    }else{

        // 5.2 false ::> alert error return
        alert('invalid pin');
        return;
    }
})