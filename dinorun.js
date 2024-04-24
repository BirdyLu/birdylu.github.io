var dinosaur = document.getElementById('dinosaur');

function main(mouseX) {
  let isRunning = false;

  var mouseX = mouseX;
  var rect = dinosaur.getBoundingClientRect();
  var petX = rect.left;

  const dinosaurImagesRight = [
    '/dino/dino-run-right-1.png',
    '/dino/dino-run-right-2.png',
  ];
  const dinosaurImagesLeft = [
    '/dino/dino-run-left-1.png',
    '/dino/dino-run-left-2.png',
  ];


  // For tracking mouse movement
  function trackMouse(event) {
    mouseX = event.clientX;
  }
  document.addEventListener('mousemove', trackMouse);


  // Function to animate the dinosaur facing right
  function animateDinosaurRight() {
    isRunning = true;
    var index = 0;

    dinosaur.style.backgroundImage = `url('${dinosaurImagesRight[index]}')`;
    index = (index + 1) % dinosaurImagesRight.length;
  }

  // Function to animate the dinosaur facing left
  function animateDinosaurLeft() {
    isRunning = true;
    var index = 0;

    dinosaur.style.backgroundImage = `url('${dinosaurImagesLeft[index]}')`;
    index = (index + 1) % dinosaurImagesLeft.length;
  }

  function updatePosition() {
    var dx = mouseX - petX;
    const error = 2;

    if (Math.abs(dx) >= error) {
      if (mouseX > petX) {
        animateDinosaurRight();
        //dinosaur.style.backgroundImage = `url('/dino/dino-run-right-1.png')`;
        petX += error;
        dinosaur.style.left = petX + 'px';
      } 
      else if (mouseX < petX) {
        animateDinosaurLeft();
        //dinosaur.style.backgroundImage = `url('/dino/dino-run-left-1.png')`;
        petX -= error;
        dinosaur.style.left = petX + 'px';
      }
    } else {
      isRunning = false;
      dinosaur.style.backgroundImage = `url('/dino/dino-run-right-1.png')`;
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


