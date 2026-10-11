// Instagram Official Blue Tick Badge Injector for @vaghani_01
(function() {
  'use strict';

  console.log('[Jeel Verified] Extension loaded for @vaghani_01');

  // Official Instagram Verified Badge SVG
  function createVerifiedBadge(size = 18) {
    const span = document.createElement('span');
    span.className = 'jeel-verified-badge';
    span.setAttribute('title', 'Verified');
    span.setAttribute('aria-label', 'Verified');
    span.style.display = 'inline-flex';
    span.style.alignItems = 'center';
    span.style.verticalAlign = 'middle';
    span.style.marginLeft = '4px';
    span.style.marginRight = '2px';
    span.style.cursor = 'pointer';

    span.innerHTML = `
      <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="#0095f6" height="${size}" role="img" viewBox="0 0 40 40" width="${size}" style="display:inline-block; vertical-align:middle;">
        <title>Verified</title>
        <path d="M19.998 3.094 14.638 0l-5.972 3.156-5.636-2.091L.002 5.34l.46 6.002L0 17.434l3.297 5.09-1.372 5.86 5.364 2.76.671 6.002 6.037 1.34 3.998 4.514 5.998-3.094 5.36 3.094 4-4.514 6.036-1.34.672-6.002 5.364-2.76-1.372-5.86 3.297-5.09-2.029-6.092.46-6.002-3.028-4.275-5.636 2.091L25.358 0l-5.36 3.094zm-1.093 23.25-5.805-5.81 1.841-1.841 3.964 3.96 8.442-8.442 1.841 1.842-10.283 10.291z" fill="#0095f6"></path>
      </svg>
    `;
    return span;
  }

  function injectBadge() {
    // 1. Profile header (Top title on profile page https://www.instagram.com/vaghani_01/)
    const headers = document.querySelectorAll('header h2, header section h2, header h1, section main header h2');
    headers.forEach(h => {
      if (h.textContent.trim().toLowerCase().includes('vaghani_01')) {
        if (!h.parentElement.querySelector('.jeel-verified-badge') && !h.querySelector('.jeel-verified-badge')) {
          h.appendChild(createVerifiedBadge(20));
        }
      }
    });

    // 2. Profile full name display (Jeel Vaghani / BMU MAHADEV)
    const nameSpans = document.querySelectorAll('header section span, header span');
    nameSpans.forEach(span => {
      const text = span.textContent.trim();
      if ((text.includes('Jeel Vaghani') || text.includes('BMU MAHADEV')) && !text.includes('followers') && !text.includes('following')) {
        if (!span.parentElement.querySelector('.jeel-verified-badge') && !span.querySelector('.jeel-verified-badge')) {
          span.appendChild(createVerifiedBadge(16));
        }
      }
    });

    // 3. Username links (in feed, comments, stories, sidebar, reels)
    const userLinks = document.querySelectorAll('a[href*="vaghani_01"]');
    userLinks.forEach(link => {
      const text = link.textContent.trim().toLowerCase();
      if (text === 'vaghani_01' || text === '@vaghani_01') {
        if (!link.parentElement.querySelector('.jeel-verified-badge') && !link.querySelector('.jeel-verified-badge')) {
          link.appendChild(createVerifiedBadge(14));
        }
      }
    });

    // 4. Feed Articles and Post Modals
    const articles = document.querySelectorAll('article header, role="dialog" header');
    articles.forEach(art => {
      const links = art.querySelectorAll('a, span');
      links.forEach(el => {
        if (el.textContent.trim().toLowerCase() === 'vaghani_01') {
          if (!el.parentElement.querySelector('.jeel-verified-badge') && !el.querySelector('.jeel-verified-badge')) {
            el.appendChild(createVerifiedBadge(14));
          }
        }
      });
    });

    // 5. Any standalone span / div with vaghani_01
    const allSpans = document.querySelectorAll('span, div');
    allSpans.forEach(el => {
      if (el.children.length === 0 && el.textContent.trim().toLowerCase() === 'vaghani_01') {
        const parent = el.parentElement;
        if (parent && !parent.querySelector('.jeel-verified-badge') && parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE') {
          parent.appendChild(createVerifiedBadge(15));
        }
      }
    });
  }

  // Initial check
  injectBadge();

  // Periodic fallback
  setInterval(injectBadge, 1000);

  // Dynamic DOM observer for single page application changes
  const observer = new MutationObserver((mutations) => {
    injectBadge();
  });

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });
})();
