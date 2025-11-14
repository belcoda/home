import Fingerprint from '@lucide/svelte/icons/fingerprint';
import Users from '@lucide/svelte/icons/users';
import CalendarDays from '@lucide/svelte/icons/calendar-days';
import Zap from '@lucide/svelte/icons/zap';
import MessageCircle from '@lucide/svelte/icons/message-circle';
import YouTube from '@lucide/svelte/icons/youtube';
import Phone from '@lucide/svelte/icons/phone';
import BookText from '@lucide/svelte/icons/book-text';
import Code from '@lucide/svelte/icons/code';
import Shield from '@lucide/svelte/icons/shield-check';
import { getPosts } from '$lib/comps/blog/posts.js';
export const features = [
	{
		label: 'Organizing',
		icon: Users,
		description: 'Grow your community of people and groups',
		href: '/features/organizing'
	},
	{
		label: 'WhatsApp',
		icon: MessageCircle,
		description: "Reach people where they are. It's a two-way conversation.",
		href: '/features/whatsapp'
	},
	{
		label: 'Events',
		icon: CalendarDays,
		description: 'Everything you need for effortless events',
		href: '/features/events'
	},
	{
		label: 'Actions',
		icon: Zap,
		description: 'Bring new people in and deepen engagement with petitions & more',
		href: '/features/actions'
	},
	{
		label: 'Integrations',
		icon: Zap,
		description: 'Build strategic funnels that will convert',
		href: '/features/integrations'
	}
];

export const actions = [
	{
		label: '3 minute intro',
		icon: YouTube
	},
	{
		label: 'Schedule a call',
		icon: Phone
	}
];

export const resources = [
	{
		label: 'Documentation',
		description: 'Guides, tutorials, and more',
		icon: BookText,
		href: 'https://support.belcoda.com/docs',
		newTab: true
	},
	{
		label: 'Developers',
		description: 'API reference and SDKs',
		icon: Code,
		href: 'https://belcoda.readme.io',
		newTab: true
	},
	{
		label: 'Security',
		description: 'How we protect your data',
		icon: Shield,
		href: '/security',
		newTab: false
	}
];

export const blogPosts = getPosts(3);
