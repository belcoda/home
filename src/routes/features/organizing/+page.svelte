<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import Badge from '$lib/comps/widgets/Badge.svelte';
	import imageOrganizing from './belocoda-features-organizing.png';
	import FeatureItem from '$lib/comps/content/FeatureItem.svelte';
	import CTA1 from '$lib/comps/content/CTA1.svelte';
	import imageAsmaa from '$lib/assets/avatars/asmaa.jpg';
	import ScreenMobileOneImage from './screen-mobile-2.png';
</script>

<Header />
<div class="overflow-hidden bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start"
		>
			<div class="lg:pt-4 lg:pr-4">
				<div class="mt-12 lg:max-w-lg">
					<div class="mb-4"><Badge>Organizing</Badge></div>
					<p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
						Your community. At your fingertips.
					</p>
					<p class="mt-6 text-lg/8 text-gray-300">
						All your organization’s data, all in one place. Boost your efficiency and unlock new
						possibilities.
					</p>
					<div class="mt-8">
						<a
							href="https://app.belcoda.com/signup"
							class="inline-flex rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>Get started now <span class="ml-1" aria-hidden="true">→</span></a
						>
					</div>
					<figure class="mt-16 border-l border-gray-700 pl-8 text-gray-300">
						<blockquote class="text-base/7">
							<p>
								“Belcoda helps us stay connected, share updates instantly, and build stronger bonds
								in our community.”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex gap-x-4 text-sm/6">
							<img src={imageAsmaa} alt="Asmaa Hanafi" class="size-6 flex-none rounded-full" />
							<div>
								<span class="font-semibold text-white">Asmaa Hanafi</span> –
								<span class="text-gray-400">Green Society</span>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<img
				src={imageOrganizing}
				alt="Screenshot of the Organizing feature"
				class="w-3xl max-w-none rounded-xl sm:w-228 md:-ml-4 lg:ml-0"
			/>
		</div>
	</div>
</div>

<!-- Hero Section -->
<!-- <section class="relative bg-indigo-600 text-white">
	<div class="mx-auto max-w-7xl px-6 py-20 text-center">
		<h1 class="text-4xl font-bold sm:text-5xl">Community: Know Who You're Organizing With</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg sm:text-xl">
			Belcoda helps organizers understand relationships—not just store contacts. Track engagement,
			uncover patterns, and stay connected to the humans behind the data.
		</p>
	</div>
</section> -->

<!-- Features Grid -->
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base/7 font-semibold text-indigo-600">Community</h2>
			<p
				class="mt-2 text-4xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
			>
				Know who you're organizing with
			</p>
			<p class="mt-6 text-lg/8 text-gray-700">
				Belcoda turns data into insight: see engagement patterns, segment intuitively, and empower
				your team to organize smarter.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				<FeatureItem title="Secure Central Data Store" icon="database-zap">
					All your community data lives in one safe, centralized space. Profiles, tags, groups, and
					interactions are synced in real time across devices. Soft deletes, verification checks,
					and duplicate prevention keep your data reliable and trustworthy.
				</FeatureItem>
				<FeatureItem title="Contacts and Groups" icon="users">
					Create rich profiles for every person: email, phone, address, social links, and custom
					fields for skills, interests, or availability. Organize people into groups—geographic
					chapters, committees, or affinity networks—and assign admins to manage membership.
					Profiles show who belongs where and who manages each connection.
				</FeatureItem>
				<FeatureItem title="Activity Timeline" icon="activity-timeline">
					Create rich profiles for every person: email, phone, address, social links, and custom
					fields for skills, interests, or availability. Organize people into groups—geographic
					chapters, committees, or affinity networks—and assign admins to manage membership.
					Profiles show who belongs where and who manages each connection.
				</FeatureItem>
				<FeatureItem title="Advanced Filtering" icon="sliders-horizontal">
					Find the people who matter, fast. Filter by demographics, engagement history, group
					membership, tags, or point-person relationships. Use AND/OR logic, temporal filters, or
					smart search that guesses intent as you type—no complicated syntax needed. Combine
					multiple filters to create targeted lists for outreach, events, or campaigns.
				</FeatureItem>
				<FeatureItem title="Imports via CSV" icon="file-up">
					Bulk-upload contacts and keep your database in sync with external systems. Map columns,
					track errors, and correct issues quickly. Use external IDs to merge with existing CRMs or
					registration platforms without losing data integrity.
				</FeatureItem>

				<FeatureItem title="Tags" icon="hash">
					Flexible labels for every purpose. Track volunteers, donors, event participants, or custom
					categories unique to your work. Apply multiple tags, remove them easily, and filter your
					entire community in seconds. Tags grow organically as your organizing needs evolve.
				</FeatureItem>
			</dl>
		</div>
	</div>
</div>

<!-- permissions section-->
<div class="overflow-hidden bg-white pt-12 pb-24 sm:pb-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:ml-auto lg:pt-4 lg:pl-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base/7 font-semibold text-indigo-600">Permissions system</h2>
					<p
						class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
					>
						Flexible and intuitive permissions
					</p>
					<p class="mt-6 text-lg/8 text-gray-600">
						Belcoda gives the right access to the right people. Let your volunteers use Belcoda with
						only the data they need to do their job.
					</p>
					<dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									data-slot="icon"
									aria-hidden="true"
									class="absolute top-1 left-1 size-5 text-indigo-600"
								>
									<path
										d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
										clip-rule="evenodd"
										fill-rule="evenodd"
									/>
								</svg>
								Admins:
							</dt>
							<dd class="inline">Full management access to the organization and all its teams</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									data-slot="icon"
									aria-hidden="true"
									class="absolute top-1 left-1 size-5 text-indigo-600"
								>
									<path
										d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
										clip-rule="evenodd"
										fill-rule="evenodd"
									/>
								</svg>
								Teams & Team Leaders:
							</dt>
							<dd class="inline">
								Team leaders manage members and communications for their assigned teams.
							</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									data-slot="icon"
									aria-hidden="true"
									class="absolute top-1 left-1 size-5 text-indigo-600"
								>
									<path
										d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z"
									/>
									<path
										d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
										clip-rule="evenodd"
										fill-rule="evenodd"
									/>
								</svg>
								Points people:
							</dt>
							<dd class="inline">
								Manage relationships for assigned community members without admin privileges.
							</dd>
						</div>
					</dl>
				</div>
				<p class="mt-6 text-lg/8 text-gray-600">
					Permissions cascade naturally—if you can edit someone, you can see their full profile; if
					you manage a group, you can add or remove members.
				</p>
			</div>

			<div class="flex items-start justify-end lg:order-first">
				<img
					src={ScreenMobileOneImage}
					alt="Product screenshot"
					class="mx-auto w-md lg:-mt-12 lg:w-lg"
				/>
			</div>
		</div>
	</div>
</div>

<!-- Call to Action -->
<CTA1 />
<Footer />
