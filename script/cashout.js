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

    
    // 3 calculate balance validate
    // const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText;

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashOutAmount);
  
    
    if (newBalance < 0) {
        
        alert('invalid amount');
        return;
    }

    // 4 check the pin
    const cashOutPin =getInputById('cashout-pin');
    if (cashOutPin === '1234') {
        
        alert('withdraw successful');
        setBalance(newBalance);
        // 1 get the history-container
        const history = document.getElementById('history-container');
        // 2 create a div inside history-container
        const newDiv = document.createElement('div');

        // 3 set the inner html
        newDiv.innerHTML = `
            <div class="border-neutral-200 border py-3 px-4 rounded-xl bg-neutral-50 shadow">

                <div class="flex gap-3 items-center">
                    <div class="flex justify-center items-center w-11 h-11 rounded-full bg-base-300">
                        <img src="./payoo-resources/assets/opt-1.png" />
                    </div>
                    <div class= "space-y-0.5">
                        <h1 class="label text-neutral/70 font-bold">Cash Out</h1>
                        <p class="text-xs uppercase font-normal opacity-60">${todayDate()} ${timeBd()}</p>
                        <p class="text-xs uppercase font-normal opacity-80">CashOut Amount <span class = "font-bold text-[1rem]"> $${cashOutAmount}</span></p>

                    </div>
                </div>
            </div> 

        ` 
        // 4 append the div to history container  
        history.appendChild(newDiv);
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
