import './MobileMenu.css';

export function initMobileMenu() {
  // Create mobile menu container
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';

  // Create inner container
  const mobileMenuInner = document.createElement('div');
  mobileMenuInner.className = 'mobile-menu__inner';

  // Create mobile menu content
  const mobileMenuContent = document.createElement('div');
  mobileMenuContent.className = 'mobile-menu__content';

  // Create mobile menu nav
  const mobileMenuNav = document.createElement('nav');
  mobileMenuNav.className = 'mobile-menu__nav';

  // Create mobile menu list
  const mobileMenuList = document.createElement('ul');
  mobileMenuList.className = 'mobile-menu__list';

  // Menu items data
  const menuItems = [
    { href: '#features-r36s', text: 'Functionality' },
    { href: '#features', text: 'About R36S' },
    { href: '#categories', text: 'Video' },
    { href: '#reviews', text: 'Reviews' },
    { href: '#contact', text: 'Contacts' },
  ];

  // Create and add menu items
  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'mobile-menu__item';

    const a = document.createElement('a');
    a.className = 'mobile-menu__link';
    a.href = item.href;
    a.textContent = item.text;

    li.appendChild(a);
    mobileMenuList.appendChild(li);
  });

  // Add list to nav
  mobileMenuNav.appendChild(mobileMenuList);

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.setAttribute('aria-label', 'Close menu');

  const closeIcon = document.createElement('span');
  closeIcon.className = 'close-icon';

  closeButton.appendChild(closeIcon);

  // Assemble mobile menu
  mobileMenuContent.appendChild(mobileMenuNav);
  mobileMenuContent.appendChild(closeButton);
  mobileMenuInner.appendChild(mobileMenuContent);
  mobileMenu.appendChild(mobileMenuInner);

  return mobileMenu;
}
