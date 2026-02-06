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
      title: 'Join',
      imageAlt: 'Join project screenshot',
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
      imageAlt: 'El Pollo Loco game screenshot',
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
      imageAlt: 'DA Bubble chat app screenshot',
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
        <div className="w-full max-w-[831px] h-auto lg:h-[var(--card-size)]">
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