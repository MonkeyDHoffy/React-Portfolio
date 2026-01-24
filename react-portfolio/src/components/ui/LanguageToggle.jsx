import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';

export default function LanguageToggle({ size = 'default' }) {
  const { lang, setLang } = useLang();
  const [isHover, setIsHover] = useState(false);

  const base = lang === 'en' ? 'english' : 'german';
  const imgSrc = `/assets/headerpics/${base}${isHover ? 'Hover' : ''}.png`;
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'de' : 'en'));

  const BUTTON_BASE = 'inline-flex items-center justify-center rounded-[100px] bg-transparent overflow-hidden shrink-0 border-text-primary rotate-0 opacity-100';
  const SIZE_CLASSES = { default: 'w-[84px] h-[28px]' };

  return (
    <button
      type="button"
      className={`${BUTTON_BASE} ${SIZE_CLASSES[size]}`}
      aria-label={`Language: ${lang === 'en' ? 'English' : 'Deutsch'}`}
      onClick={toggleLang}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={imgSrc} alt={lang === 'en' ? 'English' : 'Deutsch'} className="block h-full w-auto object-contain" />
    </button>
  );
}

