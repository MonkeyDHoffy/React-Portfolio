import React from "react";

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
  return (
    <div
      className="relative w-[min(92vw,1100px)] rounded-[30px] bg-background-greencontainer border border-secondary shadow-2xl my-8 font-karla"
      style={{ backgroundImage: 'linear-gradient(55.22deg, #1C1C1C 36.26%, #08463B 93.28%)' }}
    >
      {/* Close Icon */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm hover:bg-white/10 transition"
      >
        <span className="block h-[1px] w-4 rotate-45 bg-white" />
        <span className="block h-[1px] w-4 -rotate-45 bg-white -ml-4" />
      </button>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-6 md:px-10 lg:px-12 py-8 md:py-10">
        {/* Image – on mobile top, on desktop right */}
        <div className="order-first md:order-last md:w-1/2">
          <div className="rounded-2xl bg-black/20 border border-white/10 overflow-hidden">
            <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-between gap-8 text-white">
          <div>
            <p className="text-5xl md:text-6xl font-firacode font-bold tracking-tight text-secondary">{index}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary font-karla">{title}</h1>
          </div>

          <div className="space-y-4">
            <p className="font-firacode text-secondary text-base md:text-lg">{question}</p>
            <p className="font-karla text-primary leading-relaxed">{description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full border-white/20 text-sm text-white/90 font-firacode">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-6 md:gap-4">
            {primaryActions.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {primaryActions.map((action) => {
                  const base =
                    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary font-firacode";
                  const variantClasses =
                    action.variant === "secondary"
                      ? "border border-white/30 bg-transparent hover:bg-white/10 text-white"
                      : "bg-secondary hover:brightness-110 text-black";
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
