
document.getElementById("add-money-btn").addEventListener('click', function(){

    //1 get the bank
    const bankName = getInputById('add-money-bank');
    
    
    if (bankName === 'Select bank') {
        alert("please select a bank");
        return;
    }
    // console.log(bankName);
    

    // 2 get the bank acc number
    const accNumber = getInputById('add-money-number');
    if (accNumber.length !== 11) {
        
        alert('invalid number')
    }

    // 3 get amount to withdraw & calculate 
    const addMoneyAmount = getInputById("add-money-amount");
    const newBalance = getBalance() + Number(addMoneyAmount);
    if (addMoneyAmount < 0 ) {
        alert('invalid amount')
        return;
    }
    console.log(newBalance);
    

    // 4 get pin and check pin
    const addMoneyPin = getInputById('add-money-pin');
    if (addMoneyPin == '1234') {

        // 4.1 true set the balance 
        alert(` 
            add money : ${addMoneyAmount} BDT.  successful
            Total : ${newBalance}BDT.
            ${new Date()}`);
        setBalance(newBalance);
    }else{
        // 4.2 false alert error
        alert('invalid pin')

    }
    
})