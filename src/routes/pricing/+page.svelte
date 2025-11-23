<script lang="ts">
	import FAQ from '$lib/comps/content/FAQ.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import Header from '$lib/comps/nav/Header.svelte';
	import CTA1 from '$lib/comps/content/CTA1.svelte';

	import PricingGridItem from './PricingGridItem.svelte';
	let paymentSchedule: 'monthly' | 'annual' = $state('monthly');
	import { tiers } from '$lib/comps/content/pricing';

	type FeatureValue =
		| boolean
		| number
		| 'Unlimited'
		| '$1.20'
		| '~$0.25'
		| 'Rate card'
		| 'Basic'
		| 'Advanced'
		| 'Custom';

	interface Feature {
		name: string;
		mobileName?: string; // Optional mobile-specific name (for starter tier)
		starter: FeatureValue;
		scale: FeatureValue;
		growth: FeatureValue;
	}

	interface FeatureCategory {
		name: string;
		features: Feature[];
	}

	const comparisonData: FeatureCategory[] = [
		{
			name: 'Organizing',
			features: [
				{
					name: 'Contacts',
					mobileName: 'Contacts',
					starter: 'Unlimited',
					scale: 'Unlimited',
					growth: 'Unlimited'
				},
				{
					name: 'Teams',
					starter: 'Unlimited',
					scale: 'Unlimited',
					growth: 'Unlimited'
				},
				{
					name: 'Users & volunteers',
					starter: 'Unlimited',
					scale: 'Unlimited',
					growth: 'Unlimited'
				},
				{
					name: 'Tracked WhatsApp groups',
					starter: 'Unlimited',
					scale: 'Unlimited',
					growth: 'Unlimited'
				},
				{
					name: 'Administrator accounts',
					starter: 3,
					scale: 25,
					growth: 'Unlimited'
				},
				{
					name: 'Analytics & report',
					starter: 'Basic',
					scale: 'Advanced',
					growth: 'Custom'
				},
				{ name: 'Data import/export', starter: true, scale: true, growth: true },
				{ name: 'Duplicate management', starter: true, scale: true, growth: true },
				{ name: 'Contact notes', starter: true, scale: true, growth: true }
			]
		},
		{
			name: 'Email',
			features: [
				{
					name: 'Email price (per 1000 emails)',
					starter: '$1.20',
					scale: '$1.20',
					growth: '~$0.25'
				},
				{ name: 'Included emails', starter: 100, scale: 15000, growth: 100000 },
				{
					name: 'Email send signatures',
					starter: 'Unlimited',
					scale: 'Unlimited',
					growth: 'Unlimited'
				},
				{ name: 'Custom email templates', starter: false, scale: true, growth: true }
			]
		},
		{
			name: 'WhatsApp',
			features: [
				{
					name: 'WhatsApp interactive threads',
					starter: false,
					scale: 'Unlimited',
					growth: 'Unlimited'
				},
				{
					name: 'WhatsApp price (per message)',
					starter: false,
					scale: 'Rate card',
					growth: 'Rate card'
				},
				{ name: 'WhatsApp templates', starter: false, scale: 'Unlimited', growth: 'Unlimited' },
				{ name: 'Custom WhatsApp system messages', starter: false, scale: false, growth: true }
			]
		},
		{
			name: 'Events',
			features: [
				{
					name: 'Events & event pages',
					starter: 'Unlimited',
					scale: 'Unlimited',
					growth: 'Unlimited'
				},
				{ name: 'Custom event page templates', starter: false, scale: true, growth: true },
				{ name: 'Custom event email templates', starter: false, scale: true, growth: true },
				{ name: 'Email event reminders', starter: true, scale: true, growth: true },
				{ name: 'WhatsApp event reminders', starter: false, scale: false, growth: true },
				{ name: 'Sign up via WhatsApp', starter: true, scale: true, growth: true }
			]
		},
		{
			name: 'Infrastructure',
			features: [
				{ name: 'Desktop app', starter: true, scale: true, growth: true },
				{ name: 'Dedicated infrastructure', starter: false, scale: false, growth: true },
				{ name: 'Single sign-on (SSO)', starter: false, scale: false, growth: true },
				{ name: 'Audit logs', starter: false, scale: false, growth: true },
				{ name: 'Multi-organization network', starter: false, scale: false, growth: true },
				{ name: 'REST API', starter: true, scale: true, growth: true },
				{ name: 'Webhooks', starter: true, scale: true, growth: true },
				{ name: 'Integrations', starter: true, scale: true, growth: true },
				{ name: 'Direct SQL access (read only)', starter: false, scale: false, growth: true }
			]
		},
		{
			name: 'Support',
			features: [
				{ name: 'Community support', starter: true, scale: true, growth: true },
				{ name: 'Workshops & masterclasses', starter: true, scale: true, growth: true },
				{ name: 'Chat and email support', starter: false, scale: true, growth: true },
				{ name: 'Dedicated support engineer', starter: false, scale: false, growth: true },
				{ name: 'White-glove onboarding', starter: false, scale: false, growth: true }
			]
		}
	];

	const tierInfo = [
		{ name: tiers[0].name, description: 'Everything you need to get started.' },
		{ name: tiers[1].name, description: 'Added flexibility at scale.' },
		{ name: tiers[2].name, description: 'All the extras for your growing team.' }
	];

	function getFeatureValue(
		value: FeatureValue,
		tierIndex: number,
		isFeatured: boolean
	): {
		type: 'yes' | 'no' | 'number' | 'unlimited';
		display: string;
	} {
		if (value === true) {
			return { type: 'yes', display: 'Yes' };
		}
		if (value === false) {
			return { type: 'no', display: 'No' };
		}
		if (value === 'Unlimited') {
			return { type: 'unlimited', display: 'Unlimited' };
		}
		return { type: 'number', display: String(value) };
	}
