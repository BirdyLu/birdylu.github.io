var dinosaur = document.getElementById('dinosaur');

function main(mouseX) {
  let isRunning = false;

  var mouseX = mouseX;
  var rect = dinosaur.getBoundingClientRect();
  var petX = rect.left;

  // For tracking mouse movement
  function trackMouse(event) {
    mouseX = event.clientX;
  }
  document.addEventListener('mousemove', trackMouse);

  function updatePosition() {
    var dx = mouseX - petX;
    const error = 2;

    if (Math.abs(dx) >= error) {
      if (mouseX > petX) {
        dinosaur.style.backgroundImage = `url('/dino/dino-run-right.gif')`;
        petX += error;
        dinosaur.style.left = petX + 'px';
      } 
      else if (mouseX < petX) {
        dinosaur.style.backgroundImage = `url('/dino/dino-run-left.gif')`;
        petX -= error;
        dinosaur.style.left = petX + 'px';
      }
    } else {
      isRunning = false;
      dinosaur.style.backgroundImage = `url('/dino/dino_standing.webp')`;
    }
    
    requestAnimationFrame(updatePosition);
  }


  // petX = window.innerWidth / 2;
  // dinosaur.style.left = petX + 'px';

  updatePosition()

}

// Add a click event listener to the document
document.addEventListener('click', function(event) {
    // start dinorun
    main(event.clientX);
});


