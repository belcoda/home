<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	let interval: number;

	let bars = $state<boolean[]>([]);
	let speed = $state(getRandomSpeed());
	const numBars = 25;

	function getRandomSpeed() {
		const chance = Math.random();
		// randomly generate a number between 0 and 3 but with >80% of outcomes between 0 and 0.4
		const random = Math.random() * 3;
		if (chance < 0.7) {
			return Math.random() * 0.3; //0.3 is the minimum speed
		}
		if (chance < 0.9) {
			return Math.random() * 1; //1 is the maximum speed
		} else {
			return Math.random() * 3;
		}
	}

	function updateBars() {
		speed = Number(getRandomSpeed().toPrecision(2));
		for (let index = 0; index < numBars; index++) {
			if (index === numBars - 3 && speed > 2) {
				bars[index] = false;
				continue;
			}
			if (index === numBars - 2 && speed > 1) {
				bars[index] = false;
				continue;
			}
			if (index === numBars - 1 && speed > 0.3) {
				bars[index] = false;
				continue;
			}
			bars[index] = true;
		}
	}
	onMount(() => {
		interval = setInterval(() => {
			updateBars();
		}, 50);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div>
	<div class="mb-2 flex items-center justify-between gap-2 text-sm">
		<div class="flex items-center gap-1 font-medium text-gray-800">
			<div class="block h-3 w-3 rounded-full bg-green-500">&nbsp;</div>
			Response time:
		</div>
		<div class="w-[70px] px-2 py-1 text-right text-sm font-medium text-green-700">
			{speed.toFixed(1)}ms
		</div>
	</div>
	<div class="grid h-[50px] grid-cols-25 items-stretch gap-x-1">
		{#each bars as _}
			{@render element(_)}
		{/each}
	</div>
</div>
{#snippet element(filled: boolean)}
	<div
		class="rounded-sm bg-gradient-to-b from-green-400 to-green-700"
		class:opacity-30={!filled}
	></div>
{/snippet}
