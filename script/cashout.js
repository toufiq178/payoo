document.getElementById('withdraw-btn').addEventListener("click", function(){


    // 1 get the number & validation check
    const cashOutNumber = getInputById ('cashout-number');
    console.log(cashOutNumber);
    if (cashOutNumber.length !== 11) {
        
        alert('invalid number')
        return;
    }
    // 2 get amount
    const cashOutAmount = getInputById('cashout-amount');
    console.log(cashOutAmount);
    
    // 3 calculate balance validate
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;

    const newBalance = Number(balance) - Number(cashOutAmount);
    console.log(newBalance);
    
    if (newBalance < 0) {
        
        alert('invalid amount');
        return;
    }

    // 4 check the pin
    const cashOutPin =getInputById('cashout-pin');
    if (cashOutPin === '1234') {
        
        alert('withdraw successful');
        balanceElement.innerText = newBalance ;
    }else{

        alert('invalid pin');
        return;
    }

})
















// document.getElementById('withdraw-btn').addEventListener("click", function(){

//     // 1 get the agent number check validation
//     const cashOutNumberInput = document.getElementById('cashout-number');
//     const cashOutNumber = cashOutNumberInput.value;
//     console.log(cashOutNumber);

//     if (cashOutNumber.length !== 11) {
//         alert('invalid number');
//         return;
//     }
    
    
//     // 2 get the amount , validate ,
//     const cashOutAmountInput = document.getElementById('cashout-amount');
//     const cashOutAmount = cashOutAmountInput.value;
//     console.log(cashOutAmount);
    

//     // 3 get the current balance , validate , convert to number
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
    
    
//     // 4  convert to number , calculate new balance
//     const newBalance = Number(balance) - Number(cashOutAmount);
//     if (newBalance < 0) {
        
//         alert('invalid amount');
//         return;
//     }
//     console.log(newBalance);

//     // 5 get pin verify
//     const cashOutPinInput = document.getElementById('cashout-pin');
//     const cashOutPin = cashOutPinInput.value;

//     if (cashOutPin === '1234') {
        
//         // 5.1 true :: > show an alert > set balance
//         alert('cash out successful');
//         balanceElement.innerText = newBalance;
        
//     }else{
//         // 5.1 false ::> show an error > return
//         alert('invalid pin');
//         return;
//     }
    

     
    

// })
