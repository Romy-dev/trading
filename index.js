const elements = document.querySelectorAll('.col-x');

const options = {
  rootMargin: '0px',
  threshold: 1
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      entry.target.style.opacity = 1;
    }
  });
}, options);

elements.forEach(element => {
  observer.observe(element);
});

window.addEventListener('load', () => {
  const container = document.querySelector('.boxe-x');
  const elements = container.querySelectorAll('.col-x');

  elements.forEach(element => {
    element.style.opacity = 0;
  });

  observer.observe(container);
});
