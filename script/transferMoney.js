document.getElementById('transfer-btn').addEventListener('click', function(){

    
    // 1 get transfer number
    const transferNumber =getInputById('transfer-money-number');
    if (transferNumber.length !== 11) {
        alert('invalid number')
    }
    // console.log(transferNumber);
    
    // 2 get transfer amount
    const transferAmount =getInputById('transfer-money-amount');

    // 3 calculate balance
    const currentBalance = getBalance() ;
    const newBalance = currentBalance - Number(transferAmount) ;

    if (newBalance < 0) {
        
        alert('invalid amount');
    }
    // 4 get pin & validate
    const transferPin = getInputById('transfer-money-pin');

    if (transferPin ==='1234') {
        
        alert('successful send money');
        setBalance(newBalance)

    }else{

        alert('invalid pin');
        return ;
    }

    // 4.1 true ::> alert set the balance
    // 4.2 false ::> error return

    
})
