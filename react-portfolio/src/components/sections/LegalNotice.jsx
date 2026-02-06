import React from 'react';
import Header from '../layout/Header';
import PageContainer from '../layout/PageContainer';

const LegalNotice = () => {
	return (
		<>
			<div className="absolute top-0 left-0 right-0 z-[100]"><Header /></div>
			<PageContainer className="py-20">
				<div className="max-w-3xl mx-auto text-neutral-300">
					<h1 className="text-3xl font-bold text-white mb-6">Impressum / Legal Notice</h1>
					<p className="mb-4">Angaben gemäß § 5 TMG:</p>
					<p className="mb-2">Jannik Hoff<br/>Saarlouis, Germany</p>
					<h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
					<p className="mb-4">E-Mail: your.email@example.com</p>
					<h2 className="text-xl font-semibold mt-6 mb-2">Haftungsausschluss</h2>
					<p className="mb-4">Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.</p>
					<p>Weitere rechtliche Hinweise können Sie hier ergänzen.</p>
				</div>
			</PageContainer>
		</>
	);
};

export default LegalNotice;

