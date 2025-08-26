
const ValidPinNumber = 1234;
const transactionData = [];

// * function to get input values

function getInputValueNumber(id){
    const inputFiled = document.getElementById(id);
    const inputFiledValue = inputFiled.value;
    const inputFiledValueNumber = parseInt(inputFiledValue);

    return inputFiledValueNumber;
}

// * number drkr nh hoile (just value)

function getInputValue(id){
    const inputFiled = document.getElementById(id);
    const inputFiledValue = inputFiled.value;
    return inputFiledValue;
}
// * function to get inner Text

function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue =element.innerText;
    const elementValueNumber = parseInt(elementValue);

    return elementValueNumber; 
}

// * function to set innerText

function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText = value;

}

// * function to toggle 
function handleToggle(id){

       const forms = document.getElementsByClassName('form')

  for(const form of forms){
    form.style.display = 'none'
  }

  document.getElementById(id).style.display = 'block'

}

// * function to toggle btns

function handleBtnToggle(id){
    const formBtns = document.getElementsByClassName('form-btn');
    
    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        btn.classList.add('border-gray-300')

    }

    document.getElementById(id).classList.remove('border-gray-300');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
}


// * add money feature
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('11-digit-number').value;

    const amount = getInputValueNumber('add-amount');
    
    const pin =getInputValueNumber('4-digit-pin');
    console.log(bank, accountNumber, amount, pin);

    const availableBalance =getInnerText('available-balance');
    

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

    setInnerText(totalNewBalance)
})

// * cash out featured



document.getElementById('btn-with-draw-money').addEventListener('click',function(event){
    event.preventDefault();

    const amount = getInputValueNumber('withdraw-amount')

    const availableBalance =getInnerText('available-balance')

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

   setInnerText(totalNewBalance);
   const data = {
    name : "Cash Out",
    date : new Date().toLocaleDateString()
   }
   transactionData.push(data)
   console.log(transactionData)

})
 

document.getElementById('transaction-btn').addEventListener('click',function(){
    const transactionContainer = document.getElementById('transaction-container')

    transactionContainer.innerText = ''

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML = `
                  <div
            class="bg-white rounded-xl p-3 flex justify-between items-center"
          >
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" alt="" / class=" mx-auto">
              </div>
              <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
         `
        

        transactionContainer.appendChild(div)
    }
    
})




// * toggling feature

document.getElementById('add-money-btn').addEventListener('click',function(){
 handleToggle('add-money-parent')
 handleBtnToggle('add-money-btn')

})


document.getElementById('cash-out-btn').addEventListener('click',function(){
   handleToggle('cash-out-parent')
    handleBtnToggle('cash-out-btn')
})

document.getElementById('transfer-btn').addEventListener('click',function(){

    handleToggle("transfer-money-parent")
    handleBtnToggle('transfer-btn')

})


document.getElementById('get-bonus-btn').addEventListener('click',function(){

handleToggle('get-bonus-parent')
handleBtnToggle('get-bonus-btn')

})
document.getElementById('pay-bill-btn').addEventListener('click',function(){

     handleToggle('pay-bill-parent')
     handleBtnToggle('pay-bill-btn')

})
document.getElementById('transaction-btn').addEventListener('click',function(){
  handleToggle('transaction-parent')
  handleBtnToggle('transaction-btn')

})







