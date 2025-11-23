<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import Badge from '$lib/comps/widgets/Badge.svelte';
	import FeatureItem from '$lib/comps/content/FeatureItem.svelte';
	import CTA1 from '$lib/comps/content/CTA1.svelte';
	import heroImage from '$lib/comps/content/assets/belocoda-features-organizing.png';
	import imageAsmaa from '$lib/assets/avatars/asmaa.jpg';
</script>

<Header />
<div class="overflow-hidden bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start"
		>
			<div class="lg:pt-4 lg:pr-4">
				<div class="mt-12 lg:max-w-lg">
					<div class="mb-4"><Badge>Events</Badge></div>
					<p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
						Bring your community together—online, offline, and everywhere in between.
					</p>
					<p class="mt-6 text-lg/8 text-gray-300">
						Belcoda Events is built for organizers who want less admin and more connection. Create
						welcoming event pages, register people across the channels they actually use, automate
						reminders that feel human, and track participation in real time—all seamlessly connected
						to your community database.
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
								“Belcoda isn't just about event management—it's about transforming how we organize,
								connect, and inspire action.”
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
				src={heroImage}
				alt="Screenshot of Belcoda Events"
				class="w-3xl max-w-none rounded-xl shadow-xl sm:w-228 md:-ml-4 lg:ml-0"
			/>
		</div>
	</div>
</div>

<!-- Feature Grid -->
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base/7 font-semibold text-indigo-600">Events</h2>
			<p
				class="mt-2 text-4xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
			>
				Create gatherings that strengthen your community
			</p>
			<p class="mt-6 text-lg/8 text-gray-700">
				Belcoda handles the logistics—signups, reminders, check-ins, timezone math—so you can focus
				on the people you’re organizing with. Whether it’s five volunteers or five hundred
				attendees, events stay smooth, personal, and connected to the rest of your work.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				<FeatureItem title="Event pages that feel inviting" icon="layout-dashboard">
					Every event gets a clean, mobile-ready public page with the essentials upfront: what’s
					happening, where, when, and how to join. Add rich descriptions, feature images, clear
					location or meeting links, and capacity details that update in real time. One-click “Add
					to Calendar” works everywhere and timezones are handled for you.
				</FeatureItem>
				<FeatureItem title="WhatsApp built in" icon="message-circle-more">
					Some communities live in their inbox. Others live on WhatsApp. Generate QR codes for
					signup or check-in, capture consent automatically, and share context-rich WhatsApp links
					anywhere. Belcoda keeps profiles updated whether people engage via web, QR, or chat.
				</FeatureItem>
				<FeatureItem title="Automated but human" icon="bot-message-square">
					Send confirmations and reminders that help people show up. Smart reminders follow event
					timezones, cancellations notify everyone once, and every message respects contact
					preferences—including “do not contact.” Choose preferred languages and channels per event.
				</FeatureItem>
				<FeatureItem title="Attendance that fuels strategy" icon="users-round">
					Follow signups as they happen, switch between simple and detailed attendee views, and
					update post-event attendance to enrich each person’s engagement history. Exports are
					flexible and spreadsheet-ready, while print mode and mobile tools make on-site
					coordination easy.
				</FeatureItem>
				<FeatureItem title="Connected to your database" icon="database">
					Every signup updates your CRM intelligently: no duplicates, no overwriting, and full
					activity history across confirmations, reminders, and attendance. Communication
					preferences flow naturally from how people engage—email, WhatsApp, or both.
				</FeatureItem>
				<FeatureItem title="A simple lifecycle" icon="workflow">
					Work in draft until things are ready, publish with one click, and archive completed events
					to keep your workspace tidy without losing data. Clear status labels and filters help you
					stay organized even when you’re running dozens of events at once.
				</FeatureItem>
			</dl>
		</div>
	</div>
</div>

