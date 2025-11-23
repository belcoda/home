<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import Badge from '$lib/comps/widgets/Badge.svelte';
	import FeatureItem from '$lib/comps/content/FeatureItem.svelte';
	import CTA1 from '$lib/comps/content/CTA1.svelte';
	import heroImage from '$lib/comps/content/assets/browser-mockup-communications.webp';
	import imageEmmanuel from '$lib/assets/avatars/emmanuel.webp';
</script>

<Header />
<div class="overflow-hidden bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start"
		>
			<div class="lg:pt-4 lg:pr-4">
				<div class="mt-12 lg:max-w-lg">
					<div class="mb-4"><Badge>Communications</Badge></div>
					<p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
						Messages that get read. And acted upon.
					</p>
					<p class="mt-6 text-lg/8 text-gray-300">
						Simple but powerful tools for email and WhatsApp. Write your message, choose your
						audience, hit send — and wait for the results.
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
							<p>“For the first time, I could send emails to our members and donors easily.”</p>
						</blockquote>
						<figcaption class="mt-6 flex gap-x-4 text-sm/6">
							<img
								src={imageEmmanuel}
								alt="Belcoda organizer"
								class="size-6 flex-none rounded-full"
							/>
							<div>
								<span class="font-semibold text-white">Emmanuel Ng’olepus</span> –
								<span class="text-gray-400">Pads4Education</span>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<img
				src={heroImage}
				alt="Screenshot of Belcoda Communications"
				class="w-3xl max-w-none rounded-xl shadow-xl sm:w-228 md:-ml-4 lg:mt-12 lg:ml-0"
			/>
		</div>
	</div>
</div>

<!-- Feature Grid -->
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base/7 font-semibold text-indigo-600">Communications</h2>
			<p
				class="mt-2 text-4xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
			>
				Reach people with care and precision
			</p>
			<p class="mt-6 text-lg/8 text-gray-700">
				Both channels run through one workflow. Craft thoughtful messages, target exactly the right
				people, and trust that delivery, cost controls, and history tracking happen automatically.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				<FeatureItem title="Email & WhatsApp, together" icon="message-square">
					Send long-form updates by email or quick reminders over WhatsApp without switching tools.
				</FeatureItem>
				<FeatureItem title="Simple, clear message creation" icon="pen-line">
					Clean formatting, smart preview text, multiple sender identities, and fast test sends mean
					you always know what recipients will see.
				</FeatureItem>
				<FeatureItem title="Target the right people" icon="users">
					Filter by tags, groups, events, locations, or custom fields to build precise audiences and
					send to the right people every time.
				</FeatureItem>
				<FeatureItem title="Reliable delivery" icon="shield-check">
					Belcoda handles batching, retries, and delivery tracking, logging every message to each
					person’s profile so you maintain a communication history you can trust.
				</FeatureItem>
				<FeatureItem title="Transparent WhatsApp costs" icon="wallet-cards">
					See estimated WhatsApp spend before you send, broken down by recipient countries. No extra
					charges beyond the standard Meta rates.
				</FeatureItem>
				<FeatureItem title="Easy template management" icon="file-stack">
					Create and manage templates for your WhatsApp messages with a simple drag-and-drop editor,
					including approval tracking.
				</FeatureItem>
			</dl>
		</div>
	</div>
</div>

<CTA1 />
<Footer />
