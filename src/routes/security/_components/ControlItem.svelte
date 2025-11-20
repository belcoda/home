<script lang="ts">
	const { children } = $props();
	import CheckCircleIcon from '@lucide/svelte/icons/circle-check';
</script>

<div class="flex items-center justify-between gap-2">
	<div class="font-base text-sm text-gray-600">{@render children?.()}</div>
	<CheckCircleIcon class="size-4 text-green-500" />
</div>
