import React, { useEffect, useState } from 'react';
import quotesImg from '../../assets/gallery/quotes.png';
import arrowForwardImg from '../../assets/gallery/arrow_forward.png';
import PageContainer from '../layout/PageContainer';
import colors from '../../theme/colors';

const cards = [
	{ title: 'Card One', text: 'Short description for the first card.' },
	{ title: 'Card Two', text: 'Short description for the second card.' },
	{ title: 'Card Three', text: 'Short description for the third card.' },
];

const Gallery = () => {
	const [activeIndex, setActiveIndex] = useState(1);
	const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

	useEffect(() => {
		const onResize = () => setVw(window.innerWidth);
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);
	const total = cards.length;

	const cardWidth = Math.min(568, Math.floor(vw * 0.9));
	const cardHeight = 240;
	const cardGap = Math.min(48, Math.floor(vw * 0.05));
	const trackOffset = (cardWidth + cardGap) * activeIndex;

	const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);
	const goNext = () => setActiveIndex((i) => (i + 1) % total);
	const goTo = (index) => setActiveIndex(index);

	return (
		<section className="w-full h-full pb-8 debug-component">
			<PageContainer>
				<div className="flex flex-col gap-6 overflow-hidden">
					<div className="relative">
						<div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(calc(50% - ${trackOffset + cardWidth / 2}px))` }}>
							 {cards.map((card, i) => (
								 <div
									 key={card.title}
									 className={`shrink-0 rounded-2xl border border-secondary p-6 md:p-8 transition-all duration-500 ease-out relative mt-8 ${
										 i === activeIndex
											 ? 'ring-1 ring-secondary/60 scale-100 bg-[#26524b99]'
											 : 'scale-95 opacity-70 bg-background-greencontainer hover:opacity-90 hover:ring-1 hover:ring-white/20'
									 } text-white`}
									 style={{ width: `${cardWidth}px`, height: `${cardHeight}px`, marginRight: `${cardGap}px` }}
									 role="button"
									 onClick={() => goTo(i)}
									 onKeyDown={(e) => {
										 if (e.key === 'Enter' || e.key === ' ') goTo(i);
									 }}
									 tabIndex={0}
								 >
									 {i === activeIndex && (
										 <img className=""
											 src={quotesImg}
											 alt="Quotes"
											 style={{ position: 'absolute', top: -24, left: -52, width: Math.min(89, Math.floor(vw * 0.12)), height: Math.min(64, Math.floor(vw * 0.08)), pointerEvents: 'none' }}
										 />
									 )}
									 <h3 className="font-firacode text-lg md:text-xl text-white mb-2">{card.title}</h3>
									 <p className="text-primary">{card.text}</p>
								 </div>
							 ))}
						</div>
					</div>

					<div className="flex items-center justify-center gap-6">
												 <button type="button" onClick={goPrev} className="h-10 w-10 rounded-full border-white/20 text-white hover:border-secondary hover:text-secondary transition flex items-center justify-center hover:scale-110" aria-label="Previous card">
													 <img src={arrowForwardImg} alt="Previous" className="w-6 h-6 transform rotate-180" />
												 </button>

						<div className="flex items-center gap-2">
							{cards.map((_, i) => (
								<button
									key={i}
									type="button"
									onClick={() => goTo(i)}
									className={`h-2.5 w-2.5 rounded-full transition ${
										i === activeIndex ? 'bg-secondary' : 'bg-white/30'
									}`}
									aria-label={`Go to card ${i + 1}`}
								/>
							))}
						</div>

												 <button type="button" onClick={goNext} className="h-10 w-10 rounded-full border-white/20 text-white hover:border-secondary hover:text-secondary transition flex items-center justify-center hover:scale-110" aria-label="Next card">
													 <img src={arrowForwardImg} alt="Next" className="w-6 h-6" />
												 </button>
					</div>
				</div>
			</PageContainer>
		</section>
	);
};

export default Gallery;
