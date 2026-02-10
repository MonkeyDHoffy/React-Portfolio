import React, { useMemo } from 'react';
import Header from '../layout/Header';
import { useLang } from '../../context/LanguageContext';

let infoSectionKeys = [
	'acceptance',
	'scope',
	'ownership',
	'usage',
	'external',
	'disclaimer',
];

/**
 * LegalNotice renders the translated imprint and policy copy with spotlight background.
 * @returns {JSX.Element}
 */
let LegalNotice = () => {
	let { t } = useLang();

	let lastUpdated = useMemo(() => {
		return new Intl.DateTimeFormat('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		}).format(new Date());
	}, []);

	return (
		<>
			<div className="absolute top-0 left-0 right-0 z-[100]">
				<Header />
			</div>
			<section
				className="min-h-screen text-gray-200 px-6 py-24 font-karla relative overflow-hidden"
				style={{ background: 'linear-gradient(55.22deg, #1C1C1C 36.26%, #08463B 93.28%)' }}
			>
				<div className="cursor-spotlight absolute inset-0 z-0" />
				<div className="max-w-4xl mx-auto relative z-10">
					<h1 className="text-4xl md:text-5xl font-firacode font-bold text-teal-400 mb-12 text-center">
						{t('legalNotice.title')}
					</h1>

					<div className="space-y-4 mb-10">
						<h2 className="text-xl font-firacode font-semibold text-teal-300 uppercase tracking-[0.3em]">
							{t('legalNotice.imprintTitle')}
						</h2>
						<p className="leading-relaxed">
							{t('legalNotice.imprint.name')}
							<br />
							{t('legalNotice.imprint.street')}
							<br />
							{t('legalNotice.imprint.city')}
							<br />
							{t('legalNotice.imprint.country')}
						</p>
						<p className="leading-relaxed">
							{t('legalNotice.imprint.emailLabel')}: {' '}
							<a
								href="mailto:hoffjannik95@gmail.com"
								className="text-teal-400 hover:underline"
							>
								hoffjannik95@gmail.com
							</a>
							<br />
							{t('legalNotice.imprint.phoneLabel')}: 0157 7447 8954
						</p>
					</div>

					{infoSectionKeys.map((key) => (
						<div key={key} className="space-y-4 mb-10">
							<h2 className="text-xl font-firacode font-semibold text-teal-300">
								{t(`legalNotice.sections.${key}.title`)}
							</h2>
							<p className="text-sm leading-relaxed text-white/90">
								{t(`legalNotice.sections.${key}.body`)}
							</p>
						</div>
					))}

					<p className="text-xs text-gray-300 text-center mt-16">
						{t('legalNotice.lastUpdated')} <span>{lastUpdated}</span>
					</p>
				</div>
			</section>
		</>
	);
};

export default LegalNotice;

