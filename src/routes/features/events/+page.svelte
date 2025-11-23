<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import Badge from '$lib/comps/widgets/Badge.svelte';
	import FeatureItem from '$lib/comps/content/FeatureItem.svelte';
	import CTA1 from '$lib/comps/content/CTA1.svelte';
	import heroImage from '$lib/comps/content/assets/belocoda-features-organizing.png';
	import imageAsmaa from '$lib/assets/avatars/asmaa.jpg';
	import ScreenMobileOneImage from '$lib/comps/content/assets/phone-event-share.webp';
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
						Bring your community together.
					</p>
					<p class="mt-6 text-lg/8 text-gray-300">
						Less admin and more connection – all seamlessly connected to your community database.
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
				Belcoda handles the logistics—signups, reminders, check-ins—so you can focus on the people
				you’re organizing with.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				<FeatureItem title="Event pages that feel inviting" icon="layout-dashboard">
					Every event gets a clean, mobile-ready public page with the essentials upfront: what’s
					happening, where, when, and how to join.
				</FeatureItem>
				<FeatureItem title="WhatsApp built in" icon="message-circle-more">
					Generate QR codes for signup or check-in, capture consent automatically, and share
					context-rich WhatsApp links anywhere.
				</FeatureItem>
				<FeatureItem title="Automated but human" icon="bot-message-square">
					Automatic confirmations and reminders notifications to make sure that people show up.
				</FeatureItem>
				<FeatureItem title="Attendance that fuels strategy" icon="users-round">
					Follow signups as they happen, and keep track of who showed up and who didn't for your
					future organizing.
				</FeatureItem>
				<FeatureItem title="Connected to your database" icon="database">
					Every signup updates your CRM intelligently: no duplicates, no overwriting, and full
					activity history across confirmations, reminders, and attendance.
				</FeatureItem>
				<FeatureItem title="A simple lifecycle" icon="workflow">
					Work in draft until things are ready, publish with one click, and archive completed events
					to keep your workspace tidy without losing data.
				</FeatureItem>
			</dl>
		</div>
	</div>
</div>

<!-- WhatsApp built in section-->
<div class="overflow-hidden bg-white pt-12 pb-24 sm:pb-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:ml-auto lg:pt-4 lg:pl-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base/7 font-semibold text-indigo-600">WhatsApp built in</h2>
					<p
						class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
					>
						Meet people where they already organize
					</p>
					<p class="mt-6 text-lg/8 text-gray-600">
						QR code signup opens WhatsApp with event details pre-filled, capturing consent as people
						communicate. A separate QR code handles check-in—no clipboards, no manual tallying.
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
									><path fill="currentColor" d="M1 1h10v10H1zm2 2v6h6V3z" /><path
										fill="currentColor"
										fill-rule="evenodd"
										d="M5 5h2v2H5z"
									/><path fill="currentColor" d="M13 1h10v10H13zm2 2v6h6V3z" /><path
										fill="currentColor"
										fill-rule="evenodd"
										d="M17 5h2v2h-2z"
									/><path fill="currentColor" d="M1 13h10v10H1zm2 2v6h6v-6z" /><path
										fill="currentColor"
										fill-rule="evenodd"
										d="M5 17h2v2H5z"
									/><path
										fill="currentColor"
										d="M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2zm0 2v2h-2v-2z"
									/></svg
								>

								QR code signup:
							</dt>
							<dd class="inline">
								Generate QR codes for flyers, meetings, or chats with a single click.
							</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20px"
									height="20px"
									class="absolute top-1 left-1 size-5 text-indigo-600"
									viewBox="0 0 48 48"
									><path
										fill="currentColor"
										fill-rule="evenodd"
										d="M21.493 20.43c1.362-4.994 2.731-10.015 3.848-15.077c.244-1.106-.021-2.46-1.315-2.941q-.333-.125-.761-.24c-.428-.116-.545-.133-.78-.173c-1.36-.23-2.266.81-2.608 1.89c-1.57 4.961-2.9 10.014-4.222 15.04l-.02.073q.11-.003.219-.002c2.143 0 4.03.529 5.639 1.43M27 28a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H29a2 2 0 0 1-2-2m5 6a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4zm3 8a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4zM15.854 21.5c-6.044 0-10.64 4.527-12.119 10.068c-.885 3.32-1.764 7.237-2.096 10.722c-.223 2.343 1.512 4.274 3.736 4.534c1.042.122 2.348.259 3.809.377c-1.705-3.667-1.818-7.556-1.602-9.377a1.5 1.5 0 0 1 2.979.352c-.204 1.726-.004 5.909 2.164 9.249c1.07.047 2.172.075 3.275.075c1.1 0 2.254-.028 3.412-.075c-1.139-1.627-1.822-3.393-2.234-4.905a20 20 0 0 1-.592-3.16a17 17 0 0 1-.084-1.243l-.002-.08V38a1.501 1.501 0 0 1 3-.002v.052l.008.202c.009.182.026.454.062.795c.072.684.216 1.633.502 2.683c.513 1.882 1.447 3.959 3.116 5.486c.848-.058 1.668-.12 2.437-.185c3.54-.292 4.951-4.549 2.481-6.973L27 38.973a5.5 5.5 0 0 1-1.647-4.051l.057-2.57c.121-5.481-3.587-10.852-9.556-10.852"
										clip-rule="evenodd"
									/></svg
								>

								Clean data:
							</dt>
							<dd class="inline">
								Belcoda creates or updates profiles automatically, matching by email or phone.
							</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="absolute top-1 left-1 size-5 text-indigo-600"
									width="20px"
									height="20px"
									viewBox="0 0 24 24"
									><g fill="none"
										><path
											d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										/><path
											fill="currentColor"
											d="M7 3v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1a2 2 0 0 1 2 2v11a6 6 0 0 1-6 6H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm5 11H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-4H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-1-8a1 1 0 0 1 .117 1.993L14 4h-4a1 1 0 0 1-.117-1.993L10 2z"
										/></g
									></svg
								>

								Attendance management:
							</dt>
							<dd class="inline">
								Display check-in QR codes at the event to let attendees mark themselves present.
							</dd>
						</div>
					</dl>
				</div>
				<p class="mt-6 text-lg/8 text-gray-600">
					Share links anywhere and keep context intact so every conversation starts informed.
				</p>
			</div>

			<div class="flex items-start justify-end lg:order-first">
				<img src={ScreenMobileOneImage} alt="Product screenshot" class="mx-auto w-96 lg:w-xs" />
			</div>
		</div>
	</div>
</div>

<CTA1 />
<Footer />
