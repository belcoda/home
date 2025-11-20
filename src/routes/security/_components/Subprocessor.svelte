<script lang="ts">
	const { name, location }: { name: string; location: string } = $props();
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
</script>

<div class="rounded-lg border border-gray-200 bg-white p-4">
	<div class="font-semibold text-gray-800">{name}</div>
	<div class="mt-1 flex items-center gap-1">
		<MapPinIcon class="size-4 text-gray-400" />
		<div class="font-base text-sm text-gray-400">{location}</div>
	</div>
</div>
