
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
            ${new Date()}
            
            `);
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
                    <div>
                        <h1 class="label text-neutral/70 font-bold">Add Money</h1>
                        <p class="text-xs uppercase font-normal opacity-60">${todayDate()} ${timeBd()}</p>
                        <p class="text-xs uppercase font-normal opacity-80">Added Amount <span class = "font-bold text-[1rem]"> $${addMoneyAmount}</span></p>

                    </div>
                </div>
            </div> 

        ` 
        // 4 append the div to history container  
        history.appendChild(newDiv);

    }else{
        // 4.2 false alert error
        alert('invalid pin')

    }
    
})