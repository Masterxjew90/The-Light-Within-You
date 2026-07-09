document.addEventListener('DOMContentLoaded', function () {
  // --- starfield ---
  var starsContainer = document.createElement('div');
  starsContainer.className = 'stars-bg';
  starsContainer.setAttribute('aria-hidden', 'true');

  var STAR_COUNT = 90;
  for (var i = 0; i < STAR_COUNT; i++) {
    var star = document.createElement('span');
    var isGold = Math.random() < 0.18;
    star.className = 'star' + (isGold ? ' gold' : '');

    var size = (Math.random() * 2 + 1).toFixed(1); // 1px - 3px
    var top = (Math.random() * 100).toFixed(2);
    var left = (Math.random() * 100).toFixed(2);
    var duration = (Math.random() * 4 + 2.5).toFixed(2); // 2.5s - 6.5s
    var delay = (Math.random() * 5).toFixed(2);
    var minOp = (Math.random() * 0.2 + 0.1).toFixed(2);
    var maxOp = (Math.random() * 0.4 + 0.6).toFixed(2);

    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = top + '%';
    star.style.left = left + '%';
    star.style.animationDuration = duration + 's';
    star.style.animationDelay = delay + 's';
    star.style.setProperty('--min-op', minOp);
    star.style.setProperty('--max-op', maxOp);

    starsContainer.appendChild(star);
  }
  document.body.insertBefore(starsContainer, document.body.firstChild);

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // simple contact form handler (placeholder - no backend yet)
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('#form-status');
      if (msg) {
        msg.textContent = "Thank you — your message has been received. I'll be in touch soon.";
        msg.style.display = 'block';
      }
      form.reset();
    });
  }
});
