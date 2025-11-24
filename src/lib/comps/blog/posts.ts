import authors, { isAuthor } from './authors.js';
import tags, { isTagSlug } from './tags.js';
import { slugify } from '$lib/utils';

export const posts = [
	{
		title: 'Building the Wrong Thing',
		slug: 'building-the-wrong-thing',
		description: `Some hard lessons from Belcoda's failed launch, and why we needed to go through the pain.`,
		image: '/images/blog/wrong-way.webp',
		date: '2025-11-13',
		author: 'Django Merope',
		tag: 'Belcoda'
	},
	{
		title: 'Why We Chose Zero',
		slug: 'why-we-chose-zero',
		description: 'Why building Belcoda around a powerful sync engine made sense for Belcoda.',
		image: '/images/blog/zero.webp',
		date: '2025-11-11',
		author: 'Django Merope',
		tag: 'Belcoda'
	},
	{
		title: 'What is Power Tools?',
		slug: 'what-is-power-tools',
		description: 'Why do we need a blog? What will we write about? And why should you care?',
		image: '/images/blog/what-is-power-tools.webp',
		date: '2025-10-23',
		author: 'Django Merope',
		tag: 'Belcoda'
	},
	{
		title: 'WhatsApp: Why and How',
		slug: 'whatsapp-why-and-how',
		description: 'A quick guide on how (and why) to use WhatsApp for community organizing.',
		image: '/images/blog/whatsapp-2.webp',
		date: '2025-11-10',
		author: 'Matteo De Vos',
		tag: 'WhatsApp'
	},
	{
		title: 'WhatsApp One Integration Is Not Enough',
		slug: 'whatsapp-one-integration-is-not-enough',
		description: `Belcoda doesn't have one WhatsApp integration. Instead, WhatsApp is woven <strong>throughout</strong> the platform.`,
		image: '/images/blog/whatsapp-1.webp',
		date: '2025-11-23',
		author: 'Django Merope',
		tag: 'WhatsApp'
	}
] as const satisfies Post[];

export type Post = {
	title: string;
	slug: string;
	description: string;
	image: string;
	date: string;
	author: (typeof authors)[number]['name'];
	darken_image?: boolean;
	tag: (typeof tags)[number];
};

export function getPosts(count: number = 25) {
	const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return sortedPosts.slice(0, count);
}

export function getPostsByAuthor(author: string, count: number = 25): Post[] {
	if (!isAuthor(author)) {
		return [];
	}
	return posts
		.filter((post) => post.author === author)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, count);
}

export function getPostsByTag(tag: string, count: number = 25): Post[] {
	if (!isTagSlug(tag)) {
		return [];
	}
	return posts
		.filter((post) => slugify(post.tag) === tag)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, count);
}

export function getPostBySlug(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}

export default posts;
