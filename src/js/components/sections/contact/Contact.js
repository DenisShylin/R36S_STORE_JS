// src/js/sections/contact/Contact.js
import { Component } from '../../../core/Component.js';

export class Contact extends Component {
  constructor(container, props) {
    super(container, props);

    this.state = {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      isSubmitting: false,
      error: '',
    };

    // Привязываем методы к контексту
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  /**
   * Рендерит компонент
   */
  render() {
    const { i18n } = this.props;
    const translate = key => i18n?.translate(key) || key;
    const { formData, isSubmitting, error } = this.state;

    return `
      <section class="contact" id="contact">
        <div class="contact__noise"></div>
        <div class="contact__container">
          <div class="contact__header">
            <span class="contact__label" data-i18n="contact.label">${translate(
              'contact.label'
            )}</span>
            <h2 class="contact__title" data-i18n="contact.title">${translate(
              'contact.title'
            )}</h2>
            <p class="contact__description" data-i18n="contact.description">${translate(
              'contact.description'
            )}</p>
          </div>

          <div class="contact__content">
            <form class="contact__form" id="contact-form">
              ${
                error
                  ? `
                <div class="form__error">
                  <svg class="form__error-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>${error}</span>
                </div>
              `
                  : ''
              }

              <div class="form__group">
                <label class="form__label" for="name">
                  <svg class="form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span data-i18n="contact.form.name">${translate(
                    'contact.form.name'
                  )}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form__input"
                  value="${formData.name}"
                  placeholder="John Smith"
                  ${isSubmitting ? 'disabled' : ''}
                  required
                />
              </div>

              <div class="form__group">
                <label class="form__label" for="email">
                  <svg class="form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span data-i18n="contact.form.email">${translate(
                    'contact.form.email'
                  )}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form__input"
                  value="${formData.email}"
                  placeholder="example@email.com"
                  ${isSubmitting ? 'disabled' : ''}
                  required
                />
              </div>

              <div class="form__group">
                <label class="form__label" for="phone">
                  <svg class="form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span data-i18n="contact.form.phone">${translate(
                    'contact.form.phone'
                  )}</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="form__input"
                  value="${formData.phone}"
                  placeholder="+7 (___) ___-__-__"
                  ${isSubmitting ? 'disabled' : ''}
                  required
                />
              </div>

              <div class="form__group">
                <label class="form__label" for="message">
                  <svg class="form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span data-i18n="contact.form.message">${translate(
                    'contact.form.message'
                  )}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="form__textarea"
                  placeholder="Write your message..."
                  ${isSubmitting ? 'disabled' : ''}
                  required
                >${formData.message}</textarea>
              </div>

              <button
                type="submit"
                class="form__button"
                ${isSubmitting ? 'disabled' : ''}
              >
                <svg class="button__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span data-i18n="contact.form.${
                  isSubmitting ? 'sending' : 'send'
                }">${translate(
      isSubmitting ? 'contact.form.sending' : 'contact.form.send'
    )}</span>
              </button>
            </form>

            <div class="contact__info">
              <div class="info__card">
                <svg class="info__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h3 class="info__title" data-i18n="contact.info.phone">${translate(
                  'contact.info.phone'
                )}</h3>
                <p class="info__text">+7 (800) 555-35-35</p>
                <p class="info__text" data-i18n="contact.info.phone_hours">${translate(
                  'contact.info.phone_hours'
                )}</p>
              </div>

              <div class="info__card">
                <svg class="info__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <h3 class="info__title" data-i18n="contact.info.email">${translate(
                  'contact.info.email'
                )}</h3>
                <p class="info__text">support@R36S.com</p>
                <p class="info__text">sales@R36S.com</p>
              </div>

              <div class="info__card">
                <svg class="info__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 class="info__title" data-i18n="contact.info.address">${translate(
                  'contact.info.address'
                )}</h3>
                <p class="info__text">Zhejiang, China.</p>
                <p class="info__text" data-i18n="contact.info.address_info">${translate(
                  'contact.info.address_info'
                )}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Выполняет действия после рендеринга
   */
  afterRender() {
    // Добавляем обработчики для формы
    const form = this.container.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', this._handleSubmit);

      // Добавляем обработчики для полей формы
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        this.addEventListeners(input, 'input', this._handleChange);
      });
    }
  }

  /**
   * Обработчик изменения полей формы
   * @param {Event} e - Событие изменения
   */
  _handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
      error: '', // Сбрасываем ошибку при изменении поля
    });
  }

  /**
   * Обработчик отправки формы
   * @param {Event} e - Событие отправки
   */
  async _handleSubmit(e) {
    e.preventDefault();

    const { formData } = this.state;

    // Включаем состояние отправки
    this.setState({ isSubmitting: true, error: '' });

    try {
      // Проверка обязательных полей
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.message
      ) {
        throw new Error(
          this.props.i18n?.translate('contact.form.error') ||
            'Please fill in all fields'
        );
      }

      // Валидация email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email');
      }

      // Валидация телефона
      const phoneRegex = /^\+?[0-9]{10,14}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
        throw new Error('Please enter a valid phone number.');
      }

      // Имитация отправки на сервер
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Очистка формы после успешной отправки
      this.setState({
        formData: {
          name: '',
          email: '',
          phone: '',
          message: '',
        },
        isSubmitting: false,
      });

      // Показываем сообщение об успешной отправке
      alert('Message sent successfully! We will contact you shortly.');
    } catch (error) {
      // В случае ошибки
      this.setState({
        isSubmitting: false,
        error:
          error.message ||
          'There was an error sending your message. Please try again later.',
      });

      console.error('Form submission error:', error);
    }
  }

  /**
   * Уничтожает компонент и очищает ресурсы
   */
  destroy() {
    // Удаляем обработчик отправки формы
    const form = this.container.querySelector('#contact-form');
    if (form) {
      form.removeEventListener('submit', this._handleSubmit);
    }

    super.destroy();
  }
}
