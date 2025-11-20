<script lang="ts">
	import type { Snippet } from 'svelte';
	const { title, children }: { title: string; children: Snippet } = $props();
</script>

<div class="rounded-lg border border-gray-200 bg-white p-4">
	<h3 class="mb-4 text-lg font-semibold text-gray-800">{title}</h3>
	{@render children?.()}
</div>
