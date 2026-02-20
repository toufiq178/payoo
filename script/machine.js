// get the input value 
function getInputValueById(id) {
    
    const Input = document.getElementById(id);
    const value = Input.value;
    return value;
}

// get balance
function getBalance() {
    
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance) ;
}

// set balance
function setBalance(newBalance) {
    
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = newBalance;
    
}


// show only 
function showOne(id) {
    
    // get the id
    const addMoneyForm = document.getElementById('add-money-form');
    const cashOutForm = document.getElementById('cash-out-form');
    const transfer = document.getElementById('transfer-money-form');
    const getBonus = document.getElementById('get-bonus-form');
    const payBill = document.getElementById('pay-bill-form');
    const history = document.getElementById('history');


    // hide all
    addMoneyForm.classList.add('hidden');
    cashOutForm.classList.add('hidden');
    transfer.classList.add('hidden');
    getBonus.classList.add('hidden');
    payBill.classList.add('hidden');
    history.classList.add('hidden');


    // remove class
    const removeClass = document.getElementById(id);
    removeClass.classList.remove('hidden');
}