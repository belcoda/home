<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import { type Snippet } from 'svelte';
	import { getPostBySlug } from '$lib/comps/blog/posts';
	const { slug, children }: { slug: string; children: Snippet } = $props();
	const post = getPostBySlug(slug)!;
	const { title, description, image, author, date, tag, darken_image = true } = post;

	const backgroundImage = image ? `url('${image}')` : 'url("/background-auth.jpg")';
	import BlogBreadcrumbs from '$lib/comps/blog/BlogBreadcrumbs.svelte';
	import { getAuthor } from '$lib/comps/blog/authors';
	const authorData = getAuthor(author);
</script>

<svelte:head>
	<title>{title} | Belcoda</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={tag} />
	<meta name="image" content={image} />
	<meta name="url" content={`https://belcoda.com/blog/${slug}`} />
	<meta name="type" content="article" />
	<meta name="published_time" content={date} />
	<meta name="modified_time" content={date} />
	{#if authorData}
		<meta name="author" content={authorData.name} />
	{/if}
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="og:image" content={image} />
	<meta name="og:url" content={`https://belcoda.com/blog/${slug}`} />
	<meta name="og:type" content="article" />
	<meta name="og:published_time" content={date} />
	<meta name="og:modified_time" content={date} />
	<meta name="og:author" content={author} />
</svelte:head>

<div
	class="relative flex h-120 w-full items-end justify-start bg-linear-to-b from-blue-200 to-white bg-cover bg-center bg-no-repeat"
	style="background-image: {backgroundImage};"
>
	<Header />

	<div class="z-10 mx-auto w-full max-w-[65ch] px-4">
		<!-- Tag -->
		<div class="lg:mb-4">
			<span
				class="relative z-10 rounded-full bg-white/20 px-3 py-1.5 text-sm font-medium text-white/70"
				>{tag}</span
			>
		</div>

		<!-- Title -->
		<h1 class="text-4xl font-extrabold tracking-tight text-balance text-white lg:text-5xl">
			{title}
		</h1>
		<!-- Date and Author -->
		<div class="mt-4 flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-200">
			<time datetime={date} class="mr-8"
				>{new Date(date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}</time
			>
			{#if authorData}
				<div class="-ml-4 flex items-center gap-x-4">
					<svg viewBox="0 0 2 2" class="-ml-0.5 size-1 flex-none fill-white/50">
						<circle r="1" cx="1" cy="1" />
					</svg>
					<div class="flex items-center gap-x-2.5">
						<img
							src={authorData.avatar}
							alt={authorData.name}
							class="size-8 flex-none rounded-full bg-white/10"
						/>
						<div>
							<div class="font-medium">{authorData.name}</div>
							{#if authorData.title}
								<div class="-mt-1 text-gray-200/70">{authorData.title}</div>
							{/if}
						</div>
					</div>
				</div>
			{/if}
		</div>
		<!-- Description -->
		<p class="mt-4 mb-8 text-lg/8 text-pretty text-gray-200">{description}</p>
	</div>
	{#if darken_image}
		<div class="absolute inset-0 bg-black/50"></div>
	{/if}
</div>

<div class="mx-auto mb-20 max-w-[65ch] px-4">
	<div class="mt-6 mb-8"><BlogBreadcrumbs {title} href={`/blog/${slug}`} /></div>
	<div class="prose prose-lg max-w-[65ch]">
		{@render children?.()}
	</div>
</div>

<Footer />
