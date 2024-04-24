var hiddenButton = document.getElementById('hiddenButton');

// Add an event listener to the webpage for key press events
document.addEventListener('keypress', function(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    // Trigger a click event on the hidden button
    hiddenButton.click();
  }
});

// Add an event listener to the document for touch events
document.addEventListener('touchstart', function() {
  // Trigger a click event on the hidden button
  hiddenButton.click();
});
