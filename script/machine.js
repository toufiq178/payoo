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