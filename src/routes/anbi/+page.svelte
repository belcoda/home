<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
</script>

<svelte:head>
	<title>ANBI | Belcoda</title>
	<meta
		name="description"
		content="Learn about Belcoda, a platform for community organizing and activism."
	/>
</svelte:head>

<div
	class="relative flex h-100 w-full items-end justify-start bg-linear-to-br from-gray-700 to-slate-500 bg-cover bg-center bg-no-repeat"
>
	<Header />

	<div class="z-10 mx-auto mb-8 w-full max-w-5xl px-4">
		<!-- Title -->
		<h1 class="text-4xl font-extrabold tracking-tight text-balance text-white">ANBI</h1>
		<!-- Description -->
		<p class="mt-2 text-lg/8 text-pretty text-white/70">
			Stichting Belcoda is a public benefit organization registered in the Netherlands.
		</p>
	</div>
</div>

<main>
	<section
		class="mx-auto my-12 max-w-4xl rounded-xl border border-slate-200 bg-white p-8 font-sans shadow-sm"
	>
		<div class="mb-8 flex items-center justify-between border-b border-slate-100 pb-6">
			<div>
				<h2 class="text-2xl leading-tight font-bold text-slate-900">
					Public Benefit Organization Disclosure
				</h2>
			</div>
			<div
				class="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700"
			>
				Stichting Belcoda
			</div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="space-y-4">
				<div>
					<h3 class="mb-2 text-sm font-bold text-slate-400 uppercase">Legal Information</h3>
					<ul class="space-y-1 text-slate-700">
						<li><span class="font-medium text-slate-900">RSIN:</span> 868894916</li>
						<li><span class="font-medium text-slate-900">KvK:</span> 99245884</li>
						<li>
							<span class="font-medium text-slate-900">Address:</span> Joop Geesinkweg 601, 1114AB Amsterdam-Duivendrecht,
							Netherlands
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-2 text-sm font-bold text-slate-400 uppercase">Governance</h3>
					<p class="mb-4 text-sm leading-relaxed text-slate-600 italic">
						The Board serves on a strictly voluntary basis without remuneration.
					</p>
				</div>
			</div>

			<div class="space-y-4">
				<div>
					<h3 class="mb-2 text-sm font-bold text-slate-400 uppercase">Objective</h3>
					<p class="text-sm leading-relaxed text-slate-700">
						Bridging the digital divide by providing specialized software tools and technical
						training to social change organizations in the Global South.
					</p>
				</div>

				<div>
					<h3 class="mb-2 text-sm font-bold text-slate-400 uppercase">Public Documents</h3>
					<div class="flex flex-col space-y-2">
						<a
							href="/documents/2026/Stichting Belcoda Beleidsplan.pdf"
							class="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-800"
						>
							<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path></svg
							>
							Policy Plan (Beleidsplan)
						</a>
						<a
							href="/documents/2026/Stichting Belcoda Financial Plan.pdf"
							class="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-800"
						>
							<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path></svg
							>
							Financial Statement & Budget
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Board Members -->
		<div class="mt-2">
			<h3 class="mb-6 text-sm font-bold text-slate-400 uppercase">Statutory Board Members</h3>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
				{#each [{ role: 'President', name: 'Django Merope', linkedIn: 'https://linkedin.com/in/dmsynge', imgUrl: '/avatars/djangoillust.png' }, { role: 'Secretary', name: 'AE Moores', linkedIn: 'https://linkedin.com/in/mooresy', imgUrl: '/avatars/alexmoores.png' }, { role: 'Treasurer', name: 'Doug Hall', linkedIn: 'https://linkedin.com/in/doughall01', imgUrl: '/avatars/doughall.png' }] as member}
					<div
						class="flex flex-col items-center rounded-lg border border-slate-100 bg-slate-50/50 p-6 text-center"
					>
						<img
							src={member.imgUrl}
							alt={member.name}
							class="mb-4 h-24 w-24 rounded-full object-cover grayscale"
						/>
						<p class="text-xs font-bold tracking-wide text-slate-400 uppercase">{member.role}</p>
						<p class="mt-1 font-semibold text-slate-900">{member.name}</p>
						<a
							href={member.linkedIn}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn profile"
							class="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
						>
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
						</a>
					</div>
				{/each}
			</div>
		</div>

		<!-- About ANBI Status -->
		<div class="mt-4">
			<h3 class="mb-6 text-sm font-bold text-slate-400 uppercase">About ANBI Status</h3>
			<div class="space-y-6 text-sm leading-relaxed text-slate-700">
				<div>
					<h4 class="mb-2 font-semibold text-slate-900">What is ANBI status?</h4>
					<p>
						ANBI (Algemeen Nut Beogende Instelling) is a Dutch designation for organisations that
						pursue a public benefit. The Tax Authority awards this status to institutions that
						devote at least 90% of their activities to the public good—for example, charities,
						cultural bodies, or foundations like Stichting Belcoda that support social change
						organisations in the Global South.
					</p>
				</div>
				<div>
					<h4 class="mb-2 font-semibold text-slate-900">Why does it matter for donors?</h4>
					<p>
						ANBI recognition brings tax advantages for Dutch taxpayers who support the foundation.
						Both recurring gifts from individuals and single donations from companies may be
						deductible from income tax or corporate tax, making it easier for supporters to
						contribute to our work.
					</p>
				</div>
				<div>
					<h4 class="mb-2 font-semibold text-slate-900">What must an ANBI do?</h4>
					<p>
						To qualify, an organisation must serve the public interest and operate without a profit
						motive. It must also publish key information—including contact details, financial
						statements, policy plans, and current activities—so that anyone can see how the
						organisation is run. This page and the linked documents fulfil those transparency
						requirements for Stichting Belcoda.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>
<Footer />
