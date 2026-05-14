(function () {
  'use strict';

  function initTabs() {
    const tabGroups = document.querySelectorAll('[data-tabs-group]');

    tabGroups.forEach((group) => {
      const groupId = group.dataset.tabsGroup;
      const tabItems = group.querySelectorAll('.tabs__item');
      const panels = document.querySelectorAll(
        `[data-tabs-panels="${groupId}"] .tab-panel`
      );

      tabItems.forEach((tab) => {
        tab.addEventListener('click', () => {
          const targetId = tab.dataset.tab;

          tabItems.forEach((t) => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');

          panels.forEach((panel) => {
            if (panel.id === targetId) {
              panel.classList.add('active');
              panel.removeAttribute('hidden');
            } else {
              panel.classList.remove('active');
              panel.setAttribute('hidden', '');
            }
          });

          if (history.replaceState) {
            history.replaceState(null, '', `#${targetId}`);
          }
        });
      });

      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const matchingTab = group.querySelector(`[data-tab="${hash}"]`);
        if (matchingTab) matchingTab.click();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }
})();