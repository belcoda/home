<script lang="ts">
	import { onMount } from 'svelte';
	const status: Promise<'UP' | 'HASISSUES' | 'UNDERMAINTENANCE'> = fetch(
		`https://belcoda.instatus.com/summary.json`
	)
		.then((res) => res.json())
		.then((data) => data.page.status);
</script>

<a href="https://belcoda.instatus.com" target="_blank">
	{#await status}
		<div class="flex items-center gap-x-2">
			<div class="h-2 w-2 rounded-full bg-gray-200"></div>
			<div class="text-sm text-gray-500">Checking status...</div>
		</div>
	{:then data}
		<div class="flex items-center gap-x-2">
			{#if data === 'UP'}
				<div class="h-2 w-2 rounded-full bg-green-500"></div>
				<div class="text-sm text-gray-500">All systems operational</div>
			{:else if data === 'HASISSUES'}
				<div class="h-2 w-2 rounded-full bg-yellow-500"></div>
				<div class="text-sm text-gray-500">Experiencing issues</div>
			{:else if data === 'UNDERMAINTENANCE'}
				<div class="h-2 w-2 rounded-full bg-red-500"></div>
				<div class="text-sm text-gray-500">Under maintenance</div>
			{/if}
		</div>
	{/await}
</a>
