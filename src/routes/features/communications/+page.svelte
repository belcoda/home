<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import Badge from '$lib/comps/widgets/Badge.svelte';
	import FeatureItem from '$lib/comps/content/FeatureItem.svelte';
	import CTA1 from '$lib/comps/content/CTA1.svelte';
	import heroImage from '$lib/comps/content/assets/belocoda-features-organizing.png';
	import imageAsmaa from '$lib/assets/avatars/asmaa.jpg';
	import ScreenMobileOneImage from './screen-mobile-1.png';
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
						Reach people where they actually pay attention.
					</p>
					<p class="mt-6 text-lg/8 text-gray-300">
						Email or WhatsApp—one workflow built for organizers who need clarity, not marketing
						software. Write your message, choose your audience, send with confidence.
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
								“Belcoda handles batching, retries, and delivery tracking behind the scenes, so
								every message lands with confidence.”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex gap-x-4 text-sm/6">
							<img src={imageAsmaa} alt="Belcoda organizer" class="size-6 flex-none rounded-full" />
							<div>
								<span class="font-semibold text-white">Belcoda organizer</span> –
								<span class="text-gray-400">Community leader</span>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<img
				src={heroImage}
				alt="Screenshot of Belcoda Communications"
				class="w-3xl max-w-none rounded-xl shadow-xl sm:w-228 md:-ml-4 lg:ml-0"
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
					Both channels act the same way, so you choose what fits your community—not what the
					software happens to support.
				</FeatureItem>
				<FeatureItem title="Simple, clear message creation" icon="pen-line">
					A block editor keeps emails readable while template-based WhatsApp messages stay within
					WhatsApp’s rules. Clean formatting, smart preview text, multiple sender identities, and
					fast test sends mean you always know what recipients will see.
				</FeatureItem>
				<FeatureItem title="Target the right people" icon="users">
					Filter by tags, groups, events, locations, or custom fields to build precise audiences.
					Counts update automatically and always respect opt-outs—no accidental blasts and no “send
					to everyone.”
				</FeatureItem>
				<FeatureItem title="Reliable delivery" icon="shield-check">
					Belcoda handles batching, retries, and delivery tracking, logging every message to each
					person’s profile so you maintain a communication history you can trust.
				</FeatureItem>
				<FeatureItem title="Transparent WhatsApp costs" icon="wallet-cards">
					See estimated WhatsApp spend before you send, broken down by recipient countries. If your
					balance can’t cover it, the system stops the send so there are no surprise charges.
				</FeatureItem>
				<FeatureItem title="Drafts that don’t disappear" icon="file-stack">
					Drafts save automatically as you work. Clone past messages to make new ones quickly, and
					rest easy knowing nothing goes out until you explicitly choose to send.
				</FeatureItem>
			</dl>
		</div>
	</div>
</div>

<!-- Unified Messaging -->
<div class="bg-white pb-24 sm:pb-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
			<div class="lg:pr-12">
				<h2 class="text-base/7 font-semibold text-indigo-600">Unified messaging</h2>
				<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
					Email & WhatsApp, side by side
				</p>
				<p class="mt-6 text-lg/8 text-gray-600">
					Send long-form updates about campaigns by email or quick reminders over WhatsApp without
					losing context. Both channels run through the same builder so you never need to re-enter
					details or trace information across tools.
				</p>
				<ul class="mt-8 space-y-4 text-base/7 text-gray-700">
					<li class="flex gap-3">
						<span
							class="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600"
							>1</span
						>
						<span>Write once and choose the right channel for each audience or update.</span>
					</li>
					<li class="flex gap-3">
						<span
							class="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600"
							>2</span
						>
						<span>Switch between channels without rebuilding content or reloading data.</span>
					</li>
					<li class="flex gap-3">
						<span
							class="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600"
							>3</span
						>
						<span>Keep audience history unified so every organizer sees the same context.</span>
					</li>
				</ul>
			</div>
			<div class="lg:pl-12">
				<h2 class="text-base/7 font-semibold text-indigo-600">Simple, clear creation</h2>
				<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
					Block editor + compliant templates
				</p>
				<p class="mt-6 text-lg/8 text-gray-600">
					The email block editor keeps formatting tidy and accessible, while template-based WhatsApp
					messages stay compliant with WhatsApp’s requirements. Preview text, multiple sender
					identities, and fast test sends ensure you ship messages that feel polished and personal.
				</p>
				<p class="mt-4 text-base/7 text-gray-700">
					Swap between identities without leaving the composer, set different reply-to addresses,
					and lock preview text when it matters. The workflow is built for organizers—not for
					marketing automation teams.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Targeting & Delivery -->
<div class="overflow-hidden bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center"
		>
			<div class="lg:pr-12">
				<h2 class="text-base/7 font-semibold text-indigo-600">Targeting that respects people</h2>
				<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
					Filters you can trust
				</p>
				<p class="mt-6 text-lg/8 text-gray-700">
					Build audiences with filters for tags, groups, events, locations, or custom fields. Counts
					update in real time and automatically exclude opt-outs, so you never accidentally contact
					the wrong people.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					Combine includes and excludes, AND/OR logic, and saved filters to mirror how your
					community is organized. Every recipient list is intentional before you hit send.
				</p>
			</div>
			<div class="lg:pl-12">
				<h2 class="text-base/7 font-semibold text-indigo-600">Reliable delivery</h2>
				<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
					Zero guesswork when it’s time to send
				</p>
				<p class="mt-6 text-lg/8 text-gray-700">
					Belcoda batches and retries automatically, handles timezone-aware sending, and logs every
					message back to each person’s profile so communication history stays intact.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					Check delivery status at a glance and keep your team aligned with a single source of truth
					for past outreach.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Costs & Drafts -->
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl lg:max-w-none">
			<div class="grid gap-16 lg:grid-cols-2">
				<div>
					<h2 class="text-base/7 font-semibold text-indigo-600">Transparent WhatsApp costs</h2>
					<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
						Know spend before you send
					</p>
					<p class="mt-6 text-lg/8 text-gray-700">
						Before sending, Belcoda shows the exact estimated WhatsApp cost based on recipient
						countries. If your balance can’t cover it, the system stops the send—no surprise charges
						or unexpected bills.
					</p>
					<p class="mt-4 text-base/7 text-gray-600">
						Actual costs reconcile automatically after delivery so you can track spend down to the
						fraction of a cent.
					</p>
				</div>
				<div>
					<h2 class="text-base/7 font-semibold text-indigo-600">Drafts that don’t disappear</h2>
					<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
						Stay in draft until you’re ready
					</p>
					<p class="mt-6 text-lg/8 text-gray-700">
						Drafts save automatically as you write, tweak filters, or adjust send settings. Clone
						past messages to jumpstart new outreach and keep iterating without fear of losing work.
					</p>
					<p class="mt-4 text-base/7 text-gray-600">
						Nothing sends until you explicitly send it, giving teams time to review messaging and
						make sure every detail is right.
					</p>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-20 max-w-3xl text-center">
			<p class="text-2xl font-semibold tracking-tight text-gray-900">
				Reach people with intention, every time.
			</p>
			<p class="mt-4 text-lg/8 text-gray-700">
				Belcoda keeps communications clear, affordable, and accountable so organizers can focus on
				the relationships that make change possible.
			</p>
		</div>
	</div>
</div>

<CTA1 />
<Footer />
