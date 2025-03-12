// Categories.js - Инициализация секции категорий

export function initCategories() {
  console.log('Инициализация секции Categories');

  // Получаем необходимые элементы
  const videoElement = document.querySelector('.categories__video');
  const videoPlaceholder = document.querySelector(
    '.categories__video-placeholder'
  );
  const sectionRef = document.getElementById('categories');
  const contentRef = document.querySelector('.categories__content');
  const playButton = document.querySelector('.categories__video-play');
  const muteButton = document.querySelector('.categories__video-mute');
  const videoSlider = document.querySelector('.categories__video-slider');
  const videoContainer = document.querySelector('.categories__video-container');
  const currentTimeElement = document.querySelector(
    '.categories__video-time span:first-child'
  );
  const durationElement = document.querySelector(
    '.categories__video-time span:last-child'
  );

  // Проверка наличия необходимых элементов
  if (!sectionRef) {
    console.error('Секция Categories не найдена в DOM');
    return {};
  }

  if (!contentRef) {
    console.warn('Элемент categories__content не найден');
  }

  let isPlaying = false;
  let isMuted = true;
  let videoLoaded = false;
  let videoError = false;

  // Функция форматирования времени
  const formatTime = time => {
    if (isNaN(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Функция обновления иконки кнопки воспроизведения
  function updatePlayButtonIcon() {
    if (!playButton) return;

    playButton.innerHTML = isPlaying
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="6" y="4" width="4" height="16"></rect>
           <rect x="14" y="4" width="4" height="16"></rect>
         </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="5 3 19 12 5 21 5 3"></polygon>
         </svg>`;
  }

  // Функция обновления иконки кнопки включения/выключения звука
  function updateMuteButtonIcon() {
    if (!muteButton) return;

    muteButton.innerHTML = isMuted
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
           <line x1="23" y1="9" x2="17" y2="15"></line>
           <line x1="17" y1="9" x2="23" y2="15"></line>
         </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
           <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
         </svg>`;
  }

  // Функция переключения воспроизведения
  function togglePlay() {
    if (!videoElement || videoError) return;

    if (isPlaying) {
      videoElement.pause();
      isPlaying = false;
    } else {
      // Используем Promise для обработки ошибок воспроизведения
      const playPromise = videoElement.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Воспроизведение видео успешно');
            isPlaying = true;
          })
          .catch(err => {
            console.warn('Не удалось воспроизвести видео:', err);
            isPlaying = false;
          })
          .finally(() => {
            updatePlayButtonIcon();
          });
        return; // Выходим, т.к. обновление будет в finally
      } else {
        isPlaying = true;
      }
    }

    updatePlayButtonIcon();
  }

  // Функция для ручной установки видео
  function setVideoSource(src) {
    if (!videoElement) return;

    // Удаляем все существующие элементы source
    while (videoElement.firstChild) {
      videoElement.removeChild(videoElement.firstChild);
    }

    // Создаем новый элемент source
    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';

    // Добавляем текст для браузеров, не поддерживающих видео
    const fallbackText = document.createTextNode(
      'Your browser does not support the video tag.'
    );

    // Добавляем элементы в видео
    videoElement.appendChild(source);
    videoElement.appendChild(fallbackText);

    // Загружаем видео
    videoElement.load();
  }

  // Создание запасного варианта для видео
  function createVideoFallback() {
    if (!videoContainer) return;

    // Отмечаем видео как ошибочное
    videoError = true;

    // Скрываем видео и показываем плейсхолдер
    if (videoElement) {
      videoElement.style.display = 'none';
    }

    videoContainer.innerHTML = `
      <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
        <div style="text-align: center; padding: 20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
            <path d="M8 16l12-8-12-8v16z"></path>
          </svg>
          <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
        </div>
      </div>
    `;
  }

  // Создаем наблюдателя для анимации появления
  if (window.IntersectionObserver && contentRef) {
    try {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            } else {
              if (videoElement && entry.target === sectionRef) {
                videoElement.muted = true;
                isMuted = true;
                updateMuteButtonIcon();
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      // Наблюдаем за секцией и содержимым
      observer.observe(contentRef);

      if (sectionRef) {
        observer.observe(sectionRef);
      }
    } catch (error) {
      console.error('Ошибка при инициализации IntersectionObserver:', error);
      // Добавляем класс animate-in сразу, если наблюдатель не работает
      if (contentRef) {
        contentRef.classList.add('animate-in');
      }
    }
  } else {
    // Для браузеров без поддержки IntersectionObserver
    if (contentRef) {
      contentRef.classList.add('animate-in');
    }
  }

  // Массив возможных путей к видео на основе подтвержденного рабочего пути
  const videoPaths = [
    // Подтвержденный рабочий путь
    '/video/categories/video_categories_.MP4',
    // Дополнительные пути на случай изменения окружения
    '/public/video/categories/video_categories_.MP4',
    '../video/categories/video_categories_.MP4',
    'video_categories_.MP4',
  ];

  // Функция для проверки доступности видео по URL
  function checkVideoURL(url) {
    return new Promise(resolve => {
      // Установим таймаут для запроса
      const timeoutId = setTimeout(() => {
        console.log(`Превышено время ожидания для ${url}`);
        resolve(false);
      }, 2000);

      fetch(url, { method: 'HEAD', cache: 'no-cache' })
        .then(response => {
          clearTimeout(timeoutId);
          if (response.ok) {
            console.log(`Видео доступно по пути: ${url}`);
            resolve(true);
          } else {
            console.log(
              `Видео недоступно по пути: ${url}, статус: ${response.status}`
            );
            resolve(false);
          }
        })
        .catch(error => {
          clearTimeout(timeoutId);
          console.warn(`Ошибка при проверке пути ${url}:`, error);
          resolve(false);
        });
    });
  }

  // Функция для последовательной проверки путей
  async function findWorkingVideoPath() {
    for (const path of videoPaths) {
      const isAvailable = await checkVideoURL(path);
      if (isAvailable) {
        return path;
      }
    }
    return null;
  }

  // Инициализация видео
  if (videoElement) {
    console.log('Видео элемент найден:', videoElement);

    // Устанавливаем базовые атрибуты
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.playsInline = true;

    // Добавляем обработчики событий до попытки загрузки

    // Обработчик успешной загрузки метаданных
    videoElement.addEventListener('loadedmetadata', () => {
      try {
        console.log('Метаданные видео загружены');
        videoLoaded = true;

        // Если есть плейсхолдер, скрываем его
        if (videoPlaceholder) {
          videoPlaceholder.style.display = 'none';
        }

        // Показываем видео
        videoElement.style.display = 'block';

        // Настраиваем ползунок времени
        if (videoSlider && !isNaN(videoElement.duration)) {
          videoSlider.max = videoElement.duration;

          if (durationElement) {
            durationElement.textContent = formatTime(videoElement.duration);
          }
        }

        // Пробуем автоматически воспроизвести
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Автовоспроизведение видео успешно');
              isPlaying = true;
              updatePlayButtonIcon();
            })
            .catch(err => {
              console.warn(
                'Автовоспроизведение видео не поддерживается, не критично:',
                err
              );
              // Не меняем isPlaying на мобильных устройствах
              updatePlayButtonIcon();
            });
        }
      } catch (err) {
        console.error('Ошибка при обработке метаданных видео:', err);
      }
    });

    // Обработчик обновления времени видео
    videoElement.addEventListener('timeupdate', () => {
      try {
        if (videoSlider && !isNaN(videoElement.currentTime)) {
          videoSlider.value = videoElement.currentTime;

          if (currentTimeElement) {
            currentTimeElement.textContent = formatTime(
              videoElement.currentTime
            );
          }
        }
      } catch (err) {
        console.error('Ошибка при обновлении времени видео:', err);
      }
    });

    // Обработчик ошибок загрузки видео
    videoElement.addEventListener('error', err => {
      console.error('Ошибка при загрузке видео:', err);
      // Если ни один источник не сработал, покажем запасной вариант
      if (!videoLoaded) {
        findWorkingVideoPath().then(workingPath => {
          if (workingPath) {
            console.log('Найден работающий путь к видео:', workingPath);
            setVideoSource(workingPath);
          } else {
            console.error('Ни один из путей к видео не работает');
            createVideoFallback();
          }
        });
      }
    });

    // Непосредственно пытаемся найти работающий путь к видео
    setTimeout(() => {
      // Если видео не загрузилось через 2 секунды, попробуем найти работающий путь
      if (!videoLoaded && !videoError) {
        console.log('Видео не загрузилось автоматически, ищем работающий путь');
        findWorkingVideoPath().then(workingPath => {
          if (workingPath) {
            console.log('Найден работающий путь к видео:', workingPath);
            setVideoSource(workingPath);
          } else {
            console.error('Ни один из путей к видео не работает');
            createVideoFallback();
          }
        });
      }
    }, 2000);
  } else {
    console.error('Видео элемент не найден в DOM');
    createVideoFallback();
  }

  // Назначаем обработчики событий для элементов управления
  if (playButton) {
    playButton.addEventListener('click', e => {
      e.stopPropagation();
      togglePlay();
    });
  }

  if (muteButton) {
    muteButton.addEventListener('click', e => {
      e.stopPropagation();

      if (videoElement) {
        isMuted = !isMuted;
        videoElement.muted = isMuted;
        updateMuteButtonIcon();
      }
    });
  }

  if (videoSlider) {
    videoSlider.addEventListener('input', e => {
      if (videoElement) {
        try {
          const time = parseFloat(e.target.value);
          if (!isNaN(time)) {
            videoElement.currentTime = time;
          }
        } catch (err) {
          console.error('Ошибка при изменении времени видео:', err);
        }
      }
    });
  }

  if (videoContainer) {
    videoContainer.addEventListener('click', e => {
      // Проверяем, что клик не был по элементам управления
      if (!e.target.closest('.categories__video-controls')) {
        togglePlay();
      }
    });
  }

  // Обновляем начальное состояние кнопок
  updatePlayButtonIcon();
  updateMuteButtonIcon();

  // Добавляем класс, указывающий, что инициализация завершена
  if (sectionRef) {
    sectionRef.classList.add('initialized');
  }

  return {
    // Возвращаем методы, которые могут понадобиться для взаимодействия с другими компонентами
    togglePlay,
    cleanup: () => {
      // Функция очистки ресурсов при необходимости
      if (videoElement) {
        videoElement.pause();
        videoElement.removeAttribute('src');
        videoElement.load();
      }
    },
  };
}

// Экспортируем дополнительные функции, если они нужны для других модулей
