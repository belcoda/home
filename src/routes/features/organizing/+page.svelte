<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import Badge from '$lib/comps/widgets/Badge.svelte';
	import imageOrganizing from '$lib/comps/content/assets/browser-mockup-community.webp';
	import FeatureItem from '$lib/comps/content/FeatureItem.svelte';
	import CTA1 from '$lib/comps/content/CTA1.svelte';
	import imageAsmaa from '$lib/assets/avatars/asmaa.jpg';
	import ScreenMobileOneImage from '$lib/comps/content/assets/phone-mockup.webp';
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
						Your community — at your fingertips.
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
				class="w-3xl max-w-none rounded-xl sm:w-228 md:-ml-4 lg:mt-12 lg:ml-0"
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
									xmlns="http://www.w3.org/2000/svg"
									width="20px"
									height="20px"
									class="absolute top-1 left-1 size-5 text-indigo-600"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08"
									/></svg
								>

								Admins:
							</dt>
							<dd class="inline">Full management access to the organization and all its teams</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20px"
									height="20px"
									class="absolute top-1 left-1 size-5 text-indigo-600"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M1 17.2q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2v.8q0 .825-.587 1.413T15 20H3q-.825 0-1.412-.587T1 18zM18.45 20q.275-.45.413-.962T19 18v-1q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v1q0 .825-.587 1.413T21 20zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.062t-.7-.138q.675-.8 1.038-1.775T15 8t-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8"
									/></svg
								>

								Teams & Team Leaders:
							</dt>
							<dd class="inline">
								Team leaders manage members and communications for their assigned teams.
							</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20px"
									height="20px"
									viewBox="0 0 20 20"
									class="absolute top-1 left-1 size-5 text-indigo-600"
									><path
										fill="currentColor"
										fill-rule="evenodd"
										d="M9 3a1 1 0 0 1 2 0v5.5a.5.5 0 0 0 1 0V4a1 1 0 1 1 2 0v4.5a.5.5 0 0 0 1 0V6a1 1 0 1 1 2 0v5a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v2.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 2 0v4.5a.5.5 0 0 0 1 0z"
										clip-rule="evenodd"
									/></svg
								>
								Point people:
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
				<img src={ScreenMobileOneImage} alt="Product screenshot" class="mx-auto w-96 lg:w-xs" />
			</div>
		</div>
	</div>
</div>

<!-- Call to Action -->
<CTA1 />
<Footer />
