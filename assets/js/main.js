(() => {
  const root = document.documentElement;
  const themeStorageKey = 'theme-preference';

  const readStoredTheme = () => {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Ignore storage errors (private mode, disabled storage, etc.)
    }
  };

  const savedTheme = readStoredTheme();
  const prefersDark =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    root.classList.add('dark');
  }

  const updateThemeButtons = () => {
    const isDark = root.classList.contains('dark');
    const labelText = isDark ? 'ងងឹត' : 'ភ្លឺ';
    document.querySelectorAll('[data-theme-label]').forEach((label) => {
      label.textContent = labelText;
    });
  };

  const toggleTheme = () => {
    root.classList.toggle('dark');
    saveTheme(root.classList.contains('dark') ? 'dark' : 'light');
    updateThemeButtons();
  };

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', toggleTheme);
  });

  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (mobileToggle && mobileMenu) {
    mobileToggle.setAttribute('aria-expanded', String(!mobileMenu.classList.contains('hidden')));
    mobileToggle.addEventListener('click', () => {
      const isNowHidden = mobileMenu.classList.toggle('hidden');
      mobileToggle.setAttribute('aria-expanded', String(!isNowHidden));
    });
  }

  const currentYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = currentYear;
  });

  updateThemeButtons();
})();
