
const ValidPinNumber = 1234;

// * add money feature
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('11-digit-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    
    const pin =parseInt( document.getElementById('4-digit-pin').value);
    console.log(bank, accountNumber, amount, pin);

    const availableBalance =parseInt( document.getElementById('available-balance').innerText);
    console.log(availableBalance);

    // * condition

    if( accountNumber.length <11 || accountNumber.length >11 ){
        alert('Enter Valid mobile number');
        return;
    }

    if(pin !== ValidPinNumber){
        alert('provide valid pin number');
        return;
    }



    // *calculation
    const totalNewBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText = totalNewBalance;
})

// * cash out featured



document.getElementById('btn-with-draw-money').addEventListener('click',function(event){
    event.preventDefault();

    const amount = parseInt(document.getElementById('withdraw-amount').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    console.log(amount, availableBalance);



    const accountNumber = document.getElementById('agent-number').value;
    const amountOfWithdraw = parseInt(document.getElementById('withdraw-amount').value);
    
    const pin =parseInt( document.getElementById('4-digit-withdraw-pin').value);

     if( accountNumber.length <11 || accountNumber.length >11 ){
        alert('Enter Valid mobile number');
        return;
    }

    if(pin !== ValidPinNumber){
        alert('provide valid pin number');
        return;
    }



    const totalNewBalance = availableBalance - amount;
    console.log(totalNewBalance);

    document.getElementById('available-balance').innerText = totalNewBalance;

})












// * toggling feature

document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display = 'none'

    document.getElementById('add-money-parent').style.display = 'block'
})


document.getElementById('cash-out-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = 'none';

    document.getElementById('cash-out-parent').style.display = 'block';
})




