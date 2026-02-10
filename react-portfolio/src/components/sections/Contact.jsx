/**
 * Contact form for hoffja.de
 *
 * Sends form data to:
 *   POST https://api.hoffja.de/api/send-mail
 *
 * Payload (JSON):
 * {
 *   name: string
 *   email: string
 *   message: string
 *   company?: string  // honeypot, must be empty
 * }
 *
 * Expected response:
 * 200 { status: "ok", message: "Message sent" }
 */

import React, { useEffect, useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import PageContainer from '../layout/PageContainer';
import FormField from '../ui/FormField';
import './contact.css';

const TOAST_DURATION = 4600;

const ToastMessage = ({ type, title, message, closeLabel, onDismiss }) => (
  <div
    className={`contact-toast contact-toast--${type}`}
    role={type === 'success' ? 'status' : 'alert'}
    aria-live={type === 'success' ? 'polite' : 'assertive'}
    style={{ '--toast-duration': `${TOAST_DURATION}ms` }}
  >
    <p className="contact-toast__title">{title}</p>
    <p className="contact-toast__message">{message}</p>
    <button
      type="button"
      className="contact-toast__close"
      aria-label={closeLabel}
      onClick={onDismiss}
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <span className="contact-toast__timer" />
  </div>
);

const Contact = () => {
  const { t } = useLang();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '', // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!notification) return undefined;

    // Keep the toast on screen only for the duration of its animation.
    const timeout = setTimeout(() => setNotification(null), TOAST_DURATION);
    return () => clearTimeout(timeout);
  }, [notification]);

  const showNotification = (type, message) => {
    setNotification({
      id: Date.now(),
      type,
      message,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setNotification(null);

    const honeypotValue = formData.company.trim();
    if (honeypotValue) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      company: '',
    };

    if (!payload.name || !payload.email || !payload.message) {
      showNotification('error', t('contact.form.error'));
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.hoffja.de/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      showNotification('success', t('contact.form.success'));
      setFormData({
        name: '',
        email: '',
        message: '',
        company: '',
      });
    } catch (err) {
      console.error('Contact form submission failed', err);
      showNotification('error', t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="text-white py-8 debug-component" id="contact">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT CARD */}
          <div className="rounded-2xl w-full lg:w-[var(--card-size)]">
            <p className="text-sm font-karla text-secondary mb-4">
              {t('contact.label')}
            </p>

            <h2 className="font-firacode font-bold text-secondary leading-tight mb-6 text-[clamp(22px,7vw,56px)]">
              {t('contact.title')}
            </h2>

            <p className="text-lg font-semibold mb-3">
              {t('contact.question')}
            </p>

            <p className="opacity-70 transition-opacity duration-300 mb-6 leading-relaxed">
              {t('contact.blurb')}
            </p>

            <p>
              {t('contact.needdev')}{' '}
              <span className="text-secondary font-medium">
                {t('contact.needdev_cta')}
              </span>
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-2xl w-full lg:w-[var(--card-size)]">
            <form className="space-y-8" onSubmit={handleSubmit}>

              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <FormField
                label={t('contact.form.name_label')}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.name_ph')}
                autoComplete="name"
                required
              />

              <FormField
                label={t('contact.form.email_label')}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.email_ph')}
                autoComplete="email"
                required
              />

              <FormField
                label={t('contact.form.message_label')}
                textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message_ph')}
                required
              />

              {/* Privacy */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-secondary hover:cursor-pointer"
                />
                <p className="font-karla">
                  {t('contact.form.privacy_text').replace(
                    t('contact.form.privacy_link'),
                    ''
                  )}{' '}
                  <span className="text-secondary hover:underline cursor-pointer">
                    {t('contact.form.privacy_link')}
                  </span>
                </p>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-karla px-6 py-2 rounded-full border transition ${
                  isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'border-white/30 text-white hover:border-secondary hover:text-secondary'
                }`}
              >
                {isSubmitting
                  ? t('contact.form.sending')
                  : t('contact.form.submit')}
              </button>

            </form>
          </div>
        </div>
      </PageContainer>

      {notification && (
        <ToastMessage
          key={notification.id}
          type={notification.type}
          title={
            notification.type === 'success'
              ? t('contact.form.status_success')
              : t('contact.form.status_error')
          }
          message={notification.message}
          closeLabel={t('contact.form.dismiss')}
          onDismiss={() => setNotification(null)}
        />
      )}
    </section>
  );
};

export default Contact;


// from fastapi import FastAPI
// from pydantic import BaseModel, EmailStr
//
// app = FastAPI()
//
//
// # Beschreibt das JSON, das wir erwarten:
// # {
// #   "name": "...",
// #   "email": "...",
// #   "message": "..."
// # }
// class ContactForm(BaseModel):
//     name: str
//     email: EmailStr
//     message: str
//
//
// @app.post("/api/send-mail")
// async def send_mail(form: ContactForm):
//     return {
//         "success": True,
//         "received": {
//             "name": form.name,
//             "email": form.email,
//             "message": form.message,
//         },
//     }



// das ist meine main.py, die den FastAPI-Server startet. Darin definiere ich auch die API-Route, die das Kontaktformular ansprechen wird. + honeypot verfahren
// from fastapi import FastAPI, HTTPException
// from pydantic import BaseModel, EmailStr, Field

// app = FastAPI()


// class ContactForm(BaseModel):
//     name: str = Field(..., min_length=1, max_length=100)
//     email: EmailStr
//     message: str = Field(..., min_length=1, max_length=2000)

//     # Honeypot-Feld (unsichtbar im Frontend)
//     company: str | None = None


// @app.post("/api/send-mail")
// async def send_mail(form: ContactForm):
//     # Honeypot-Check
//     if form.company:
//         raise HTTPException(
//             status_code=400,
//             detail="Bot detected"
//         )

//     # (Optional) Extra-Logik – hier später Mailversand
//     return {
//         "status": "ok",
//         "message": "Message accepted"
//     }
