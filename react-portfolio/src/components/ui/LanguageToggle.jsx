import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import english from '../../assets/headerpics/english.png';
import englishHover from '../../assets/headerpics/englishHover.png';
import german from '../../assets/headerpics/german.png';
import germanHover from '../../assets/headerpics/germanHover.png';

/**
 * LanguageToggle switches the language context and swaps the illustrated flag.
 * @param {{ size?: 'default' }} props
 * @returns {JSX.Element}
 */
export default function LanguageToggle({ size = 'default' }) {
  let { lang, setLang } = useLang();
  let [isHover, setIsHover] = useState(false);

  let imgSrc = (() => {
    if (lang === 'en') return isHover ? englishHover : english;
    return isHover ? germanHover : german;
  })();
  let toggleLang = () => setLang(prev => (prev === 'en' ? 'de' : 'en'));

  let BUTTON_BASE = 'inline-flex items-center justify-center rounded-[100px] bg-transparent overflow-hidden shrink-0 border-text-primary rotate-0 opacity-100';
  let SIZE_CLASSES = { default: 'w-[84px] h-[28px]' };

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

