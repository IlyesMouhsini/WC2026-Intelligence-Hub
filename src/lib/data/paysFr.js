// Correspondance code FIFA (3 lettres) -> nom français
// Basé sur les 48 équipes qualifiées pour la Coupe du Monde 2026
export const paysFr = {
	URU: 'Uruguay',
	GER: 'Allemagne',
	ESP: 'Espagne',
	PAR: 'Paraguay',
	ARG: 'Argentine',
	GHA: 'Ghana',
	BRA: 'Brésil',
	POR: 'Portugal',
	JPN: 'Japon',
	MEX: 'Mexique',
	ENG: 'Angleterre',
	USA: 'États-Unis',
	KOR: 'Corée du Sud',
	FRA: 'France',
	RSA: 'Afrique du Sud',
	ALG: 'Algérie',
	AUS: 'Australie',
	NZL: 'Nouvelle-Zélande',
	SUI: 'Suisse',
	ECU: 'Équateur',
	SWE: 'Suède',
	CZE: 'Tchéquie',
	CRO: 'Croatie',
	KSA: 'Arabie Saoudite',
	TUN: 'Tunisie',
	TUR: 'Turquie',
	SEN: 'Sénégal',
	BEL: 'Belgique',
	MAR: 'Maroc',
	AUT: 'Autriche',
	COL: 'Colombie',
	EGY: 'Égypte',
	CAN: 'Canada',
	HAI: 'Haïti',
	IRN: 'Iran',
	BIH: 'Bosnie-Herzégovine',
	PAN: 'Panama',
	CPV: 'Cap-Vert',
	COD: 'RD Congo',
	CIV: "Côte d'Ivoire",
	QAT: 'Qatar',
	JOR: 'Jordanie',
	IRQ: 'Irak',
	UZB: 'Ouzbékistan',
	NED: 'Pays-Bas',
	NOR: 'Norvège',
	SCO: 'Écosse',
	CUW: 'Curaçao'
};

/**
 * Renvoie le nom français d'une équipe à partir de son code FIFA,
 * ou son nom d'origine si aucune correspondance n'est trouvée.
 */
export function nomFrancais(codeFifa, nomOriginal) {
	return paysFr[codeFifa] ?? nomOriginal ?? '?';
}