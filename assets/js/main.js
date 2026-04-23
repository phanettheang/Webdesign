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
    const labelText = isDark ? '🌙' : '☀️';
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

  const filterRoot = document.querySelector('[data-menu-filters]');
  const menuGrid = document.querySelector('[data-menu-grid]');

  if (filterRoot && menuGrid) {
    const filterButtons = Array.from(filterRoot.querySelectorAll('[data-filter-category]'));
    const menuItems = Array.from(menuGrid.querySelectorAll('article'));

    const drinkKeywords = ['ភេសជ្ជៈ', 'ទឹក', 'ក្រឡុក', 'ល្ហុងក្រឡុក', 'កាហ្វេ', 'តែ', 'smoothie', 'juice'];
    const dessertKeywords = ['បង្អែម', 'នំ', 'បបរ', 'ខ្ទិះ', 'ចេក', 'សាគូ', 'ត្នោត'];

    const classifyMenuItem = (text) => {
      if (drinkKeywords.some((keyword) => text.includes(keyword))) {
        return 'ភេសជ្ជៈ';
      }
      if (dessertKeywords.some((keyword) => text.includes(keyword))) {
        return 'បង្អែម';
      }
      return 'ម្ហូបខ្មែរ';
    };

    menuItems.forEach((item) => {
      const text = item.textContent || '';
      item.dataset.category = classifyMenuItem(text);
    });

    const setActiveFilter = (activeButton) => {
      filterButtons.forEach((button) => {
        const isActive = button === activeButton;
        button.classList.toggle('bg-spice-500', isActive);
        button.classList.toggle('text-white', isActive);
        button.classList.toggle('border', !isActive);
        button.classList.toggle('border-black/15', !isActive);
        button.classList.toggle('dark:border-white/20', !isActive);
      });
    };

    const applyFilter = (category) => {
      menuItems.forEach((item) => {
        const showItem = category === 'ទាំងអស់' || item.dataset.category === category;
        item.classList.toggle('hidden', !showItem);
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const category = button.dataset.filterCategory || 'ទាំងអស់';
        setActiveFilter(button);
        applyFilter(category);
      });
    });
  }

  updateThemeButtons();
})();
