(function () {
  'use strict';
  const NAV_ITEMS = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '../index.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    },
    {
      id: 'transactions',
      label: 'Transactions',
      href: '#',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    },
    {
      id: 'accounts',
      label: 'Accounts',
      href: '#',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    },
    {
      id: 'investments',
      label: 'Investments',
      href: '#',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    },
    {
      id: 'credit-cards',
      label: 'Credit Cards',
      href: '../pages/credit-cards.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    },
    {
      id: 'loans',
      label: 'Loans',
      href: '#',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V18a1 1 0 0 1-2 0v-1.07A7 7 0 0 1 5.07 11H4a1 1 0 0 1 0-2h1.07A7 7 0 0 1 11 5.07V4a1 1 0 0 1 2 0v1.07A7 7 0 0 1 18.93 11H20a1 1 0 0 1 0 2h-1.07A7 7 0 0 1 13 16.93z"/></svg>`,
    },
    {
      id: 'services',
      label: 'Services',
      href: '../pages/services.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`,
    },
    {
      id: 'my-privileges',
      label: 'My Privileges',
      href: '#',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    },
    {
      id: 'setting',
      label: 'Setting',
      href: '../pages/setting-edit-profile.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    },
  ];

  function buildSidebar(activePage) {
    const navItems = NAV_ITEMS.map((item) => {
      const isActive = item.id === activePage;
      return `
        <a href="${item.href}"
           class="sidebar__nav-item ${isActive ? 'active' : ''}"
           aria-current="${isActive ? 'page' : 'false'}">
          <span class="sidebar__nav-icon">${item.icon}</span>
          <span>${item.label}</span>
        </a>`;
    }).join('');

    return `
      <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">
        <div class="sidebar__logo">
          <svg class="sidebar__logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="10" fill="#1814F3" opacity="0.1"/>
            <path d="M8 12h8a8 8 0 0 1 0 16H8V12z" fill="#1814F3"/>
            <rect x="20" y="12" width="12" height="16" rx="4" fill="#1814F3" opacity="0.6"/>
          </svg>
          <span class="sidebar__logo-text">BankDash.</span>
        </div>
        <nav class="sidebar__nav">${navItems}</nav>
      </aside>
      <div class="sidebar-overlay" id="sidebar-overlay" aria-hidden="true"></div>`;
  }

  function buildHeader(pageTitle) {
    return `
      <header class="header" id="header" role="banner">

        <!-- Hamburger (mobile only, shown via CSS) -->
        <button class="header__hamburger" id="hamburger-btn"
                aria-label="Open navigation"
                aria-expanded="false"
                type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Page Title (hidden on mobile via CSS) -->
        <h1 class="header__title">${pageTitle}</h1>

        <!-- Action group: search + icons -->
        <div class="header__actions">

          <!-- Search Bar: ALWAYS visible, flex:1 on mobile -->
          <div class="header__search" role="search">
            <svg class="header__search-icon" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round"
                 aria-hidden="true">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="search"
                   placeholder="Search for something"
                   aria-label="Search"
                   autocomplete="off">
          </div>

          <!-- Settings: navigates to Setting page -->
          <button class="header__icon-btn"
                  id="btn-settings"
                  aria-label="Settings"
                  title="Go to Settings"
                  type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>

          <!-- Notification: badge clears on click -->
          <button class="header__icon-btn"
                  id="btn-notification"
                  aria-label="Notifications (1 unread)"
                  title="Notifications"
                  type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span class="badge" aria-hidden="true"></span>
          </button>

          <!-- Avatar: navigates to Edit Profile -->
          <button class="header__avatar"
                  id="btn-profile"
                  aria-label="Edit Profile"
                  title="Edit Profile"
                  type="button">
            <img src="../assets/images/avatar.jpg"
                 onerror="this.src='https://ui-avatars.com/api/?name=Charlene+Reed&background=4C49ED&color=fff&size=44'"
                 alt="Charlene Reed">
          </button>

        </div>
      </header>`;
  }

  function initSidebar() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar      = document.getElementById('sidebar');
    const overlay      = document.getElementById('sidebar-overlay');

    if (!hamburgerBtn || !sidebar || !overlay) return;

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; 
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', openSidebar);
    overlay.addEventListener('click', closeSidebar);
    overlay.addEventListener('touchend', (e) => {
      e.preventDefault();
      closeSidebar();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSidebar();
    });
  }

  function initSettingsBtn() {
    const btn = document.getElementById('btn-settings');
    if (!btn) return;

    btn.addEventListener('click', () => {
      window.location.href = '../pages/setting-edit-profile.html';
    });
  }

  function initNotificationBtn() {
    const btn   = document.getElementById('btn-notification');
    if (!btn) return;

    const badge = btn.querySelector('.badge');
    let hasUnread = true;

    btn.addEventListener('click', () => {
      if (hasUnread && badge) {
        // Fade out badge
        badge.style.transform = 'scale(0)';
        badge.style.opacity   = '0';
        hasUnread = false;
        btn.setAttribute('aria-label', 'Notifications');
        btn.title = 'Notifications';

        setTimeout(() => {
          badge.style.display = 'none';
        }, 200);
      }
    });
  }

  function initProfileBtn() {
    const btn = document.getElementById('btn-profile');
    if (!btn) return;

    btn.addEventListener('click', () => {
      window.location.href = '../pages/setting-edit-profile.html#edit-profile';
    });
  }

  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', mainContent.scrollTop > 10);
      }, { passive: true });
    }
  }

  function init() {
    const body      = document.body;
    const activePage = body.dataset.page  || '';
    const pageTitle  = body.dataset.title || 'Dashboard';

    const sidebarMount = document.getElementById('sidebar-mount');
    const headerMount  = document.getElementById('header-mount');

    if (sidebarMount) sidebarMount.innerHTML = buildSidebar(activePage);
    if (headerMount)  headerMount.innerHTML  = buildHeader(pageTitle);

    initSidebar();
    initSettingsBtn();
    initNotificationBtn();
    initProfileBtn();
    initHeaderScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();