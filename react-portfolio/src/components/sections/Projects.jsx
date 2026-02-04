import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../../context/LanguageContext';
import Contactpopup from './Contactpopup';
import PageContainer from '../layout/PageContainer';
import joinImg from '../../assets/projects/join.png';
import polloImg from '../../assets/projects/pollo.png';
import bubbleImg from '../../assets/projects/bubble.png';
import { ProjectSlide } from './projectspopup';

const Projects = () => {
  const { t } = useLang();

  const [active, setActive] = useState(null); // 'join' | 'pollo' | 'bubble' | null

  const openProject = (key) => setActive(key);
  const closeProject = () => setActive(null);

  // Close on ESC and robustly lock body scroll while open (mobile-safe)
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeProject();
    };
    document.addEventListener('keydown', onKey);

    const scrollY = window.scrollY || window.pageYOffset;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      document.body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [active]);

  const projectsMap = {
    join: {
      index: '01',
      title: 'Join',
      question: 'What is this project about?',
      description:
        'A task management app inspired by Kanban. Create boards, assign tasks, and collaborate in real time.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      imageSrc: joinImg,
      primaryActions: [
        { label: 'Live Demo', href: '#', variant: 'primary' },
        { label: 'GitHub', href: 'https://github.com/MonkeyDHoffy', variant: 'secondary' },
      ],
    },
    pollo: {
      index: '02',
      title: 'El Pollo Loco',
      question: 'What is this project about?',
      description:
        'A classic 2D browser game built with vanilla web tech. Run, jump, and collect coins!',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      imageSrc: polloImg,
      primaryActions: [
        { label: 'Live Demo', href: '#', variant: 'primary' },
        { label: 'GitHub', href: 'https://github.com/MonkeyDHoffy', variant: 'secondary' },
      ],
    },
    bubble: {
      index: '03',
      title: 'DA Bubble',
      question: 'What is this project about?',
      description:
        'A chat application with channels and mentions. Powered by Angular and Firebase for real-time updates.',
      techStack: ['Angular', 'Firebase', 'TypeScript'],
      imageSrc: bubbleImg,
      primaryActions: [
        { label: 'Live Demo', href: '#', variant: 'primary' },
        { label: 'GitHub', href: 'https://github.com/MonkeyDHoffy', variant: 'secondary' },
      ],
    },
  };

  const order = ['join', 'pollo', 'bubble'];
  const goNext = () => {
    if (!active) return;
    const i = order.indexOf(active);
    const next = order[(i + 1) % order.length];
    setActive(next);
  };
  return (
    <section className="text-white py-8 relative overflow-hidden debug-component" id="projects">
      <PageContainer>
        <div className="flex justify-start gap-8">
        
        {/* Left Card */}
        <div className="w-full max-w-[880px] h-auto lg:h-[568px]">
          <p className="font-karla text-sm text-secondary mb-2">{t('projects.label')}</p>

          <h2 className="font-firacode text-5xl font-bold text-secondary mb-4">
            {t('projects.title')}
          </h2>

          <p className="font-karla text-gray-400 max-w-xl mb-10">
            {t('projects.intro')}
          </p>

          {/* Top Divider */}
          <div className="border-t border-secondary"></div>
          
          {/* Project List */}
          <div className="">

            {/* Project Item */}
            <div className="relative group">
              <div 
                className="project1 flex flex-col md:flex-row gap-2 md:gap-0 font-firacode items-start md:items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
                onClick={() => openProject('join')}
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  Join
                </h3>
                <span className="text-sm text-primary mt-2 md:mt-0">
                  Angular <span className="text-secondary">|</span> TypeScript <span className="text-secondary">|</span> HTML <span className="text-secondary">|</span> CSS <span className="text-secondary">|</span> Firebase
                </span>
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Contactpopup img={joinImg} />
              </div>
            </div>

            {/* Project Item */}
            <div className="relative group">
              <div 
                className="project2 flex flex-col md:flex-row gap-2 md:gap-0 font-firacode items-start md:items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
                onClick={() => openProject('pollo')}
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  El Pollo Loco
                </h3>
                <span className="text-sm text-primary mt-2 md:mt-0">
                  HTML <span className="text-secondary">|</span> CSS <span className="text-secondary">|</span> JavaScript
                </span>
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Contactpopup img={polloImg} />
              </div>
            </div>

            {/* Project Item */}
            <div className="relative group">
              <div 
                className="project3 flex flex-col md:flex-row gap-2 md:gap-0 font-firacode items-start md:items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
                onClick={() => openProject('bubble')}
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  DA Bubble
                </h3>
                <span className="text-sm text-primary mt-2 md:mt-0">
                  Angular <span className="text-secondary">|</span> Firebase <span className="text-secondary">|</span> TypeScript
                </span>
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Contactpopup img={bubbleImg} />
              </div>
            </div>

          </div>
        </div>

        {/* Modal Overlay */}
        {active && createPortal(
          (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
              onClick={closeProject}
              role="dialog"
              aria-modal="true"
            >
              <div className="max-w-[1100px] w-full" onClick={(e) => e.stopPropagation()}>
                <ProjectSlide
                  {...projectsMap[active]}
                  onClose={closeProject}
                  onNextClick={goNext}
                  nextLabel={t ? t('Next project →') || 'Next project →' : 'Next project →'}
                />
              </div>
            </div>
          ),
          document.body
        )}

        {/* Right Card */}

        </div>
      </PageContainer>
    </section>
  );
};

export default Projects;