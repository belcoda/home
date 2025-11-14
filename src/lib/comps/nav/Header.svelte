<script lang="ts">
	type Props = {
		variant?: 'default' | 'transparent';
	};
	const { variant = 'default' }: Props = $props();
	const backgroundImage = variant === 'transparent' ? null : '/background-auth.jpg';
	import Features from './flyouts/Features.svelte';
	import Resources from './flyouts/Resources.svelte';

	import MobileMenu from '$lib/comps/nav/MobileMenu.svelte';
</script>

<header
	class="absolute top-0 right-0 left-0 z-50 bg-cover bg-center"
	style={backgroundImage ? `background-image: url('{backgroundImage}')` : ''}
>
	<nav
		aria-label="Global"
		class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
	>
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Belcoda</span>
				<img src="/logos/white_logomark.svg" alt="" class="h-8 w-auto" />
			</a>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<Features open={false}>Features</Features>
			<a
				href="/about"
				class="rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white"
				>About</a
			>
			<Resources open={false}>Resources</Resources>

			<a
				href="/pricing"
				class="rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white"
				>Pricing</a
			>
		</div>
		<div class="flex flex-1 items-center justify-end gap-x-2">
			<a
				href="http://app.belcoda.com/login"
				class="hidden rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white lg:block"
				>Log in</a
			>
			<a
				href="http://app.belcoda.com/signup"
				class="rounded-md bg-white px-3 py-2 text-sm font-extrabold text-blue-900 shadow-xs hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>Get started</a
			>
		</div>
		<div class="flex lg:hidden">
			<MobileMenu />
		</div>
	</nav>
</header>
