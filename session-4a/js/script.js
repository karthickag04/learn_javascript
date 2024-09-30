// Event Listener for the 'click' event on the button
document.getElementById('submitBtn').addEventListener('click',

  function() {
    const name = document.getElementById('name').value;
    document.getElementyId('output').innerText = `Hello, ${name}!`;
  }
);

// Event Listener for 'input' event on the text input field
document.getElementById('name').addEventListener('input', function() {
  console.log(`Current input: ${this.value}`);
});

// Event Listener for 'mouseenter' event on the button (hover effect)
document.getElementById('submitBtn').addEventListener('mouseenter', function() {
  console.log('Button hovered');
});

// Event Listener for 'keydown' event on the text input field
document.getElementById('name').addEventListener('keydown', function(e) {
  console.log(`Key pressed: ${e.key}`);
});
