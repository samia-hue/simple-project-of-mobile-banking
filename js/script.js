// * login button functionality

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNumber = 12345678910;
    const pin = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(
      document.getElementById("mobile-number").value
    );

    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    console.log(mobileNumberValueConverted, pinNumberValueConverted);

    if (
      mobileNumberValueConverted === mobileNumber &&
      pinNumberValueConverted === pin){

        window.location.href = './home.html'
    }

    else{
        alert('Invalid Credentials!')
    }
  });
