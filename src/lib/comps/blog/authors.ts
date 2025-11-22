const authors = [
	{
		name: 'Django Merope',
		slug: 'django-merope',
		avatar: '/avatars/django-img.jpg',
		title: 'Project lead'
	},

	{
		name: 'Matteo De Vos',
		slug: 'matteo-de-vos',
		avatar: '/avatars/matteo.webp',
		title: 'Community building'
	}
] as const;

export type Author = {
	name: (typeof authors)[number]['name'];
	slug: (typeof authors)[number]['slug'];
	avatar: string;
	title: string;
};

export function isAuthor(name: string): name is Author['name'] {
	return authors.some((author) => author.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
	return authors.find((author) => author.slug === slug);
}

export default authors;
