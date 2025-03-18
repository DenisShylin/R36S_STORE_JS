// Инициализатор секции Products
export function initProducts() {
  console.log('Products секция инициализирована');

  // Определяем базовый путь с учетом режима разработки/продакшн
  const isDevelopment = import.meta.env
    ? import.meta.env.MODE === 'development'
    : true;
  const basename = isDevelopment ? '/' : '/R36S_STORE_JS/';

  // Данные из constants/productData.js с исправленными путями
  const productImages = {
    i0_0: {
      jpg: `${basename}img/products/i_0_0x.jpg`,
      webp: `${basename}img/products/i_0_0x.webp`,
    },
    i1: {
      jpg: `${basename}img/products/i_1_1x.jpg`,
      webp: `${basename}img/products/i_1_1x.webp`,
    },
    i2: {
      jpg: `${basename}img/products/i_2_1x.jpg`,
      webp: `${basename}img/products/i_2_1x.webp`,
    },
    i3: {
      jpg: `${basename}img/products/i_3_1x.jpg`,
      webp: `${basename}img/products/i_3_1x.webp`,
    },
    i4: {
      jpg: `${basename}img/products/i_4_1x.jpg`,
      webp: `${basename}img/products/i_4_1x.webp`,
    },
    i5: {
      jpg: `${basename}img/products/i_5_1x.jpg`,
      webp: `${basename}img/products/i_5_1x.webp`,
    },
    i6: {
      jpg: `${basename}img/products/i_6_1x.jpg`,
      webp: `${basename}img/products/i_6_1x.webp`,
    },
    i7: {
      jpg: `${basename}img/products/i_7_1x.jpg`,
      webp: `${basename}img/products/i_7_1x.webp`,
    },
    i8: {
      jpg: `${basename}img/products/i_8_1x.jpg`,
      webp: `${basename}img/products/i_8_1x.webp`,
    },
    i9: {
      jpg: `${basename}img/products/i_9_1x.jpg`,
      webp: `${basename}img/products/i_9_1x.webp`,
    },
    i10: {
      jpg: `${basename}img/products/i_10_1x.jpg`,
      webp: `${basename}img/products/i_10_1x.webp`,
    },
  };

  // Структура данных секций (остальной код без изменений)
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: {
        text: `Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

Essential Items:
- R36S handheld device
- Computer with USB port
- MicroSD cards (suggestions: 16GB for custom firmware, 128GB for game files)
- MicroSD card reader
- Recommended software: Balena Etcher, Rufus, 7-Zip, MiniTool Partition Wizard
- Optional: Linux system or Ubuntu Live USB

All information provided is for educational purposes, and users accept full responsibility for any potential damage to their hardware.

To identify which version of the R36S you have, use the quick identification tool on the R36 Wiki – "Screen Identification Guide". This step is crucial as it determines which custom firmware image is compatible with your device.`,
        images: {
          jpg: productImages.i0_0.jpg,
          webp: productImages.i0_0.webp,
        },
      },
    },
    {
      id: 'original-backup',
      title: 'Creating Original Firmware Backup',
      content: {
        text: `This step can be critical in your modification journey. Having a complete backup of the stock firmware ensures you can restore your device if anything goes wrong during the flashing process, or if you want to revert to the original state later.`,
        subsections: [
          {
            id: 'backup-procedure',
            title: 'Backup Using Win32DiskImager',
            content: {
              text: `1. Launch Win32DiskImager: Click the folder icon in the "Image File" section and select a location to save your backup, making sure to add the .img extension to your filename.
              
2. Select the device: Choose the drive letter corresponding to your R36S. *Exercise extreme caution during this selection to avoid accidentally erasing unintended drives.
              
3. Enable Read Only mode: Make sure the "Read Only Allocated Partitions" option is selected to avoid copying empty sectors along with the data.
              
4. Start the backup: Click the "Read" button to begin creating the backup image file at your chosen location.`,
              images: {
                jpg: productImages.i1.jpg,
                webp: productImages.i1.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'custom-installation',
      title: 'Installing Custom Firmware',
      content: {
        text: `As mentioned previously, one of your first priorities should be obtaining a quality brand-name SD card. The cards included with the R36S are typically unreliable. It's not a question of if they will fail, but when.

Single vs. Dual Card Configuration – The R36S features two microSD card slots. You can choose to have everything on a single card or separate the operating system from your game collection.`,
        subsections: [
          {
            id: 'method-balena',
            title: 'Option 1: Balena Etcher Method',
            content: {
              text: `While the general process is similar for all custom firmware options, there are some differences to note during installation.

1. Start Balena Etcher and select "Flash From File", then browse to your downloaded .img firmware file.
              
2. Select "Select Target" and choose your blank SD card from the device list.
              
3. Allow Balena Etcher to write and verify the image, and you're finished!
              
*Note – If verification fails with ArkOS using Balena Etcher, the installation may still work correctly, but you can try alternative image writing software if preferred.`,
              images: {
                jpg: productImages.i2.jpg,
                webp: productImages.i2.webp,
              },
            },
          },
          {
            id: 'method-win32',
            title: 'Option 2: Win32DiskImager Method',
            content: {
              text: `1. Open Win32DiskImager and click the folder icon in the "Image File" section to select your downloaded custom firmware.
              
2. Select destination: Choose the correct SD card as your target device. Double-check to ensure you're writing to the correct location.
              
3. Write image: Click the Write button to begin the flashing process.`,
              images: {
                jpg: productImages.i3.jpg,
                webp: productImages.i3.webp,
              },
            },
          },
          {
            id: 'method-raspberry',
            title: 'Option 3: Raspberry Pi Imager',
            content: {
              text: `1. Open Raspberry Pi Imager and click "Choose OS", then select "Use Custom" to locate your firmware file.
              
2. Select storage: Choose your SD card carefully, NOT your computer's internal drive!
              
3. Begin writing: Click the Write button to start flashing the image.`,
              images: {
                jpg: productImages.i4.jpg,
                webp: productImages.i4.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'firmware-options',
      title: 'R36S Firmware Options',
      content: {
        text: `Several custom firmware options are available for the R36S. Here are the most popular choices:`,
        subsections: [
          {
            id: 'option-arkos',
            title: 'ArkOS - Community Enhanced Edition',
            content: {
              text: `GitHub Repository: ArkOS Community Edition

This is a community-maintained fork of ArkOS developed by AeolusUX specifically for the 36S family of devices.
              
Installation guide:
1. Download the latest ArkOS release from the project's GitHub page
2. Extract the image file using 7-Zip, WinRAR, or similar extraction tool
3. Flash the image to an SD card using your preferred imaging software
4. If necessary, replace the DTB file on the boot partition based on your screen type
5. Insert the SD card into your R36S
6. Power on and follow on-screen setup instructions`,
              images: {
                jpg: productImages.i5.jpg,
                webp: productImages.i5.webp,
              },
            },
          },
          {
            id: 'option-rocknix',
            title: 'ROCKNIX Operating System',
            content: {
              text: `GitHub Repository: ROCKNIX

Installation guide:
1. Download the latest ROCKNIX release from the GitHub repository
2. Extract the image file using your preferred extraction tool
3. Write the image to an SD card using any supported imaging software
4. Insert the SD card into your R36S device and power it on
5. Complete the initial configuration by following the on-screen prompts`,
              images: {
                jpg: productImages.i6.jpg,
                webp: productImages.i6.webp,
              },
            },
          },
          {
            id: 'option-amber',
            title: 'AmberELEC System',
            content: {
              text: `GitHub Repository: AmberELEC

Installation guide:
1. Download the AmberELEC image specifically for R36S from their GitHub repository
2. Flash the image to an SD card using Balena Etcher or an equivalent tool
3. Insert the SD card into your R36S handheld and power it on
4. Follow the on-screen instructions to finalize the setup process`,
              images: {
                jpg: productImages.i7.jpg,
                webp: productImages.i7.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'game-setup',
      title: 'Adding Games and BIOS Files',
      content: {
        text: `1. For dual-card setups, format your second card to FAT32 or exFAT (depending on your card capacity)

2. Connect your R36S to your computer via USB cable, or remove the game storage SD card and connect it directly to your PC.

3. Copy your game files to the appropriate directories on the SD card. NOTE: North American users may be confused by some folder names initially. All systems use their original regional names, so NES is labeled as FC (Famicom), Genesis as MD (Mega Drive), and so on.

4. Reinsert the SD card and refresh your game lists through the system menu.`,
        images: {
          jpg: productImages.i8.jpg,
          webp: productImages.i8.webp,
        },
      },
    },
    {
      id: 'helpful-tips',
      title: 'Usage Tips',
      content: {
        text: `• NEVER force shutdown by holding the power button. Your device now functions like a computer that requires proper shutdown. Press START and navigate to QUIT —-> Shutdown

• You can switch between Nintendo (default) or Xbox button layouts. Press START and go to Advanced Settings —-> Switch A/B

• Change system themes locally by pressing START and navigating to UI Settings —-> Themes

• A quick press of the power button will put the device into standby mode.`,
        images: {
          jpg: productImages.i9.jpg,
          webp: productImages.i9.webp,
        },
      },
    },
    {
      id: 'downloads',
      title: 'Available Downloads',
      content: {
        downloads: [
          {
            file: 'Firmware v1.0.4 2024.04.13',
            link: 'https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit',
            date: '2024.04.13',
            version: 'v1.0.4',
          },
          {
            file: 'ArkOS_K36_v2.0_03112025.img.xz',
            link: 'https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view',
            date: '2023.12.22',
            version: 'v1.0.3',
          },
          {
            file: 'ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz',
            link: 'https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view',
            date: '2023.11.16',
            version: 'v1.0.2',
          },
          {
            file: 'ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz',
            link: 'https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view',
            date: '2023.11.05',
            version: 'v1.0.0',
          },
        ],
      },
    },
  ];

  let activeSection = 'downloads';
  let isMobile = false;

  // Получение DOM элементов
  const productsNavList = document.getElementById('products-nav-list');
  const productsSections = document.getElementById('products-sections');
  const nav = document.getElementById('products-nav');

  // Проверка на мобильное устройство
  function checkMobile() {
    isMobile = window.innerWidth <= 1024;
    if (nav) {
      if (isMobile) {
        nav.classList.add('nav-mobile');
      } else {
        nav.classList.remove('nav-mobile');
      }
    }
  }

  // Обработчик переключения между секциями
  function handleSectionClick(sectionId) {
    activeSection = sectionId;

    // Обновление активных классов в навигации
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.dataset.sectionId === sectionId) {
        item.classList.add('nav-item-active');
      } else {
        item.classList.remove('nav-item-active');
      }
    });

    // Обновление видимости секций
    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('section-active');
      } else {
        section.classList.remove('section-active');
      }
    });

    // Прокрутка к активной секции с учетом мобильного устройства
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = isMobile ? 80 : 20; // Больший отступ для мобильных
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  }

  // Формирование HTML для меню навигации
  function renderNavigation() {
    productsNavList.innerHTML = '';

    sections.forEach(section => {
      const navItem = document.createElement('button');
      navItem.className = `nav-item ${
        activeSection === section.id ? 'nav-item-active' : ''
      }`;
      navItem.dataset.sectionId = section.id;
      navItem.innerHTML = `
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${section.title}</span>
      `;
      navItem.addEventListener('click', () => handleSectionClick(section.id));
      productsNavList.appendChild(navItem);
    });
  }

  // Формирование HTML для содержимого секции
  function renderSectionContent(section) {
    if (section.id === 'downloads') {
      let html = '<div class="download-list">';

      section.content.downloads.forEach(item => {
        html += `
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${item.file}</div>
                <div class="download-meta">Update: ${item.date} • ${item.version}</div>
              </div>
            </div>
            <a href="${item.link}" class="download-button" target="_blank">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `;
      });

      html += '</div>';
      return html;
    }

    let html = '<div class="section-content"><div class="text-content">';

    // Добавление текста с разбивкой на параграфы
    const paragraphs = section.content.text.split('\n');
    paragraphs.forEach(paragraph => {
      html += `<p>${paragraph.trim()}</p>`;
    });

    html += '</div>';

    // Добавление изображений если они есть
    if (section.content.images) {
      html += `
        <div class="image-container">
          <picture>
            <source srcset="${section.content.images.webp}" type="image/webp">
            <img src="${section.content.images.jpg}" alt="${section.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `;
    }

    // Добавление подразделов если они есть
    if (section.content.subsections) {
      html += '<div class="subsections">';

      section.content.subsections.forEach(subsection => {
        html += `
          <div class="subsection">
            <h3 class="subsection-title">${subsection.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `;

        // Добавление текста подраздела
        const subParagraphs = subsection.content.text.split('\n');
        subParagraphs.forEach(paragraph => {
          html += `<p>${paragraph.trim()}</p>`;
        });

        html += '</div>';

        // Добавление изображений подраздела
        if (subsection.content.images) {
          html += `
            <div class="image-container">
              <picture>
                <source srcset="${subsection.content.images.webp}" type="image/webp">
                <img src="${subsection.content.images.jpg}" alt="${subsection.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `;
        }

        html += '</div></div>';
      });

      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  // Формирование HTML для всех секций
  function renderSections() {
    productsSections.innerHTML = '';

    sections.forEach(section => {
      const sectionElement = document.createElement('section');
      sectionElement.id = section.id;
      sectionElement.className = `section ${
        activeSection === section.id ? 'section-active' : ''
      }`;

      sectionElement.innerHTML = `
        <h2 class="section-title">${section.title}</h2>
        ${renderSectionContent(section)}
      `;

      productsSections.appendChild(sectionElement);
    });
  }

  // Инициализация компонента
  function initialize() {
    checkMobile();
    renderNavigation();
    renderSections();

    // Добавление слушателя для изменения размера окна
    window.addEventListener('resize', checkMobile);

    console.log(
      'Products: Инициализация завершена. Используются пути к изображениям без /public/'
    );
  }

  // Запуск инициализации, если DOM элементы найдены
  if (productsNavList && productsSections && nav) {
    initialize();
  } else {
    console.error('Не найдены необходимые DOM элементы для секции Products');
  }

  // Возвращаем методы, которые могут быть полезны для внешнего использования
  return {
    handleSectionClick,
    checkMobile,
  };
}
