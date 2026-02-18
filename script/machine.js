// get input to value converter
function getInputById (id){

    const input = document.getElementById(id);
    const value = input.value;
    return value ;
}

// machine ::> get balance
function getBalance() {

    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

// machine ::> set the balance
function setBalance(value) {

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value ;

}


// show  one
function showOne(id) {
    
    // access all
    const addMoney = document.getElementById('add-money-form');
    const cashOut = document.getElementById('cash-out-form');

    // hide all
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    // if click me show me   
    const showOnly = document.getElementById(id);
    showOnly.classList.remove('hidden')
}