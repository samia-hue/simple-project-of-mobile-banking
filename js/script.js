// * login button functionality

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault()
    // console.log('clicked btn')
    // console.log(event)

    const mobileNumber = 1234567890;
    const pinNumber = 1234;
     
    // * mobile number
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConversion = parseInt(mobileNumberValue);

    // * pin number

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConversion = parseInt(pinNumberValue);


    // console.log(mobileNumberValueConversion, pinNumberValueConversion);


    // * condition 

    if(mobileNumberValueConversion === mobileNumber && pinNumberValueConversion === pinNumber){
        window.location.href = "./home.html"
    }
    else{
        alert("Invalid credentials")
    }    

})