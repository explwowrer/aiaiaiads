// ---------------------------------------------------------------------------
// Mobile nav
// ---------------------------------------------------------------------------
(function () {
  var toggle = document.querySelector('.mobile-nav-toggle');
  var nav = document.getElementById('mobile-nav');
  var close = document.querySelector('.mobile-nav-close');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (close) close.focus();
  });

  if (close) {
    close.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();

// ---------------------------------------------------------------------------
// Accessible tabs
// ---------------------------------------------------------------------------
(function () {
  document.querySelectorAll('[data-tabs]').forEach(function (tabContainer) {
    var tabs = tabContainer.querySelectorAll('[role="tab"]');
    var panels = tabContainer.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        // Deselect all
        tabs.forEach(function (t) {
          t.setAttribute('aria-selected', 'false');
          t.setAttribute('tabindex', '-1');
        });
        panels.forEach(function (p) {
          p.setAttribute('hidden', '');
        });

        // Select clicked
        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');
        var panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel) panel.removeAttribute('hidden');
      });

      // Keyboard navigation
      tab.addEventListener('keydown', function (e) {
        var tabsArr = Array.prototype.slice.call(tabs);
        var index = tabsArr.indexOf(tab);
        var next;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          next = tabsArr[(index + 1) % tabsArr.length];
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          next = tabsArr[(index - 1 + tabsArr.length) % tabsArr.length];
        } else if (e.key === 'Home') {
          e.preventDefault();
          next = tabsArr[0];
        } else if (e.key === 'End') {
          e.preventDefault();
          next = tabsArr[tabsArr.length - 1];
        }

        if (next) {
          next.focus();
          next.click();
        }
      });
    });
  });
})();

// ---------------------------------------------------------------------------
// Count-up animation on stat numbers
// ---------------------------------------------------------------------------
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var observed = false;
  var elements = document.querySelectorAll('[data-countup]');
  if (!elements.length) return;

  function animateValue(el) {
    var text = el.textContent.trim();
    // Extract numeric parts — try to find a number in the text
    var match = text.match(/[\d,]+/);
    if (!match) return;

    var numStr = match[0].replace(/,/g, '');
    var target = parseInt(numStr, 10);
    if (isNaN(target) || target === 0) return;

    var duration = 1500;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      var eased = 1 - (1 - progress) * (1 - progress);
      var current = Math.floor(eased * target);
      el.textContent = text.replace(match[0], current.toLocaleString());
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = text; // restore original with formatting
      }
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !observed) {
        observed = true;
        elements.forEach(animateValue);
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();
