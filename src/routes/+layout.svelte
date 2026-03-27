<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Belcoda</title>
	<meta name="author" content="Belcoda" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="bingbot" content="index, follow" />
	<meta name="yandexbot" content="index, follow" />
	<meta name="description" content="Belcoda is a platform for community organizing and activism." />
	<meta name="keywords" content="Belcoda, community organizing, activism, social change" />
	<meta name="image" content="https://belcoda.com/images/belcoda-image.png" />
	<meta name="og:image" content="https://belcoda.com/images/belcoda-image.png" />
	<meta name="og:title" content="Belcoda" />
	<meta
		name="og:description"
		content="Belcoda is a platform for community organizing and activism."
	/>
	<meta name="og:url" content="https://belcoda.com" />
	<meta name="og:type" content="website" />
	<meta name="og:published_time" content="2025-11-22" />
	<meta name="og:modified_time" content="2025-11-22" />
	<meta name="url" content="https://belcoda.com" />
	<meta name="type" content="website" />
	<meta name="published_time" content="2025-11-22" />
	<meta name="modified_time" content="2025-11-22" />
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17963790839"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'AW-17963790839');
	</script>
</svelte:head>

<main class="min-h-screen bg-gray-50">
	{@render children?.()}
</main>
