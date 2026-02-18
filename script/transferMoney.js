document.getElementById('transfer-btn').addEventListener('click', function () {


    // 1 get transfer number
    const transferNumber = getInputById('transfer-money-number');
    if (transferNumber.length !== 11) {
        alert('invalid number')
    }
    // console.log(transferNumber);

    // 2 get transfer amount
    const transferAmount = getInputById('transfer-money-amount');

    // 3 calculate balance
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);

    if (newBalance < 0) {

        alert('invalid amount');
    }
    // 4 get pin & validate
    const transferPin = getInputById('transfer-money-pin');

    if (transferPin === '1234') {

        // 4.1 true ::> alert set the balance
        alert('successful send money');
        setBalance(newBalance)
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
                        <h1 class="label text-neutral/70 font-bold">Send Money</h1>
                        <p class="text-xs uppercase font-normal opacity-60">${todayDate()} ${timeBd()}</p>
                        <p class="text-xs uppercase font-normal opacity-80">Send Money <span class = "font-bold text-[1rem]"> $${transferAmount}</span></p>

                    </div>
                </div>
            </div> 

        `
        // 4 append the div to history container  
        history.appendChild(newDiv);

    } else {

        // 4.2 false ::> error return
        alert('invalid pin');
        return;
    }



})
