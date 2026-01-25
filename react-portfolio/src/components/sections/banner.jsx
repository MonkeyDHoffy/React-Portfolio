import React from 'react';
import './banner.css';
import { useLang } from '../../context/LanguageContext';

export default function Banner({ children }) {
  const { t } = useLang();

  return (
    <section className="banner-container gap-56">
      {/* direkte Kinder für gap */}
      <div className="text-text-secondary font-karla text-[32px] leading-[120%]">{t('hero.bannerone')}</div>
      <div style={{ width: '8px', height: '8px', backgroundColor: '#3DCFB6', borderRadius: '50%' }}></div>
      <div className="text-text-secondary font-karla text-[32px] leading-[120%]">{t('hero.bannertwo')}</div>
      <div style={{ width: '8px', height: '8px', backgroundColor: '#3DCFB6', borderRadius: '50%' }}></div>
      <div className="text-text-secondary font-karla text-[32px] leading-[120%]">{t('hero.bannerthree')}</div>
      {children}
    </section>
  );
}