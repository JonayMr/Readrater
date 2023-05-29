var mantenerCampana = document.querySelectorAll('.Campana');

mantenerCampana.forEach(function(item) {
  var animationClass = 'tilt-shaking';
  var isAnimating = false;

  item.addEventListener('mouseover', function() {
    if (!isAnimating) {
      item.classList.add(animationClass);
      isAnimating = true;

      item.addEventListener('animationend', animationEndHandler);
    }
  });

  function animationEndHandler() {
    item.classList.remove(animationClass);
    isAnimating = false;

    item.removeEventListener('animationend', animationEndHandler);
  }
});