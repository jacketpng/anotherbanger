document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.wave').forEach(function(el) {
    const text = el.textContent;
    el.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');

      if (text[i] === ' ') {
        span.textContent = '\u00A0';
        span.style.display = 'inline-block';
      } else {
        span.textContent = text[i];
        span.style.display = 'inline-block';
        span.style.animation = `wave 3s infinite ease-in-out`;
        span.style.animationDelay = (i * 0.08) + 's';
      }

      el.appendChild(span);
    }
  });
});
