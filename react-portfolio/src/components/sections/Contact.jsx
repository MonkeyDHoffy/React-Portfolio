import React from 'react';
import { useLang } from '../../context/LanguageContext';
import PageContainer from '../layout/PageContainer';

const Contact = () => {
  const { t } = useLang();
  return (
    <section className="text-white py-8 debug-component" id="contact">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT CARD */}
        <div className="rounded-2xl w-full lg:w-[568px]">
          <p className="text-sm font-karla text-secondary mb-4">
            {t('contact.label')}
          </p>

          <h2 className="text-5xl font-firacode font-bold text-secondary leading-tight mb-6">
            {t('contact.title')}
          </h2>

          <p className="text-lg font-semibold mb-3">
            {t('contact.question')}
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            {t('contact.blurb')}
          </p>

          <p className="text-gray-400">
            {t('contact.needdev')}{" "}
            <span className="text-secondary font-medium">
              {t('contact.needdev_cta')}
            </span>
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl w-full lg:w-[568px]">
          <form className="space-y-8">
            
            {/* Name */}
            <div className="">
              <label className="font-firacode block text-secondary text-sm mb-2">
                {t('contact.form.name_label')}
              </label>
              <input
                type="text"
                placeholder={t('contact.form.name_ph')}
                className="font-karla w-full bg-transparent border-b border-secondary focus:border-secondary outline-none py-2 text-white placeholder-gray-500 hover:placeholder-white transition-colors"
              />
            </div>

            {/* Email */}
            <div className="">
              <label className="font-firacode block text-secondary text-sm mb-2">
                {t('contact.form.email_label')}
              </label>
              <input
                type="email"
                placeholder={t('contact.form.email_ph')}
                className="font-karla w-full bg-transparent border-b border-secondary focus:border-secondary outline-none py-2 text-white placeholder-gray-500 hover:placeholder-white transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-firacode block text-secondary text-sm mb-2">
                {t('contact.form.message_label')}
              </label>
              <textarea
                rows={3}
                placeholder={t('contact.form.message_ph')}
                className="font-karla w-full bg-transparent border-b border-secondary focus:border-secondary outline-none py-2 text-white placeholder-gray-500 hover:placeholder-white transition-colors resize-none"
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <input
                type="checkbox"
                className="mt-1 accent-secondary hover:cursor-pointer"
              />
              <p className="font-karla">
                {t('contact.form.privacy_text').replace(t('contact.form.privacy_link'), '')}
                {" "}
                <span className="text-secondary hover:underline cursor-pointer">
                  {t('contact.form.privacy_link')}
                </span>
              </p>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="font-karla px-6 py-2 rounded-full border border-white/30 text-white hover:border-secondary hover:text-secondary transition"
              >
                {t('contact.form.submit')}
              </button>
            </div>

          </form>
        </div>

        </div>
      </PageContainer>
    </section>
  );
};

export default Contact;
