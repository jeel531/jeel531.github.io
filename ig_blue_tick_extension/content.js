// Instagram Official Blue Tick Badge Injector for @vaghani_01
(function() {
  'use strict';

  console.log('[Jeel Verified] High-Performance Extension loaded for @vaghani_01');

  // Official Meta / Instagram Verified Badge SVG with WHITE checkmark
  function createVerifiedBadge(size = 20) {
    const span = document.createElement('span');
    span.className = 'jeel-verified-badge';
    span.setAttribute('title', 'Verified');
    span.setAttribute('aria-label', 'Verified');
    span.style.cssText = 'display:inline-flex !important;align-items:center !important;vertical-align:middle !important;margin-left:6px !important;margin-right:2px !important;cursor:pointer !important;flex-shrink:0 !important;';

    span.innerHTML = `
      <svg aria-label="Verified" height="${size}" width="${size}" role="img" viewBox="0 0 40 40" style="display:inline-block;vertical-align:middle;">
        <title>Verified</title>
        <path d="M19.998 3.094 14.638 0l-5.972 3.156-5.636-2.091L.002 5.34l.46 6.002L0 17.434l3.297 5.09-1.372 5.86 5.364 2.76.671 6.002 6.037 1.34 3.998 4.514 5.998-3.094 5.36 3.094 4-4.514 6.036-1.34.672-6.002 5.364-2.76-1.372-5.86 3.297-5.09-2.029-6.092.46-6.002-3.028-4.275-5.636 2.091L25.358 0l-5.36 3.094z" fill="#0095f6"></path>
        <path d="M18.905 26.344l-5.805-5.81 1.841-1.841 3.964 3.96 8.442-8.442 1.841 1.842-10.283 10.291z" fill="#ffffff"></path>
      </svg>
    `;
    return span;
  }

  function injectBadge() {
    if (!document.body) return;

    // 1. Precise TreeWalker to find EVERY exact text node of vaghani_01 or Jeel Vaghani
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const targets = [];
    let node;
    while (node = walker.nextNode()) {
      const val = (node.nodeValue || '').trim();
      const cleanVal = val.toLowerCase().replace(/^@/, '');
      if (cleanVal === 'vaghani_01' || val === 'Jeel Vaghani') {
        targets.push({ node: node, val: val });
      }
    }

    targets.forEach(({ node, val }) => {
      const parent = node.parentElement;
      if (!parent) return;
      if (['SCRIPT', 'STYLE', 'TITLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT'].includes(parent.tagName)) return;

      if (parent.classList.contains('jeel-verified-badge') || parent.closest('.jeel-verified-badge')) return;
      if (parent.querySelector && parent.querySelector('.jeel-verified-badge')) return;
      if (parent.nextElementSibling && parent.nextElementSibling.classList.contains('jeel-verified-badge')) return;
      if (parent.parentElement && parent.parentElement.querySelector(':scope > .jeel-verified-badge')) return;

      const size = (val === 'Jeel Vaghani') ? 16 : 20;
      const badge = createVerifiedBadge(size);

      if (node.nextSibling) {
        node.parentNode.insertBefore(badge, node.nextSibling);
      } else if (parent.nextSibling) {
        parent.parentNode.insertBefore(badge, parent.nextSibling);
      } else {
        parent.appendChild(badge);
      }
    });

    // 2. Direct QuerySelector for headers, links, and username tags
    const elements = document.querySelectorAll('h1, h2, h3, a[href*="vaghani_01"], span[dir="auto"]');
    elements.forEach(el => {
      if (el.querySelector('.jeel-verified-badge') || el.classList.contains('jeel-verified-badge')) return;
      if (el.nextElementSibling && el.nextElementSibling.classList.contains('jeel-verified-badge')) return;
      const t = el.textContent.trim().toLowerCase().replace(/^@/, '');
      if (t === 'vaghani_01') {
        el.appendChild(createVerifiedBadge(20));
      }
    });
  }

  // Run immediately and continuously
  injectBadge();
  setInterval(injectBadge, 300);

  const observer = new MutationObserver(() => {
    injectBadge();
  });
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });

})();
