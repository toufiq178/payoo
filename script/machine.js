// get input to value converter
function getInputById(id) {

    const input = document.getElementById(id);
    const value = input.value;
    return value;
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
    balanceElement.innerText = value;

}


// show  one
function showOne(id) {

    // access all
    const addMoney = document.getElementById('add-money-form');
    const cashOut = document.getElementById('cash-out-form');
    const history = document.getElementById('history');
    const sendMoney = document.getElementById('transfer-money-form');
    const payBiller = document.getElementById('pay-bill-form');

    // hide all
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    history.classList.add('hidden');
    sendMoney.classList.add('hidden');
    payBiller.classList.add('hidden');

    // if click me show me   
    const showOnly = document.getElementById(id);
    showOnly.classList.remove('hidden')
}

// date 
function todayDate() {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    return currentDate
}

// DATE 2
function timeBd() {
    const bdTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })
    
    return bdTime
}