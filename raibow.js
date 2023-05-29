function rainbow() {
  let div = document.getElementById('rgb');
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let interval;
  let currentIndex = 0;

  div.style.transition = 'color 0.3s';

  div.addEventListener('mouseover', function() {
    interval = setInterval(function() {
      div.style.color = colors[currentIndex % colors.length];
      currentIndex++;
    }, 10);
  });

  div.addEventListener('mouseout', function() {
    clearInterval(interval);
  });
}
