document.getElementById('pay-bill-btn').addEventListener('click', function(){

    // 1 get the select if not select value alert error
    const payBill = getInputById('pay-bill');
    if (payBill === "Select bank") {
        
        alert('please select one')
        return;
    }

    // 2 get number and check validation
    const billerNumber = getInputById('biller-number');
    // console.log(billerNumber);
    
    if (billerNumber.length !== 11) {
        alert('invalid number')
        return;
    }

    // 3 get amount
    const billerAmount = getInputById('biller-amount');
    
    
    // 4 calculate the amount
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(billerAmount);
    if (newBalance < 0) {
        alert('invalid Amount');
        return;
    }
    
    // 5 get the pin and check validate  if true success pay bill else error return
    const pin = getInputById ('biller-pin');
    if (pin === '1234') {
        
        alert('successful pay');
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
                        <h1 class="label text-neutral/70 font-bold">Pay Bill</h1>
                        <p class="text-xs uppercase font-normal opacity-60">${todayDate()} ${timeBd()}</p>
                        <p class="text-xs uppercase font-normal opacity-80">Pay Bill Amount <span class = "font-bold text-[1rem]"> $${billerAmount}</span></p>

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