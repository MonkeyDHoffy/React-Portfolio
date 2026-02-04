import React, { useState } from "react";
import closeSmall from "../../assets/projects/close_small.png";
import closeHover from "../../assets/projects/close.png";
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
        <div className="order-first md:order-last md:w-1/2">
          <div className="rounded-2xl  overflow-hidden">
            <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-between gap-8 text-white">
          <div>
            <p className="text-5xl md:text-6xl font-karla font-bold tracking-tight text-secondary ">{index}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary font-karla">{title}</h1>
          </div>

          <div className="space-y-4">
            <p className="font-firacode text-secondary text-base md:text-lg">{question}</p>
            <p className="font-karla text-primary leading-relaxed">{description}</p>
          </div>

          {/* Tech-Stack mit Icon links vom Namen (falls vorhanden) */}
          <div className="flex flex-wrap items-center gap-3">
            {techStack.map((tech) => (
              // Jedes Badge zeigt optional das dazugehörige Icon. Wir greifen case-insensitiv zu.
              <span key={tech} className="flex items-center gap-2 px-3 py-1 rounded-full border-white/20 text-sm text-white/90 font-firacode">
                {/* Nur rendern, wenn ein Icon zur Technologie existiert (z. B. assets/projects/Angular.png) */}
                {projectIcons[tech.toLowerCase()] && (
                  <img
                    src={projectIcons[tech.toLowerCase()]}
                    alt={`${tech} icon`}
                    className="w-5 h-5 object-contain"
                  />
                )}
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-6 md:gap-4">
            {primaryActions.length > 0 && (
              <div className="flex flex-wrap gap-4">
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
                      className={`${base} ${variantClasses}`}
                      target={action.href ? "_blank" : undefined}
                      rel={action.href ? "noreferrer" : undefined}
                    >
                      {action.label}
                    </ButtonTag>
                  );
                })}
              </div>
            )}

            <button
              type="button"
              onClick={onNextClick}
              className="self-start md:self-end text-sm font-medium text-secondary hover:text-white transition font-firacode"
            >
              {nextLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