<!-- WhatsApp & Messaging -->
<div class="bg-white pb-24 sm:pb-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
			<div class="lg:pr-12">
				<h2 class="text-base/7 font-semibold text-indigo-600">WhatsApp built in</h2>
				<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
					Meet people where they already organize
				</p>
				<p class="mt-6 text-lg/8 text-gray-600">
					QR code signup opens WhatsApp with event details pre-filled, capturing consent as people
					communicate. A separate QR code handles check-in—no clipboards, no manual tallying. Share
					links anywhere and keep context intact so every conversation starts informed.
				</p>
				<ul class="mt-8 space-y-4 text-base/7 text-gray-700">
					<li class="flex gap-3">
						<span
							class="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600"
							>1</span
						>
						<span>Generate QR codes for flyers, meetings, or chats with a single click.</span>
					</li>
					<li class="flex gap-3">
						<span
							class="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600"
							>2</span
						>
						<span
							>Belcoda creates or updates profiles automatically, matching by email or phone.</span
						>
					</li>
					<li class="flex gap-3">
						<span
							class="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600"
							>3</span
						>
						<span
							>Contact preferences stay accurate so future outreach respects how people engage.</span
						>
					</li>
				</ul>
			</div>
			<div class="lg:pl-12">
				<h2 class="text-base/7 font-semibold text-indigo-600">Automated messages</h2>
				<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
					Timely, respectful communication
				</p>
				<p class="mt-6 text-lg/8 text-gray-600">
					Confirmations trigger instantly (if you want them) in each participant’s preferred
					language. Smart reminders go out at the right moment—24 hours before, three days before, a
					week before—based on the event’s timezone. Cancellations notify everyone once, cleanly,
					without duplicates.
				</p>
				<p class="mt-4 text-base/7 text-gray-700">
					Every message honors “do not contact” flags automatically, so your outreach stays
					compliant and trusted. Preferred channels follow the event’s configuration, whether email,
					WhatsApp, or both.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Attendance & Data -->
<div class="overflow-hidden bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center"
		>
			<div class="lg:pr-12">
				<h2 class="text-base/7 font-semibold text-indigo-600">Attendance that fuels strategy</h2>
				<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
					Live insight before, during, and after events
				</p>
				<p class="mt-6 text-lg/8 text-gray-700">
					Follow signups as they happen. Switch between simple and detailed attendee views. Update
					attendance after the event to enrich each person’s engagement history and keep teams
					aligned on who showed up.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					Exports are flexible and clean—choose the fields you want, including custom ones. Data is
					spreadsheet-ready with no cleanup required, and print mode plus mobile management keep
					on-site coordination easy.
				</p>
			</div>
			<div class="lg:pl-12">
				<h2 class="text-base/7 font-semibold text-indigo-600">
					Connected to your community database
				</h2>
				<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
					The CRM that understands your events
				</p>
				<p class="mt-6 text-lg/8 text-gray-700">
					Every signup updates your CRM intelligently—no duplicates, no overwriting. Existing data
					stays intact unless someone adds something new, and full activity history (signups,
					reminders, attendance) appears in each person’s timeline.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					Communication preferences flow naturally from how people engage, so you always know who
					prefers email versus WhatsApp. Privacy and consent are first-class with verified contact
					info and secure storage.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Lifecycle & Flexibility -->
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl lg:max-w-none">
			<div class="grid gap-16 lg:grid-cols-2">
				<div>
					<h2 class="text-base/7 font-semibold text-indigo-600">
						Built for organizers, not IT teams
					</h2>
					<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
						Customize every event without slowing down
					</p>
					<p class="mt-6 text-lg/8 text-gray-700">
						Custom fields capture exactly what each event needs—from dietary preferences and skill
						levels to accessibility requirements. Capacity controls keep headcounts precise,
						timezone options display or hide as needed, and preferred channels tailor communications
						per event.
					</p>
					<p class="mt-4 text-base/7 text-gray-600">
						Everything flexes to how your community actually operates, so configuration stays simple
						even while your needs evolve.
					</p>
				</div>
				<div>
					<h2 class="text-base/7 font-semibold text-indigo-600">
						Fast, reliable, and mobile-first
					</h2>
					<p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
						Real-time sync with trusted delivery
					</p>
					<p class="mt-6 text-lg/8 text-gray-700">
						Belcoda uses real-time sync so signups and changes appear instantly. Emails ride on a
						dependable infrastructure, and public pages plus admin tools work beautifully on phones—
						because that’s where most people are when they decide to attend.
					</p>
					<p class="mt-4 text-base/7 text-gray-600">
						Privacy and consent stay front and center with verified emails and numbers, clear
						contact preferences, and all data stored securely in your community database.
					</p>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-20 max-w-3xl text-center">
			<p class="text-2xl font-semibold tracking-tight text-gray-900">
				Simple to start. Powerful when you need it.
			</p>
			<p class="mt-4 text-lg/8 text-gray-700">
				Belcoda handles the logistics so you can focus on the people you’re organizing with. From
				draft to archive, every event stays connected to your broader organizing strategy.
			</p>
		</div>
	</div>
</div>

<CTA1 />
<Footer />
