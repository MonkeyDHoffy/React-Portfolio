import React from 'react';
import './banner.css';
import { useLang } from '../../context/LanguageContext';

export default function Banner({ children }) {
  const { t } = useLang();

  const content = (
    <>
      <div className="text-text-secondary font-karla text-[32px] leading-[120%]">{t('hero.bannerone')}</div>
      <div style={{ width: '8px', height: '8px', backgroundColor: '#3DCFB6', borderRadius: '50%' }}></div>
      <div className="text-text-secondary font-karla text-[32px] leading-[120%]">{t('hero.bannertwo')}</div>
      <div style={{ width: '8px', height: '8px', backgroundColor: '#3DCFB6', borderRadius: '50%' }}></div>
      <div className="text-text-secondary font-karla text-[32px] leading-[120%]">{t('hero.bannerthree')}</div>
      <div style={{ width: '8px', height: '8px', backgroundColor: '#3DCFB6', borderRadius: '50%' , marginRight: '56px'}}></div>
    </>
  );

  return (
    <div className="banner-wrapper">
      <div className="banner-track">
        <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
            <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
            <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
        <div className="banner-content">{content}</div>
      </div>
      {children}
    </div>
  );
}