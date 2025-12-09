
// Event Listener for the 'click' event on the button (using name attribute)
document.querySelector('[name="submitButton"]').addEventListener('click',

  function() {
    // Using name attribute to get input value
    const name = document.querySelector('[name="username"]').value;
    // Using class name to update output
    document.querySelector('.output-text').innerText = `Hello, ${name}!`;
  }
);

// Event Listener for 'input' event on the text input field (using class name)
document.querySelector('.input-field').addEventListener('input', function() {
  console.log(`Current input: ${this.value}`);
});

// Event Listener for 'mouseenter' event on the button (using tag name)
document.querySelector('button').addEventListener('mouseenter', function() {
  console.log('Button hovered');
});

// Event Listener for 'keydown' event on the text input field (using name attribute)
document.querySelector('[name="username"]').addEventListener('keydown', function(e) {
  console.log(`Key pressed: ${e.key}`);
});



function addition(){
  console.log("Addition function called");
}


