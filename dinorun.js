document.addEventListener('DOMContentLoaded', () => {
  var dinosaur = document.getElementById('dinosaur');
  
  if (!dinosaur) {
    console.error("Element with id 'dinosaur' not found.");
    return;
  }

  var mouseX = 0; // Initialize mouseX
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
      } else if (mouseX < petX) {
        dinosaur.style.backgroundImage = `url('/dino/dino-run-left.gif')`;
        petX -= error;
        dinosaur.style.left = petX + 'px';
      }
    } else {
      dinosaur.style.backgroundImage = `url('/dino/dino_standing.webp')`;
    }

    requestAnimationFrame(updatePosition);
  }

  // Optional: Center dinosaur initially
  petX = window.innerWidth / 2 - rect.width / 2;
  dinosaur.style.left = petX + 'px';

  updatePosition();
});
