// this is simple event listener example but try that below one for including function inside event listener
// document.getElementById('submitBtn').addEventListener('mouseover',addition);

// function addition(){
//   console.log("Addition function called");
// }


// Event Listener for the 'click' event on the button
document.getElementById('submitBtn').addEventListener('click',

  function() {
    const name = document.getElementById('name').value;
    document.getElementById('output').innerText = `Hello, ${name}!`;
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





// Common JavaScript Event Names:
// click - when an element is clicked
// mouseover - when mouse pointer moves over an element
// mouseout - when mouse pointer moves out of an element
// mouseenter - when mouse pointer enters an element
// mouseleave - when mouse pointer leaves an element
// mousedown - when mouse button is pressed down
// mouseup - when mouse button is released
// mousemove - when mouse pointer moves
// keydown - when a key is pressed down
// keyup - when a key is released
// keypress - when a key is pressed and released
// input - when input value changes
// change - when element value changes and loses focus
// focus - when element receives focus
// blur - when element loses focus
// submit - when form is submitted
// load - when page finishes loading
// resize - when window is resized
// scroll - when page is scrolled
// touchstart - when touch starts
// touchend - when touch ends
// touchmove - when touch moves
// dblclick - when element is double-clicked
// contextmenu - when right-click context menu appears
// dragstart - when drag operation starts
// dragend - when drag operation ends
// drop - when dragged element is dropped
