import React, { useState } from "react";
import { useLang } from '../../context/LanguageContext';
import TechBadge from "../ui/TechBadge";
import closeSmall from "../../assets/projects/close_small.png";
import closeHover from "../../assets/projects/close.png";
import arrowForward from "../../assets/projects/arrow_forward.png";
import arrowOutward from "../../assets/projects/arrow_outward.png";
/**
 * Dynamisches Icon-Mapping (Vite):
 * - import.meta.glob lädt alle Bilddateien im Ordner assets/projects.
 * - { eager: true } sorgt dafür, dass die Dateien sofort (synchron) importiert werden.
 * - Wir extrahieren den Dateinamen ohne Endung, wandeln ihn in lowercase um
 *   (z. B. "Angular.png" -> "angular") und verwenden ihn als Schlüssel.
 * - Das Ergebnis ist ein Objekt wie { angular: "/assets/Angular.abcd123.png", ... },
 *   das wir im Rendern des Tech-Stacks nutzen.
 */
const projectIconModules = import.meta.glob(
  "../../assets/projects/*.{png,svg,jpg,jpeg}",
  { eager: true }
);
const projectIcons = Object.fromEntries(
  Object.entries(projectIconModules).map(([path, mod]) => {
    // Beispiel: path = "../../assets/projects/Angular.png"
    const file = path.split("/").pop();
    // name = "angular" (ohne Endung, in Kleinbuchstaben), passt zu tech.toLowerCase()
    const name = file ? file.replace(/\.[^.]+$/, "").toLowerCase() : "";
    // mod.default enthält die von Vite generierte URL zum Asset
    return [name, (mod && mod.default) || mod];
  })
);

export const ProjectSlide = ({
  index,
  title,
  question,
  description,
  techStack,
  imageSrc,
  imageAlt = "",
  primaryActions = [],
  nextLabel = "Next project →",
  onNextClick,
  onClose,
}) => {
  const { t } = useLang();

  const localize = (val) => {
    if (typeof val !== 'string') return val;
    const translated = t(val);
    return translated === val ? val : translated;
  };
  const [isCloseHover, setIsCloseHover] = useState(false);
  return (
    <div
      className="relative w-[min(92vw,1100px)] rounded-[30px] bg-background-greencontainer border border-secondary shadow-2xl my-8 font-karla green-card-gradient"
    >
      {/* Close Icon */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        onMouseEnter={() => setIsCloseHover(true)}
        onMouseLeave={() => setIsCloseHover(false)}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center hover:scale-110 transition"
      >
        <img
          src={isCloseHover ? closeHover : closeSmall}
          alt="Close"
          className="w-5 h-5 object-contain"
        />
      </button>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-6 md:px-10 lg:px-12 py-8 md:py-10">
        {/* Image – on mobile top, on desktop right */}
        <div className="order-first md:order-last md:w-1/2 md:flex md:flex-col md:justify-start">
          <div className="h-8 md:h-10" aria-hidden="true" />
          <div className="rounded-2xl  overflow-hidden">
            <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-between gap-8 text-white">
          <div>
            <p className="text-5xl md:text-6xl font-karla font-bold tracking-tight text-secondary ">{index}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary font-karla">{localize(title)}</h1>
          </div>

          <div className="space-y-4">
            <p className="font-firacode text-secondary text-base md:text-lg">{localize(question)}</p>
            <p className="font-karla text-primary leading-relaxed">{localize(description)}</p>
          </div>

          {/* Tech-Stack mit Icon links vom Namen (falls vorhanden) */}
          <div className="flex flex-wrap items-center gap-3">
            {techStack.map((tech) => (
              <TechBadge key={tech} label={tech} iconSrc={projectIcons[tech.toLowerCase()]} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10 lg:px-12 pb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:justify-between">
          {primaryActions.length > 0 && (
            <div className="flex flex-wrap gap-4 flex-1 w-full">
              {primaryActions.map((action) => {
                const base =
                  "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary font-karla";
                const variantClasses =
                  action.variant === "secondary"
                    ? "border border-white/30 bg-transparent hover:text-secondary hover:border-secondary transition-colors duration-1000 text-white font-karla"
                    : "bg-transparent border border-white/30 hover:text-secondary hover:border-secondary text-white transition-colors duration-1000 font-karla";
                const ButtonTag = action.href ? "a" : "button";
                return (
                  <ButtonTag
                    key={action.label}
                    href={action.href}
                    onClick={action.onClick}
                    className={`${base} ${variantClasses} gap-2`}
                    target={action.href ? "_blank" : undefined}
                    rel={action.href ? "noreferrer" : undefined}
                  >
                    <span>{localize(action.label)}</span>
                    <img src={arrowOutward} alt="Open" className="w-4 h-4" />
                  </ButtonTag>
                );
              })}
            </div>
          )}

          <button
            type="button"
            onClick={onNextClick}
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-white transition font-firacode self-end md:self-auto md:ml-auto"
          >
            <span>{nextLabel}</span>
            <img src={arrowForward} alt="Next" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
