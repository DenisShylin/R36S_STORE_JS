// Articles.js - Инициализатор секции Articles с SEO-оптимизацией
import { initFaqAccordion } from '/sections/Articles/accordion.js';
export function initArticles() {
  // В App.js элементы загружаются со строчной первой буквой в id
  const articlesSection = document.getElementById('articles');

  if (!articlesSection) {
    console.warn('Секция Articles не найдена в DOM, пробуем найти с другим id');
    // Пробуем альтернативные варианты id
    const alternativeId =
      document.querySelector('.articles') ||
      document.querySelector('section[id^="articles"]') ||
      document.querySelector('section.articles');

    if (!alternativeId) {
      console.error('Не удалось найти секцию Articles в DOM никаким способом');
      // Выводим структуру DOM для отладки
      console.debug('Структура DOM:', document.body.innerHTML);
      return;
    }

    // Если нашли элемент, но у него нет id="articles", добавляем его
    if (!alternativeId.id) {
      alternativeId.id = 'articles';
    }

    console.log(
      'Найден альтернативный элемент для секции Articles:',
      alternativeId
    );
  }

  console.log('Инициализация секции Articles с SEO-оптимизацией');

  const articles = [
    {
      id: 1,
      title:
        'R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts',
      sections: [
        {
          subtitle:
            'R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts',
          content: `Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time.`,
        },
        {
          subtitle:
            'Comprehensive R36S Review: Performance That Exceeds Expectations',
          content: `After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.`,
        },
        {
          subtitle:
            'How to Install Games on R36S: Simple Setup for Maximum Fun',
          content: `Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`,
        },
        {
          subtitle:
            'R36S Specifications: Hardware That Delivers Premium Gaming Experience',
          content: `The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers.`,
        },
        {
          subtitle:
            'Best Games for R36S: Thousands of Classics at Your Fingertips',
          content: `The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`,
        },
        {
          subtitle: 'A Unique Gaming Experience with R36S',
          content: `The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`,
        },
        {
          subtitle:
            'R36S Firmware Update Guide: Keeping Your Console at Peak Performance',
          content: `Maintaining the latest <strong>R36S firmware</strong> ensures you'll enjoy optimal performance and access to the newest features. The <mark>R36S firmware update</mark> process is straightforward and user-friendly. Begin by downloading the latest firmware package from our official website. Then, place the file in the root directory of your microSD card. After inserting the card into your powered-off R36S, hold the select button while powering on the device to enter update mode. The console will automatically detect and install the new firmware, typically completing in 2-3 minutes. Each <strong>R36S firmware update</strong> brings performance optimizations, new emulators, and interface improvements. Following the update, the <mark>R36S user manual</mark> recommends recalibrating your controls for the best gaming experience. Our technical support team, available to customers worldwide including <em>Japan</em>, <em>South Korea</em>, and across <em>Europe</em>, can assist with any firmware update questions. Subscribe to our newsletter for notifications about new R36S firmware releases and special offers on accessories. Don't miss our <a href="https://www.aliexpress.com/item/1005007171465465.html" title="R36S Limited Time Promotion" target="_blank" rel="nofollow">limited-time promotion</a> with discounted pricing on the R36S console and accessory bundles.`,
        },
        {
          subtitle:
            'Why Choose the R36S: Value, Performance, and Community Support',
          content: `The <strong>R36S</strong> has established itself as the preferred choice for discerning retro gamers for several compelling reasons. When conducting an <span>R36S vs Anbernic comparison</span>, the R36S consistently offers better specifications at a more competitive price point. The <mark>R36S price</mark> and value for money is unmatched in the portable retro gaming market, delivering premium features without the premium cost. The <strong>R36S portable gaming console</strong> features extend beyond mere hardware specifications – the active community of users continues to develop custom firmware, game ports, and utilities that expand the system's capabilities. The <mark>R36S emulator performance</mark> receives regular optimizations through community contributions, ensuring that even the most demanding games run smoothly. The <strong>R36S handheld gaming console review</strong> scores consistently highlight the device's exceptional build quality, with a solid feel that withstands the rigors of portable gaming. Customers across <em>North America</em>, <em>Europe</em>, <em>Australia</em>, and <em>Asia</em> have made the R36S their go-to retro gaming solution. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Official" target="_blank" rel="nofollow">Order your R36S today</a> from our official website to join this passionate community and take advantage of our current promotional pricing, exclusive bundles, and free worldwide shipping on orders over $100.`,
        },
      ],
    },
    {
      id: 2,
      title:
        'R36S Official Website - The Ultimate Gaming Experience at Your Fingertips',
      sections: [
        {
          subtitle:
            'R36S Official Website - The Ultimate Gaming Experience at Your Fingertips',
          content: `Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today.`,
        },
        {
          subtitle:
            'Discover the Revolutionary R36S Handheld Gaming Experience',
          content: `The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.`,
        },
        {
          subtitle: 'Unmatched Performance in the R36S Game Console',
          content: `The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more.`,
        },
        {
          subtitle:
            "Enhanced Gaming Experience with the R36S Handheld's Exclusive Features",
          content: `The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility.`,
        },
        {
          subtitle:
            'Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs',
          content: `The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device.`,
        },
        {
          subtitle:
            'The Future of Gaming with the R36S Official Website and Upcoming Innovations',
          content: `The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation.`,
        },
      ],
    },
  ];

  // Создаем HTML структуру для статей с учетом SEO-оптимизации
  const articlesGrid = articlesSection.querySelector('.articles__grid');

  if (!articlesGrid) {
    console.error('Элемент .articles__grid не найден в секции Articles');
    return;
  }

  // Добавляем метатеги для SEO
  const addMetaTags = () => {
    // Добавляем метатег description, если его еще нет
    if (!document.querySelector('meta[name="description"]')) {
      const metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content =
        'R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options.';
      document.head.appendChild(metaDesc);
    }

    // Добавляем метатег keywords, если его еще нет
    if (!document.querySelector('meta[name="keywords"]')) {
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content =
        'R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device';
      document.head.appendChild(metaKeywords);
    }
  };

  // Вызываем функцию добавления метатегов
  addMetaTags();

  // Инициализируем массив для хранения ссылок на элементы статей для анимации
  const articleElements = [];

  // Создаем статьи и добавляем их в контейнер с улучшенной семантической разметкой
  articles.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.className = 'article';
    articleElement.id = `article-${article.id}`;
    articleElement.dataset.articleId = article.id;
    articleElement.style.opacity = '0';
    articleElement.style.transform = 'translateY(20px)';
    articleElement.style.transition = 'all 0.6s ease-out';

    // Добавляем микроразметку Schema.org для статьи
    articleElement.setAttribute('itemscope', '');
    articleElement.setAttribute('itemtype', 'http://schema.org/Article');

    // Добавляем заголовок статьи с микроразметкой
    const titleElement = document.createElement('h2');
    titleElement.className = 'article__title';
    titleElement.setAttribute('itemprop', 'headline');
    titleElement.innerHTML = article.title;
    articleElement.appendChild(titleElement);

    // Создаем контейнер для контента с микроразметкой
    const contentContainer = document.createElement('div');
    contentContainer.className = 'article__content-wrapper';
    contentContainer.setAttribute('itemprop', 'articleBody');

    // Добавляем секции статьи с улучшенной SEO-разметкой
    article.sections.forEach((section, index) => {
      const sectionContainer = document.createElement('section');
      sectionContainer.className = 'article__section';
      sectionContainer.id = `section-${article.id}-${index}`;

      // Добавляем подзаголовок только если это не первый раздел или подзаголовок отличается от заголовка
      if (index !== 0 || section.subtitle !== article.title) {
        const subtitleElement = document.createElement('h3');
        subtitleElement.className = 'article__subtitle';
        subtitleElement.innerHTML = section.subtitle;
        sectionContainer.appendChild(subtitleElement);
      }

      const contentElement = document.createElement('div');
      contentElement.className = 'article__content';

      // Добавляем содержимое с HTML-тегами для SEO
      contentElement.innerHTML = section.content;

      sectionContainer.appendChild(contentElement);
      contentContainer.appendChild(sectionContainer);
    });

    articleElement.appendChild(contentContainer);

    // Добавляем структурированные данные для поисковых роботов
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.sections[0].content.substring(0, 150) + '...',
      keywords: 'R36S, retro gaming, handheld console, portable gaming',
      author: {
        '@type': 'Organization',
        name: 'R36S Official',
      },
      publisher: {
        '@type': 'Organization',
        name: 'R36S',
        logo: {
          '@type': 'ImageObject',
          url: '/assets/images/r36s-logo.png',
        },
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    };
    structuredDataScript.textContent = JSON.stringify(structuredData);
    articleElement.appendChild(structuredDataScript);

    // Добавляем семантическую разметку footer для статьи
    const articleFooter = document.createElement('footer');
    articleFooter.className = 'article__footer';

    // Добавляем CTA с микроразметкой
    const ctaButton = document.createElement('a');
    ctaButton.href = 'https://www.aliexpress.com/item/1005007171465465.html';
    ctaButton.className = 'article__cta';
    ctaButton.textContent = 'Order R36S Now';
    ctaButton.setAttribute('itemprop', 'url');
    ctaButton.setAttribute('title', 'Order R36S Gaming Console');
    ctaButton.setAttribute('rel', 'nofollow');
    ctaButton.setAttribute('target', '_blank');
    articleFooter.appendChild(ctaButton);

    articleElement.appendChild(articleFooter);

    articlesGrid.appendChild(articleElement);
    articleElements.push(articleElement);
  });

  // Инициализируем IntersectionObserver для анимации появления статей
  const setupAnimations = () => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
              // Отключаем наблюдение после появления элемента
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      // Начинаем наблюдение за каждой статьей
      articleElements.forEach(article => {
        observer.observe(article);
      });
    } else {
      // Запасной вариант для браузеров без поддержки IntersectionObserver
      articleElements.forEach(article => {
        article.style.opacity = 1;
        article.style.transform = 'translateY(0)';
      });
      console.warn(
        'IntersectionObserver не поддерживается. Анимация появления отключена.'
      );
    }
  };

  // Добавляем хлебные крошки для SEO
  const addBreadcrumbs = () => {
    const breadcrumbsContainer = document.createElement('nav');
    breadcrumbsContainer.className = 'articles__breadcrumbs';
    breadcrumbsContainer.setAttribute('aria-label', 'Breadcrumbs');

    // Добавляем микроразметку Schema.org для хлебных крошек
    breadcrumbsContainer.setAttribute('itemscope', '');
    breadcrumbsContainer.setAttribute(
      'itemtype',
      'https://schema.org/BreadcrumbList'
    );

    const breadcrumbsList = document.createElement('ol');
    breadcrumbsList.className = 'breadcrumbs__list';

    // Домашняя страница
    const homeCrumb = document.createElement('li');
    homeCrumb.className = 'breadcrumbs__item';
    homeCrumb.setAttribute('itemprop', 'itemListElement');
    homeCrumb.setAttribute('itemscope', '');
    homeCrumb.setAttribute('itemtype', 'https://schema.org/ListItem');

    const homeLink = document.createElement('span');
    homeLink.className = 'breadcrumbs__link';
    homeLink.setAttribute('itemprop', 'item');
    homeLink.innerHTML = '<span itemprop="name">Home</span>';
    homeCrumb.appendChild(homeLink);

    const homePosition = document.createElement('meta');
    homePosition.setAttribute('itemprop', 'position');
    homePosition.content = '1';
    homeCrumb.appendChild(homePosition);

    // Текущая страница (R36S)
    const currentCrumb = document.createElement('li');
    currentCrumb.className = 'breadcrumbs__item';
    currentCrumb.setAttribute('itemprop', 'itemListElement');
    currentCrumb.setAttribute('itemscope', '');
    currentCrumb.setAttribute('itemtype', 'https://schema.org/ListItem');

    const currentSpan = document.createElement('span');
    currentSpan.className = 'breadcrumbs__current';
    currentSpan.setAttribute('itemprop', 'name');
    currentSpan.textContent = 'R36S Gaming Console';
    currentCrumb.appendChild(currentSpan);

    const currentPosition = document.createElement('meta');
    currentPosition.setAttribute('itemprop', 'position');
    currentPosition.content = '2';
    currentCrumb.appendChild(currentPosition);

    // Добавляем элементы в список
    breadcrumbsList.appendChild(homeCrumb);
    breadcrumbsList.appendChild(currentCrumb);
    breadcrumbsContainer.appendChild(breadcrumbsList);

    // Добавляем хлебные крошки перед сеткой статей
    articlesSection
      .querySelector('.articles__container')
      .insertBefore(breadcrumbsContainer, articlesGrid);
  };

  // Вызываем функцию добавления хлебных крошек
  addBreadcrumbs();

  // Добавляем заголовок секции для SEO
  const addSectionHeading = () => {
    const sectionHeading = document.createElement('h1');
    sectionHeading.className = 'articles__heading';
    sectionHeading.textContent = 'R36S Gaming Console - Official Information';

    // Добавляем заголовок перед хлебными крошками
    articlesSection
      .querySelector('.articles__container')
      .insertBefore(
        sectionHeading,
        articlesSection.querySelector('.articles__breadcrumbs')
      );
  };

  // Вызываем функцию добавления заголовка
  addSectionHeading();
  setTimeout(() => {
    initFaqAccordion();
  }, 500);
  // Запускаем анимации с небольшой задержкой, чтобы DOM успел обработаться
  setTimeout(setupAnimations, 100);

  console.log('Инициализация секции Articles завершена успешно');
}
