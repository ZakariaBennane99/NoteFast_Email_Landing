//creates a listener for when you press a key
document.querySelector('#email').onkeyup = keyup;

//creates a global Javascript variable
var inputTextValue;

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  inputTextValue = e.target.value
  console.log(inputTextValue)
}


const clicked = document.querySelector('button').addEventListener('click', () => {

    var templateParams = {
        user_email: inputTextValue
    };

    emailjs.send('service_3gdqphv', 'template_zl6z81n', templateParams)
    .then(function(response) {
        alert('Thank you! We will email you once we have the product ready')
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
})
