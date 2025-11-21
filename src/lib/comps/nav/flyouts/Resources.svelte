<script lang="ts">
	import { type Snippet } from 'svelte';
	let { children, open = $bindable(false) }: { children: Snippet; open: boolean } = $props();
	import * as Popover from '$lib/comps/ui/popover/index.js';
	import { getPosts } from '$lib/comps/blog/posts.js';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import CircleQuestionIcon from '@lucide/svelte/icons/circle-question-mark';
	const posts = getPosts(3);
</script>

<Popover.Root bind:open>
	<Popover.Trigger
		class="inline-flex items-center gap-x-1 rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white"
	>
		{@render children()}
		<svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5">
			<path
				d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
				clip-rule="evenodd"
				fill-rule="evenodd"
			/>
		</svg>
	</Popover.Trigger>

	<Popover.Content
		class="w-screen max-w-max overflow-visible rounded-3xl bg-white p-0 text-sm/6 shadow-lg transition transition-discrete outline-none [--anchor-gap:--spacing(5)] backdrop:bg-transparent open:flex data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
	>
		<div
			class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5"
		>
			<div class="p-4">
				<div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
					<div
						class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
					>
						<CircleQuestionIcon class="size-6 text-gray-600 group-hover:text-indigo-600" />
					</div>
					<div>
						<a
							href="https://support.belcoda.com/docs"
							target="_blank"
							class="font-semibold text-gray-900"
						>
							Guides & documentation
							<span class="absolute inset-0"></span>
						</a>
						<p class="mt-1 text-gray-600">
							Hit the ground running with tutorials and feature guides
						</p>
					</div>
				</div>
				<div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
					<div
						class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
					>
						<ShieldCheckIcon class="size-6 text-gray-600 group-hover:text-indigo-600" />
					</div>
					<div>
						<a href="/security" target="_blank" class="font-semibold text-gray-900">
							Security
							<span class="absolute inset-0"></span>
						</a>
						<p class="mt-1 text-gray-600">What we're doing to protect your data and privacy</p>
					</div>
				</div>
				<div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
					<div
						class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							data-slot="icon"
							aria-hidden="true"
							class="size-6 text-gray-600 group-hover:text-indigo-600"
						>
							<path
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div>
						<a href="#" class="font-semibold text-gray-900">
							Developers <span
								class="ml-2 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800"
								>Coming soon!</span
							>
							<span class="absolute inset-0"></span>
						</a>
						<p class="mt-1 text-gray-600">API reference and SDKs</p>
					</div>
				</div>
			</div>
			<div class="bg-gray-50 p-8">
				<div class="flex justify-between">
					<h3 class="text-sm/6 font-semibold text-gray-500">Latest posts</h3>
					<a href="/blog" class="text-sm/6 font-semibold text-indigo-600"
						>See all <span aria-hidden="true">&rarr;</span></a
					>
				</div>
				<ul role="list" class="mt-6 space-y-6">
					{#each posts as post}
						<li class="relative">
							<time datetime={post.date} class="block text-xs/6 text-gray-600"
								>{new Date(post.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}</time
							>
							<a
								href={`/blog/${post.slug}`}
								class="block truncate text-sm/6 font-semibold text-gray-900"
							>
								{post.title}
								<span class="absolute inset-0"></span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
