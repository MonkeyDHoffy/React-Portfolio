import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../../context/LanguageContext';
import Contactpopup from './Contactpopup';
import PageContainer from '../layout/PageContainer';
import joinImg from '../../assets/projects/join.png';
import polloImg from '../../assets/projects/pollo.png';
import bubbleImg from '../../assets/projects/bubble.png';
import ProjectSlide from './projectspopup';
import ProjectListItem from '../ui/ProjectListItem';
import useEscape from '../../hooks/useEscape';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const Projects = () => {
  const { t } = useLang();

  const [active, setActive] = useState(null); // 'join' | 'pollo' | 'bubble' | null

  const openProject = (key) => setActive(key);
  const closeProject = () => setActive(null);

  // Close on ESC and robustly lock body scroll while open (mobile-safe)
  useEscape(() => active && closeProject(), !!active);
  useBodyScrollLock(!!active, { preserveScroll: true });

  const projectsMap = {
    join: {
      index: '01',
      title: 'projectDetails.p1.title',
      imageAlt: 'Join project screenshot',
      question: 'projectDetails.p1.question',
      description: 'projectDetails.p1.description',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      imageSrc: joinImg,
      primaryActions: [
        { label: 'projects.liveDemo', href: '#', variant: 'primary' },
        { label: 'projects.github', href: 'https://github.com/MonkeyDHoffy', variant: 'secondary' },
      ],
    },
    pollo: {
      index: '02',
      title: 'projectDetails.p2.title',
      imageAlt: 'El Pollo Loco game screenshot',
      question: 'projectDetails.p2.question',
      description: 'projectDetails.p2.description',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      imageSrc: polloImg,
      primaryActions: [
        { label: 'projects.liveDemo', href: '#', variant: 'primary' },
        { label: 'projects.github', href: 'https://github.com/MonkeyDHoffy', variant: 'secondary' },
      ],
    },
    bubble: {
      index: '03',
      title: 'projectDetails.p3.title',
      imageAlt: 'DA Bubble chat app screenshot',
      question: 'projectDetails.p3.question',
      description: 'projectDetails.p3.description',
      techStack: ['Angular', 'Firebase', 'TypeScript'],
      imageSrc: bubbleImg,
      primaryActions: [
        { label: 'projects.liveDemo', href: '#', variant: 'primary' },
        { label: 'projects.github', href: 'https://github.com/MonkeyDHoffy', variant: 'secondary' },
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
        <div className="w-full max-w-[831px] h-auto lg:h-[var(--card-size)]">
          <p className="font-karla text-sm text-secondary mb-2">{t('projects.label')}</p>

          <h2 className="font-firacode text-5xl font-bold text-secondary mb-4">
            {t('projects.title')}
          </h2>

          <p className="font-karla opacity-70 hover:opacity-100 transition-opacity duration-300 max-w-xl mb-10">
            {t('projects.intro')}
          </p>

          {/* Top Divider */}
          <div className="border-t border-secondary"></div>
          
          {/* Project List */}
          <div className="">
            <ProjectListItem
              className="project1"
              title="Join"
              stackSegments={["Angular", "TypeScript", "HTML", "CSS", "Firebase"]}
              previewImg={joinImg}
              previewAlt="Join preview"
              onClick={() => openProject('join')}
            />
            <ProjectListItem
              className="project2"
              title="El Pollo Loco"
              stackSegments={["HTML", "CSS", "JavaScript"]}
              previewImg={polloImg}
              previewAlt="El Pollo Loco preview"
              onClick={() => openProject('pollo')}
            />
            <ProjectListItem
              className="project3"
              title="DA Bubble"
              stackSegments={["Angular", "Firebase", "TypeScript"]}
              previewImg={bubbleImg}
              previewAlt="DA Bubble preview"
              onClick={() => openProject('bubble')}
            />
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
                  nextLabel={t('projects.nextLabel')}
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