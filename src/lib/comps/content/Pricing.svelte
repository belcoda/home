<script lang="ts">
	import Badge from '$lib/comps/widgets/Badge.svelte';

	import { tiers } from '$lib/comps/content/pricing';
	const backgroundImage = '/background-auth.jpg';
</script>

<div class="bg-gray-900 bg-cover bg-center" style="background-image: url({backgroundImage})">
	<div class="mx-auto max-w-7xl px-6 pt-24 pb-96 text-center sm:pt-32 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<h2 class="text-base/7 font-semibold">
				<Badge>Pricing</Badge>
			</h2>
			<p class="mt-2 text-5xl font-extrabold text-balance text-white sm:text-6xl">
				Free. For everyone. Forever.
			</p>
		</div>
		<div class="relative mt-6">
			<p class="mx-auto max-w-2xl text-lg font-medium text-pretty text-blue-200 sm:text-xl/8">
				Belcoda is free for all grassroots organizations and communities. We also offer partnerships
				for large networks and enterprise organizations.
			</p>
		</div>
	</div>
	<div class="flow-root pb-24 sm:pb-32">
		<div class="-mt-80">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
					{#each tiers as tier}
						<div class="flex flex-col justify-between rounded-3xl bg-white/80 p-8 sm:p-10">
							<div>
								<h3
									id="tier-{tier.name.toLowerCase()}"
									class="text-base/7 font-semibold text-blue-900"
								>
									{tier.name}
								</h3>
								<div class="mt-4 flex items-baseline gap-x-2">
									{#if tier.name === 'Free'}
										<span class="text-4xl font-semibold tracking-tight text-gray-900">Free</span>
									{/if}
									{#if tier.name === 'Supported'}
										<span class="text-4xl font-semibold tracking-tight text-gray-900"
											>Partnership</span
										>
									{/if}
									{#if tier.name === 'Network'}
										<span class="text-4xl font-semibold tracking-tight text-gray-900"
											>Get in touch</span
										>
									{/if}
								</div>
								<p class="mt-6 text-base/7 text-gray-600">
									{tier.description}
								</p>
								<ul role="list" class="mt-10 space-y-4 text-sm/6 text-gray-600">
									{#each tier.features as feature}
										<li class="flex gap-x-3">
											<svg
												viewBox="0 0 20 20"
												fill="currentColor"
												data-slot="icon"
												aria-hidden="true"
												class="h-6 w-5 flex-none text-blue-900"
											>
												<path
													d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
													clip-rule="evenodd"
													fill-rule="evenodd"
												/>
											</svg>
											{feature.name}
										</li>
									{/each}
								</ul>
							</div>
							{#if tier.name === 'Free'}
								<a
									href="http://app.belcoda.com/signup"
									aria-describedby="tier-{tier.name.toLowerCase()}"
									class="mt-8 block rounded-md bg-blue-900 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
									>Get started</a
								>
							{/if}
							{#if tier.name === 'Supported'}
								<a
									href="https://cal.com/belcoda/belcoda-supported-tier-exploration-call"
									target="_blank"
									aria-describedby="tier-{tier.name.toLowerCase()}"
									class="mt-8 block rounded-md bg-blue-900 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
									>Apply for support</a
								>
							{/if}
							{#if tier.name === 'Network'}
								<a
									href="https://cal.com/belcoda/belcoda-network-exploration-call"
									aria-describedby="tier-{tier.name.toLowerCase()}"
									class="mt-8 block rounded-md bg-blue-900 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
									>Schedule a call</a
								>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