</script>

{#snippet checkIcon()}
	<svg
		viewBox="0 0 20 20"
		fill="currentColor"
		data-slot="icon"
		aria-hidden="true"
		class="mx-auto size-5 text-blue-800"
	>
		<path
			d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
			clip-rule="evenodd"
			fill-rule="evenodd"
		/>
	</svg>
	<span class="sr-only">Yes</span>
{/snippet}

{#snippet xIcon()}
	<svg
		viewBox="0 0 20 20"
		fill="currentColor"
		data-slot="icon"
		aria-hidden="true"
		class="mx-auto size-5 text-gray-400"
	>
		<path
			d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
		/>
	</svg>
	<span class="sr-only">No</span>
{/snippet}

{#snippet featureValue(value: FeatureValue, isFeatured: boolean = false, isScale: boolean = false)}
	{#if value === true}
		{@render checkIcon()}
	{:else if value === false}
		{@render xIcon()}
	{:else if value === 'Unlimited'}
		<span class="text-sm/6 {isScale ? 'font-semibold text-blue-800' : 'text-gray-900'}"
			>Unlimited</span
		>
	{:else if value === 'Rate card'}
		<a
			href="https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
			target="_blank"
			class="text-sm/6 text-blue-700 hover:text-blue-800 hover:underline">Rate card</a
		>
	{:else}
		<span class="text-sm/6 text-gray-900">{value}</span>
	{/if}
{/snippet}

{#snippet mobileFeatureRow(
	feature: Feature,
	tierValue: FeatureValue,
	isFeatured: boolean,
	isScale: boolean = false,
	tierIndex: number = 0
)}
	<div class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
		<dt class="pr-4 text-gray-600">
			{tierIndex === 0 && feature.mobileName ? feature.mobileName : feature.name}
		</dt>
		<dd class="flex items-center justify-end sm:justify-center sm:px-4">
			{@render featureValue(tierValue, isFeatured, isScale)}
		</dd>
	</div>
{/snippet}

{#snippet desktopFeatureRow(feature: Feature, isLast: boolean)}
	<tr>
		<th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-gray-900">
			{feature.name}
			{#if !isLast}
				<div class="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
			{/if}
		</th>
		<td class="relative w-1/4 px-4 py-0 text-center">
			<span class="relative size-full py-3">
				{@render featureValue(feature.starter)}
			</span>
		</td>
		<td class="relative w-1/4 px-4 py-0 text-center">
			<span class="relative size-full py-3">
				{@render featureValue(feature.scale, false, true)}
			</span>
		</td>
		<td class="relative w-1/4 px-4 py-0 text-center">
			<span class="relative size-full py-3">
				{@render featureValue(feature.growth)}
			</span>
		</td>
	</tr>
{/snippet}

{#snippet mobileCategorySection(category: FeatureCategory, tierIndex: number, isFeatured: boolean)}
	<div>
		<h4 class="text-sm/6 font-semibold text-gray-900">
			{category.name === 'Features' && tierIndex === 0 ? 'Core' : category.name}
		</h4>
		<div class="relative mt-6">
			<!-- Fake card background -->
			<div
				aria-hidden="true"
				class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-xs sm:block"
			></div>

			<div
				class="relative rounded-lg bg-white shadow-xs {isFeatured
					? 'ring-2 ring-blue-800'
					: 'ring-1 ring-gray-900/10'} sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0"
			>
				<dl class="divide-y divide-gray-200 text-sm/6">
					{#each category.features as feature}
						{@render mobileFeatureRow(
							feature,
							tierIndex === 0 ? feature.starter : tierIndex === 1 ? feature.scale : feature.growth,
							isFeatured,
							tierIndex === 1,
							tierIndex
						)}
					{/each}
				</dl>
			</div>

			<!-- Fake card border -->
			<div
				aria-hidden="true"
				class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg {isFeatured
					? 'ring-2 ring-blue-800'
					: 'ring-1 ring-gray-900/10'} sm:block"
			></div>
		</div>
	</div>
{/snippet}

<svelte:head>
	<title>Pricing | Belcoda</title>
</svelte:head>

<Header />
<form class="group/tiers isolate overflow-hidden bg-white">
	<div class="flow-root border-b border-b-transparent bg-gray-900 pt-24 pb-16 sm:pt-48 lg:pb-0">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="relative z-10">
				<h2
					class="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl"
				>
					Free. Forever. For everyone.
				</h2>
				<p
					class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
				>
					Belcoda is free for everyone. Paid plans include additional features designed for networks
					and institutions.
				</p>
				<div class="mt-16 flex justify-center">
					<fieldset aria-label="Payment frequency">
						<div
							class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white"
						>
							<label class="group relative rounded-full px-2.5 py-1 has-checked:bg-blue-800">
								<input
									type="radio"
									name="frequency"
									value="monthly"
									bind:group={paymentSchedule}
									checked
									class="absolute inset-0 appearance-none rounded-full"
								/>
								<span class="text-white">Monthly</span>
							</label>
							<label class="group relative rounded-full px-2.5 py-1 has-checked:bg-blue-800">
								<input
									type="radio"
									name="frequency"
									value="annual"
									bind:group={paymentSchedule}
									class="absolute inset-0 appearance-none rounded-full"
								/>
								<span class="text-white">Annually</span>
							</label>
						</div>
					</fieldset>
				</div>
			</div>
			<div
				class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3"
			>
				<svg
					viewBox="0 0 1208 1024"
					aria-hidden="true"
					class="absolute -bottom-48 left-1/2 h-256 -translate-x-1/2 translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
				>
					<ellipse
						cx="604"
						cy="512"
						rx="604"
						ry="512"
						fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
					/>
					<defs>
						<radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
							<stop stop-color="#132045" />
							<stop offset="1" stop-color="#193158" />
						</radialGradient>
					</defs>
				</svg>
				<div
					aria-hidden="true"
					class="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
				></div>
				<div
					class="group/tier relative rounded-2xl bg-gray-800/80 outline-1 -outline-offset-1 outline-white/10 lg:bg-transparent lg:pb-14 lg:outline-0"
				>
					<div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
						<h3
							id="tier-tier-starter"
							class="text-sm/6 font-semibold text-white group-data-featured/tier:text-gray-900"
						>
							{tiers[0].name}
						</h3>
						<div
							class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
						>
							<div class="mt-2 flex items-center gap-x-4">
								<p
									class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden group-data-featured/tier:text-gray-900"
								>
									Free
								</p>
								<p
									class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=annual]:checked]/tiers:hidden group-data-featured/tier:text-gray-900"
								>
									Free
								</p>
							</div>
							<a
								href="http://app.belcoda.com/signup"
								class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white not-group-data-featured:inset-ring not-group-data-featured:inset-ring-white/5 group-data-featured/tier:bg-blue-800 group-data-featured/tier:shadow-xs hover:bg-white/20 group-data-featured/tier:hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 group-data-featured/tier:focus-visible:outline-blue-800"
								>Get started</a
							>
						</div>
						<div class="mt-8 flow-root sm:mt-10">
							<ul
								role="list"
								class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white group-data-featured/tier:divide-gray-900/5 group-data-featured/tier:border-gray-900/5 group-data-featured/tier:text-gray-600 lg:border-t-0"
							>
								{#each tiers[0].features as feature}
									<PricingGridItem>{feature.name}</PricingGridItem>
								{/each}
							</ul>
						</div>
					</div>
				</div>
				<div
					data-featured="true"
					class="group/tier relative z-10 rounded-2xl bg-white shadow-xl outline-1 outline-gray-900/10"
				>
					<div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
						<h3
							id="tier-tier-scale"
							class="text-sm/6 font-semibold text-white group-data-featured/tier:text-gray-900"
						>
							{tiers[1].name}
						</h3>
						<div
							class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
						>
							<div class="mt-2 flex items-center gap-x-4">
								<p
									class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden group-data-featured/tier:text-gray-900"
								>
									$279
								</p>
								<p
									class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=annual]:checked]/tiers:hidden group-data-featured/tier:text-gray-900"
								>
									$2,799
								</p>
								<div class="text-sm">
									<p class="text-white group-data-featured/tier:text-gray-900">USD</p>
									<p
										class="text-gray-400 group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden group-data-featured/tier:text-gray-500"
									>
										Billed monthly
									</p>
									<p
										class="text-gray-400 group-not-has-[[name=frequency][value=annual]:checked]/tiers:hidden group-data-featured/tier:text-gray-500"
									>
										Billed annually
									</p>
								</div>
							</div>
							<a
								href={`https://app.belcoda.com/signup?subscription=institution&paymentSchedule=${paymentSchedule}`}
								class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white not-group-data-featured:inset-ring not-group-data-featured:inset-ring-white/5 group-data-featured/tier:bg-blue-900 group-data-featured/tier:shadow-xs hover:bg-white/20 group-data-featured/tier:hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 group-data-featured/tier:focus-visible:outline-blue-800"
								>Subscribe now</a
							>
						</div>
						<div class="mt-8 flow-root sm:mt-10">
							<ul
								role="list"
								class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white group-data-featured/tier:divide-gray-900/5 group-data-featured/tier:border-gray-900/5 group-data-featured/tier:text-gray-600 lg:border-t-0"
							>
								{#each tiers[1].features as feature}
									<PricingGridItem>{feature.name}</PricingGridItem>
								{/each}
							</ul>
						</div>
					</div>
				</div>
				<div
					class="group/tier relative rounded-2xl bg-gray-800/80 outline-1 -outline-offset-1 outline-white/10 lg:bg-transparent lg:pb-14 lg:outline-0"
				>
					<div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
						<h3
							id="tier-tier-growth"
							class="text-sm/6 font-semibold text-white group-data-featured/tier:text-gray-900"
						>
							{tiers[2].name}
						</h3>
						<div
							class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
						>
							<div class="mt-2 flex items-center gap-x-4">
								<p
									class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden group-data-featured/tier:text-gray-900"
								>
									Get in touch
								</p>
								<p
									class="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=annual]:checked]/tiers:hidden group-data-featured/tier:text-gray-900"
								>
									Get in touch
								</p>
							</div>
							<a
								href="https://cal.com/django-merope-8wwjmi/belcoda-network-exploration-call"
								class="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white not-group-data-featured:inset-ring not-group-data-featured:inset-ring-white/5 group-data-featured/tier:bg-blue-800 group-data-featured/tier:shadow-xs hover:bg-white/20 group-data-featured/tier:hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 group-data-featured/tier:focus-visible:outline-blue-800"
								>Schedule a call</a
							>
						</div>
						<div class="mt-8 flow-root sm:mt-10">
							<ul
								role="list"
								class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white group-data-featured/tier:divide-gray-900/5 group-data-featured/tier:border-gray-900/5 group-data-featured/tier:text-gray-600 lg:border-t-0"
							>
								{#each tiers[2].features as feature}
									<PricingGridItem>{feature.name}</PricingGridItem>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="relative bg-gray-50 lg:pt-14">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<!-- Feature comparison (up to lg) -->
			<section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
				<h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

				<div class="mx-auto max-w-2xl space-y-16">
					{#each tierInfo as tier, tierIndex}
						<div class="border-t border-gray-900/10">
							<div
								class="-mt-px w-72 border-t-2 {tierIndex === 1
									? 'border-blue-800'
									: 'border-transparent'} pt-10 md:w-80"
							>
								<h3
									class="text-sm/6 font-semibold {tierIndex === 1
										? 'text-blue-800'
										: 'text-gray-900'}"
								>
									{tier.name}
								</h3>
								<p class="mt-1 text-sm/6 text-gray-600">{tier.description}</p>
							</div>

							<div class="mt-10 space-y-10">
								{#each comparisonData as category}
									{@render mobileCategorySection(category, tierIndex, tierIndex === 1)}
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Feature comparison (lg+) -->
			<section aria-labelledby="comparison-heading" class="hidden lg:block">
				<h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

				<div class="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
					<div aria-hidden="true" class="-mt-px">
						<div class="border-t-2 border-transparent pt-10">
							<p class="text-sm/6 font-semibold text-gray-900">{tiers[0].name}</p>
							<p class="mt-1 text-sm/6 text-gray-600">{tiers[0].description}</p>
						</div>
					</div>
					<div aria-hidden="true" class="-mt-px">
						<div class="border-t-2 border-blue-800 pt-10">
							<p class="text-sm/6 font-semibold text-blue-800">{tiers[1].name}</p>
							<p class="mt-1 text-sm/6 text-gray-600">{tiers[1].description}</p>
						</div>
					</div>
					<div aria-hidden="true" class="-mt-px">
						<div class="border-t-2 border-transparent pt-10">
							<p class="text-sm/6 font-semibold text-gray-900">{tiers[2].name}</p>
							<p class="mt-1 text-sm/6 text-gray-600">{tiers[2].description}</p>
						</div>
					</div>
				</div>

				<div class="-mt-6 space-y-16">
					{#each comparisonData as category}
						<div>
							<h3 class="text-sm/6 font-semibold text-gray-900">{category.name}</h3>
							<div class="relative -mx-8 mt-10">
								<!-- Fake card backgrounds -->
								<div
									aria-hidden="true"
									class="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
								>
									<div class="size-full rounded-lg bg-white shadow-xs"></div>
									<div class="size-full rounded-lg bg-white shadow-xs"></div>
									<div class="size-full rounded-lg bg-white shadow-xs"></div>
								</div>

								<table class="relative w-full border-separate border-spacing-x-8">
									<thead>
										<tr class="text-left">
											<th scope="col">
												<span class="sr-only">Feature</span>
											</th>
											<th scope="col">
												<span class="sr-only">Starter tier</span>
											</th>
											<th scope="col">
												<span class="sr-only">Scale tier</span>
											</th>
											<th scope="col">
												<span class="sr-only">Growth tier</span>
											</th>
										</tr>
									</thead>
									<tbody>
										{#each category.features as feature, featureIndex}
											{@render desktopFeatureRow(
												feature,
												featureIndex === category.features.length - 1
											)}
										{/each}
									</tbody>
								</table>

								<!-- Fake card borders -->
								<div
									aria-hidden="true"
									class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
								>
									<div class="rounded-lg ring-1 ring-gray-900/10"></div>
									<div class="rounded-lg ring-2 ring-blue-800"></div>
									<div class="rounded-lg ring-1 ring-gray-900/10"></div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</section>
		</div>
	</div>
</form>
<FAQ />
<CTA1 />
<Footer />
