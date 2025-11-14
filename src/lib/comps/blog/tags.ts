const tags = [
	'Technology',
	'Organizing',
	'Community',
	'WhatsApp',
	'Email',
	'Events'
] as const satisfies string[];

type Tag = (typeof tags)[number];

export default tags;
