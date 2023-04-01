const ratio = 0.2

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}


const handleIntersect = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.intersectionRatio > ratio) {
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target)
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (reveal) {
  observer.observe(reveal)
})
