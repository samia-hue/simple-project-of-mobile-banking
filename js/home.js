document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('11-digit-number').value;

    const amount = parseInt(document.getElementById('withdraw-amount').value);
    
    const pin = document.getElementById('4-digit-pin').value;
    console.log(bank, accountNumber, amount, pin);

    const availableBalance =parseInt( document.getElementById('span-tag').innerText);
    console.log(availableBalance);

    const totalNewBalance = amount + availableBalance;

    document.getElementById('span-tag').innerText = totalNewBalance;
})