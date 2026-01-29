import React, { useState } from 'react';

const cards = [
	{ title: 'Card One', text: 'Short description for the first card.' },
	{ title: 'Card Two', text: 'Short description for the second card.' },
	{ title: 'Card Three', text: 'Short description for the third card.' },
];

const Gallery = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const total = cards.length;

	const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);
	const goNext = () => setActiveIndex((i) => (i + 1) % total);
	const goTo = (index) => setActiveIndex(index);

	return (
		<section className="w-full">
			<div className="flex flex-col gap-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{cards.map((card, i) => (
						<div
							key={card.title}
							className={`rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition ${
								i === activeIndex ? 'ring-1 ring-secondary/60' : ''
							}`}
						>
							<h3 className="font-firacode text-xl text-text-secondary mb-2">{card.title}</h3>
							<p className="text-white/80">{card.text}</p>
						</div>
					))}
				</div>

				<div className="flex items-center justify-center gap-6">
					<button
						type="button"
						onClick={goPrev}
						className="h-10 w-10 rounded-full border border-white/20 text-white hover:border-secondary hover:text-secondary transition"
						aria-label="Previous card"
					>
						‹
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

					<button
						type="button"
						onClick={goNext}
						className="h-10 w-10 rounded-full border border-white/20 text-white hover:border-secondary hover:text-secondary transition"
						aria-label="Next card"
					>
						›
					</button>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
