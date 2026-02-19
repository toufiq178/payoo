document.getElementById('get-bonus-btn').addEventListener('click', function(){

    // console.log('yes');
    
    // 1 get the coupon
    const coupon = getInputById('get-bonus-coupon');

    // 2 get the balance
    const currentBalance = getBalance ();

    // 3 check the coupon
    if (coupon === 'TEST123') {
        
        alert('successfully applied coupon');
        const bonusBalance =getParentage(currentBalance , 20);
        setBalance(bonusBalance);

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
                        <h1 class="label text-neutral/70 font-bold">Get Bonus</h1>
                        <p class="text-xs uppercase font-normal opacity-60">${todayDate()} ${timeBd()}</p>
                        <p class="text-xs uppercase font-normal opacity-80">Pay Bonus Amount <span class = "font-bold text-[1rem]"> $${bonusBalance}</span></p>

                    </div>
                </div>
            </div> 

        ` 
        // 4 append the div to history container  
        history.appendChild(newDiv);

    }else{

        alert('invalid coupon');
        return;
    }
    // 3 coupon apply
})