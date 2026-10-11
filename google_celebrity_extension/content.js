// Official Unified Celebrity Knowledge Panel & Instagram Verified Injector for Jeel Vaghani
(function() {
  'use strict';

  const HOST = window.location.hostname;

  // ==========================================
  // MODULE 1: INSTAGRAM VERIFIED BADGE
  // ==========================================
  if (HOST.includes('instagram.com')) {
    console.log('[Jeel VIP Extension] Active on Instagram for @vaghani_01');

    function createVerifiedBadge(size = 18) {
      const span = document.createElement('span');
      span.className = 'jeel-verified-badge';
      span.setAttribute('title', 'Verified');
      span.setAttribute('aria-label', 'Verified');
      span.innerHTML = `
        <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="#0095f6" height="${size}" role="img" viewBox="0 0 40 40" width="${size}" style="display:inline-block; vertical-align:middle;">
          <title>Verified</title>
          <path d="M19.998 3.094 14.638 0l-5.972 3.156-5.636-2.091L.002 5.34l.46 6.002L0 17.434l3.297 5.09-1.372 5.86 5.364 2.76.671 6.002 6.037 1.34 3.998 4.514 5.998-3.094 5.36 3.094 4-4.514 6.036-1.34.672-6.002 5.364-2.76-1.372-5.86 3.297-5.09-2.029-6.092.46-6.002-3.028-4.275-5.636 2.091L25.358 0l-5.36 3.094zm-1.093 23.25-5.805-5.81 1.841-1.841 3.964 3.96 8.442-8.442 1.841 1.842-10.283 10.291z" fill="#0095f6"></path>
        </svg>
      `;
      return span;
    }

    function injectInstagramBadges() {
      // 1. Profile header
      const headers = document.querySelectorAll('header h2, header section h2, header h1, section main header h2');
      headers.forEach(h => {
        if (h.textContent.trim().toLowerCase().includes('vaghani_01')) {
          if (!h.parentElement.querySelector('.jeel-verified-badge') && !h.querySelector('.jeel-verified-badge')) {
            h.appendChild(createVerifiedBadge(20));
          }
        }
      });

      // 2. Profile full name display (Jeel Vaghani)
      const nameSpans = document.querySelectorAll('header section span, header span');
      nameSpans.forEach(span => {
        const text = span.textContent.trim();
        if ((text.includes('Jeel Vaghani') || text.includes('BMU MAHADEV')) && !text.includes('followers') && !text.includes('following')) {
          if (!span.parentElement.querySelector('.jeel-verified-badge') && !span.querySelector('.jeel-verified-badge')) {
            span.appendChild(createVerifiedBadge(16));
          }
        }
      });

      // 3. User links
      const userLinks = document.querySelectorAll('a[href*="vaghani_01"]');
      userLinks.forEach(link => {
        const text = link.textContent.trim().toLowerCase();
        if (text === 'vaghani_01' || text === '@vaghani_01') {
          if (!link.parentElement.querySelector('.jeel-verified-badge') && !link.querySelector('.jeel-verified-badge')) {
            link.appendChild(createVerifiedBadge(14));
          }
        }
      });
    }

    injectInstagramBadges();
    setInterval(injectInstagramBadges, 1000);
    new MutationObserver(injectInstagramBadges).observe(document.body || document.documentElement, { childList: true, subtree: true });
    return;
  }

  // ==========================================
  // MODULE 2: GOOGLE SEARCH CELEBRITY PANEL
  // ==========================================
  console.log('[Jeel VIP Extension] Active on Google Search');

  const JEEL_PHOTO_SUIT = 'https://jeel531.github.io/assets/jeel-suit.jpeg';
  const JEEL_PHOTO_ROYAL = 'https://jeel531.github.io/assets/jeel-royal.jpeg';
  const JEEL_PHOTO_CYBER = 'https://jeel531.github.io/assets/jeel-cyberpunk.jpeg';
  const JEEL_PHOTO_BIKER = 'https://jeel531.github.io/assets/jeel-biker.jpeg';
  const JEEL_PHOTO_SULTAN = 'https://jeel531.github.io/assets/jeel-movie-sultan.jpg';
  const JEEL_PHOTO_RUDRA = 'https://jeel531.github.io/assets/jeel-movie-rudra.jpg';
  const JEEL_PHOTO_LIFE = 'https://jeel531.github.io/assets/jeel-life-poster.jpg';
  const JEEL_PHOTO_COMBAT = 'https://jeel531.github.io/assets/jeel-life-3-combat.jpg';

  function isJeelQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = (urlParams.get('q') || '').toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const input = document.querySelector('input[name="q"], textarea[name="q"]');
    const inputVal = input ? input.value.toLowerCase() : '';
    
    return q.includes('jeel') || q.includes('vaghani') || 
           hash.includes('jeel') || hash.includes('vaghani') ||
           inputVal.includes('jeel') || inputVal.includes('vaghani') ||
           document.title.toLowerCase().includes('jeel vaghani');
  }

  function createCelebrityPanel() {
    const div = document.createElement('div');
    div.id = 'jeelCelebrityPanel';
    div.innerHTML = `
      <!-- Celebrity Entity Header (Photo 3 Replica) -->
      <div class="j-header">
        <div class="j-title-row">
          <h1 class="j-name">Jeel Vaghani</h1>
        </div>
        <div class="j-subtitle">
          <span>Indian actor &amp; Chief Enterprise Architect</span>
          <span class="j-verified-chip">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#8ab4f8" style="vertical-align:middle;">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Verified Entity
          </span>
        </div>
      </div>

      <!-- 4-Column Photo Mosaic Grid (Photo 3 Replica) -->
      <div class="j-mosaic">
        <!-- Tall Left Portrait -->
        <div class="j-mosaic-tall" onclick="window.open('https://jeel531.github.io/#visualPhotosSection', '_blank')">
          <img src="${JEEL_PHOTO_SUIT}" alt="Jeel Vaghani Official Portrait">
          <span class="j-badge-source">Source: Jeel Vaghani Official</span>
        </div>

        <!-- Mid Top -->
        <div class="j-mosaic-mid-1" onclick="window.open('https://jeel531.github.io/#visualPhotosSection', '_blank')">
          <img src="${JEEL_PHOTO_ROYAL}" alt="Jeel Vaghani Royal Sherwani">
        </div>

        <!-- Mid Bottom -->
        <div class="j-mosaic-mid-2" onclick="window.open('https://jeel531.github.io/#visualPhotosSection', '_blank')">
          <img src="${JEEL_PHOTO_CYBER}" alt="Jeel Vaghani Cyberpunk Edition">
        </div>

        <!-- Instagram Post Card -->
        <a href="https://www.instagram.com/vaghani_01/" target="_blank" class="j-insta-card">
          <img src="${JEEL_PHOTO_BIKER}" alt="Jeel Vaghani Instagram Post">
          <div class="j-insta-info">
            <div class="j-insta-handle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#e1306c" style="vertical-align:middle;">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@vaghani_01</span>
            </div>
            <div class="j-insta-caption">Executive cinematic journey across Gujarat &amp; Enterprise tech production. 🚀🔥</div>
            <div class="j-insta-time">3 days ago</div>
          </div>
        </a>

        <!-- Right Column: Facts & News -->
        <div class="j-right-col">
          <div class="j-fact-row">
            <div class="j-fact-box">
              <div class="j-fact-lbl">Age</div>
              <div class="j-fact-val">23 years</div>
              <div class="j-fact-sub">23 Apr 2003</div>
            </div>
            <div class="j-fact-box">
              <div class="j-fact-lbl">Profession</div>
              <div class="j-fact-val" style="font-size:15px;">Actor &amp; Architect</div>
              <div class="j-fact-sub">23 Enterprise Apps</div>
            </div>
          </div>

          <a href="https://jeel531.github.io/movie.html" target="_blank" class="j-news-box">
            <div class="j-news-left">
              <div class="j-news-src">Cinema &amp; Tech Gujarat</div>
              <div class="j-news-title">Jeel Vaghani stars in blockbuster 'The Sultan' and engineers 23 enterprise systems...</div>
              <div class="j-news-time">5 days ago</div>
            </div>
            <img src="${JEEL_PHOTO_SULTAN}" alt="The Sultan Release" class="j-news-img">
          </a>
        </div>
      </div>

      <!-- "Movies and shows" Carousel (Photo 3 Replica) -->
      <h2 class="j-section-h2">Movies and shows</h2>
      <div class="j-carousel-wrap">
        <div class="j-carousel">
          <!-- Card 1 -->
          <a href="https://jeel531.github.io/movie.html" target="_blank" class="j-movie-item">
            <div class="j-poster-box">
              <img src="${JEEL_PHOTO_SULTAN}" alt="The Sultan">
              <span class="j-badge-live">WATCH 1080p</span>
            </div>
            <div class="j-movie-title">The Sultan</div>
            <div class="j-movie-sub">2026 · Action/IMAX</div>
          </a>

          <!-- Card 2 -->
          <a href="https://jeel531.github.io/movie.html" target="_blank" class="j-movie-item">
            <div class="j-poster-box">
              <img src="${JEEL_PHOTO_RUDRA}" alt="The Sultan: Rudra">
            </div>
            <div class="j-movie-title">The Sultan: Rudra</div>
            <div class="j-movie-sub">Upcoming</div>
          </a>

          <!-- Card 3 -->
          <a href="https://jeel531.github.io/movie.html" target="_blank" class="j-movie-item">
            <div class="j-poster-box">
              <img src="${JEEL_PHOTO_LIFE}" alt="BMU Mahadev">
            </div>
            <div class="j-movie-title">BMU Mahadev</div>
            <div class="j-movie-sub">2025 · Biography</div>
          </a>

          <!-- Card 4 -->
          <a href="https://jeel531.github.io/movie.html" target="_blank" class="j-movie-item">
            <div class="j-poster-box">
              <img src="${JEEL_PHOTO_COMBAT}" alt="Action Combat">
            </div>
            <div class="j-movie-title">Action Combat</div>
            <div class="j-movie-sub">2026 · Martial Arts</div>
          </a>

          <!-- Card 5 -->
          <a href="https://jeel531.github.io/#projectsSection" target="_blank" class="j-movie-item">
            <div class="j-poster-box">
              <img src="${JEEL_PHOTO_SUIT}" alt="Enterprise 23 Systems">
            </div>
            <div class="j-movie-title">Enterprise 23</div>
            <div class="j-movie-sub">Architecture Series</div>
          </a>
        </div>
      </div>

      <!-- About Card (Photo 3 Replica) -->
      <div class="j-about-box">
        <h2 class="j-section-h2" style="margin-top:0;">About</h2>
        <div class="j-about-desc">
          <strong>Jeel Vaghani (BMU MAHADEV)</strong> is an Indian actor, film producer, and Chief Enterprise Systems Architect based in Gujarat, India. Vaghani is noted for starring as the lead in the cinematic blockbuster <em>'The Sultan'</em> (1080p IMAX) and architecting 23 mission-critical enterprise software suites, high-throughput industrial thermal barcode engines, and AI creative studios.
          <a href="https://jeel531.github.io" target="_blank">Google Knowledge Graph / Official Entity</a>
        </div>

        <div class="j-table">
          <div class="j-tr">
            <span class="j-td-lbl">Born</span>
            <span class="j-td-val">23 April 2003 (age 23 years), Surat, Gujarat, India</span>
          </div>
          <div class="j-tr">
            <span class="j-td-lbl">Known for</span>
            <span class="j-td-val">The Sultan (2026) · 23 Enterprise Industrial ERP Systems</span>
          </div>
          <div class="j-tr">
            <span class="j-td-lbl">Education</span>
            <span class="j-td-val">RMIT University Specialization · Computer Systems</span>
          </div>
          <div class="j-tr">
            <span class="j-td-lbl">Organizations</span>
            <span class="j-td-val">Enterprise Tech Innovations Gujarat · BMU Mahadev Films</span>
          </div>
          <div class="j-tr">
            <span class="j-td-lbl">Official Website</span>
            <span class="j-td-val"><a href="https://jeel531.github.io" target="_blank">https://jeel531.github.io</a></span>
          </div>
        </div>

        <!-- Social Profiles Row -->
        <div class="j-profiles">
          <a href="https://www.instagram.com/vaghani_01/" target="_blank" class="j-chip">
            Instagram (@vaghani_01)
          </a>
          <a href="https://www.linkedin.com/in/jeelvaghani" target="_blank" class="j-chip">
            LinkedIn
          </a>
          <a href="https://github.com/jeel531" target="_blank" class="j-chip">
            GitHub
          </a>
          <a href="https://wa.me/919033157999" target="_blank" class="j-chip">
            WhatsApp (+91 90331 57999)
          </a>
        </div>
      </div>
    `;
    return div;
  }

  function injectCelebrityPanel() {
    if (!isJeelQuery()) return;
    if (document.getElementById('jeelCelebrityPanel')) return;

    // Google Search target container hierarchy
    const rcnt = document.getElementById('rcnt');
    const centerCol = document.getElementById('center_col');
    const rso = document.getElementById('rso');
    const mainDiv = document.querySelector('div[role="main"]') || document.getElementById('search');

    if (centerCol) {
      const panel = createCelebrityPanel();
      centerCol.insertBefore(panel, centerCol.firstChild);
      console.log('[Jeel VIP Extension] Panel injected into center_col!');
      return;
    }

    if (rcnt) {
      const panel = createCelebrityPanel();
      rcnt.insertBefore(panel, rcnt.firstChild);
      console.log('[Jeel VIP Extension] Panel injected into rcnt!');
      return;
    }

    if (rso) {
      const panel = createCelebrityPanel();
      rso.insertBefore(panel, rso.firstChild);
      console.log('[Jeel VIP Extension] Panel injected into rso!');
      return;
    }

    if (mainDiv) {
      const panel = createCelebrityPanel();
      mainDiv.insertBefore(panel, mainDiv.firstChild);
      console.log('[Jeel VIP Extension] Panel injected into mainDiv!');
    }
  }

  // Inject Autocomplete Entity Suggestion with Photo (Photo 2 Replica)
  function injectAutocompleteEntity() {
    const listboxes = document.querySelectorAll('ul[role="listbox"], div[role="listbox"], div.aajZCb ul, div.erkvQe ul, .OBMEnb ul');
    listboxes.forEach(ul => {
      const input = document.querySelector('input[name="q"], textarea[name="q"]');
      const val = input ? input.value.trim().toLowerCase() : '';
      if (!val.includes('jeel') && !val.includes('vaghani')) return;

      if (ul.querySelector('.jeel-ac-injected-row')) return;

      const firstItem = ul.querySelector('li[role="presentation"], li, div[role="option"]');
      if (firstItem) {
        const li = document.createElement('li');
        li.role = 'presentation';
        li.className = 'jeel-ac-injected-row';
        li.innerHTML = `
          <img src="${JEEL_PHOTO_SUIT}" alt="Jeel Vaghani" class="jeel-ac-thumb">
          <div>
            <span class="jeel-ac-title">Jeel Vaghani</span>
            <span class="jeel-ac-sub"> - Indian actor &amp; Chief Enterprise Architect</span>
          </div>
          <span class="jeel-ac-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#8ab4f8" style="vertical-align:middle;">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Entity
          </span>
        `;
        li.onclick = function(e) {
          e.stopPropagation();
          if (input) input.value = 'jeel vaghani';
          const form = input ? input.closest('form') : null;
          if (form) form.submit();
        };

        ul.insertBefore(li, firstItem);
      }
    });
  }

  // Run on initial load
  injectCelebrityPanel();
  injectAutocompleteEntity();

  // Periodic check
  setInterval(() => {
    injectCelebrityPanel();
    injectAutocompleteEntity();
  }, 1000);

  // Dynamic observer for Google SPA navigation
  const observer = new MutationObserver(() => {
    injectCelebrityPanel();
    injectAutocompleteEntity();
  });

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });

})();
