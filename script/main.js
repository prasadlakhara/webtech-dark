function animateCounter(element, target, duration, label) {
    let startTime = null;
    const startValue = 0;
  
    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentValue = Math.min(startValue + (progress / duration) * target, target);
  
      element.textContent = Math.floor(currentValue) + label;
  
      if (progress < duration) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + label; // Ensure it ends exactly at the target
      }
    }
  
    requestAnimationFrame(updateCounter);
  }
  
  // Set up IntersectionObserver
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          const label = entry.target.dataset.label || '';
          const duration = 2000; // Example: Animate each counter in 2 seconds
          animateCounter(entry.target, target, duration, label);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% visible
  );
  
  // Observe all counter elements
  counters.forEach(counter => observer.observe(counter));
  