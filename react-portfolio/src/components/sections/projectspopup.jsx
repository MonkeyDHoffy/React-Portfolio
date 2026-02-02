import React from "react";

type Action = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

interface ProjectSlideProps {
  index: string;                 // "01"
  title: string;                 // "Join"
  question: string;              // "What is this project about?"
  description: string;
  techStack: string[];           // ["CSS", "HTML", "Firebase", ...]
  imageSrc: string;
  imageAlt?: string;
  primaryActions?: Action[];     // Buttons wie "GitHub", "Live Test"
  nextLabel?: string;            // "Next project"
  onNextClick?: () => void;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({
  index,
  title,
  question,
  description,
  techStack,
  imageSrc,
  imageAlt = "",
  primaryActions = [],
  nextLabel = "Next project",
  onNextClick,
}) => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-6xl rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 via-slate-950/80 to-slate-900/90 shadow-2xl overflow-hidden">
        {/* Close Icon */}
        <button
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/10 transition"
        >
          <span className="block h-[1px] w-4 rotate-45 bg-white" />
          <span className="block h-[1px] w-4 -rotate-45 bg-white -ml-4" />
        </button>

        <div className="flex flex-col md:flex-row gap-8 md:gap-14 px-6 md:px-10 lg:px-14 py-8 md:py-10 lg:py-12">
          {/* Bild – auf Mobile oben, auf Desktop rechts */}
          <div className="order-first md:order-last md:w-1/2">
            <div className="rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text-Content */}
          <div className="md:w-1/2 flex flex-col justify-between gap-8">
            {/* Nummer + Titel */}
            <div>
              <p className="text-5xl md:text-6xl font-bold tracking-tight text-emerald-400">
                {index}
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
                {title}
              </h1>
            </div>

            {/* Beschreibung */}
            <div className="space-y-4">
              <p className="font-mono text-emerald-300 text-lg">
                {question}
              </p>
              <p className="text-sm md:text-base text-slate-100/80 leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            {/* Tech-Stack */}
            <div className="flex flex-wrap items-center gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 text-sm md:text-base text-slate-100"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-xs font-semibold">
                    {tech[0]}
                  </span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>

            {/* Buttons + Next */}
            <div className="mt-2 flex flex-col gap-6 md:gap-4">
              {/* Haupt-Buttons */}
              {primaryActions.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {primaryActions.map((action) => {
                    const base =
                      "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
                    const variantClasses =
                      action.variant === "secondary"
                        ? "border border-white/30 bg-transparent hover:bg-white/10"
                        : "bg-emerald-500 hover:bg-emerald-400 text-slate-950";
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
                        <span className="ml-2 inline-flex">
                          {/* kleiner Pfeil */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.8}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h14M13 6l6 6-6 6"
                            />
                          </svg>
                        </span>
                      </ButtonTag>
                    );
                  })}
                </div>
              )}

              {/* Next project */}
              <button
                type="button"
                onClick={onNextClick}
                className="self-start md:self-end text-sm font-medium text-emerald-300 hover:text-emerald-200 flex items-center gap-2 transition"
              >
                {nextLabel}
                <span className="inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
