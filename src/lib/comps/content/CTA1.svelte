<script lang="ts">
	const backgroundImage = '/background-auth.jpg';
	const bookACallUrl = 'https://cal.com/django-merope-8wwjmi/belcoda-information-call';
	import imageCTA from './assets/belocoda-features-organizing.png';
	import laptopMockup from './assets/mockup-browser.png';
</script>

<div
	class="relative isolate w-screen overflow-hidden bg-gray-900 bg-cover"
	style="background-image: url({backgroundImage})"
>
	<div class="px-6 pt-24 sm:pt-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl">
				Build your community with Belcoda.
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-blue-200">
				Create an organization and import your contacts in minutes.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-2">
				<a
					href="http://app.belcoda.com/signup"
					class="rounded-md bg-white/15 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>Get started now</a
				>
				<a
					href={bookACallUrl}
					target="_blank"
					class="rounded-lg px-4 py-2 text-sm/6 font-semibold text-gray-50 hover:bg-white/10 hover:text-white"
					>Schedule a demo call<span aria-hidden="true">→</span></a
				>
			</div>
		</div>
		<div class="relative overflow-hidden pt-16">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<img
					width="2432"
					height="1442"
					src={laptopMockup}
					alt="App screenshot"
					class="mb-[-40%] rounded-xl"
				/>
			</div>
		</div>
	</div>
	<!-- <svg
		viewBox="0 0 1024 1024"
		aria-hidden="true"
		class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
	>
		<circle
			r="512"
			cx="512"
			cy="512"
			fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
			fill-opacity="0.7"
		/>
		<defs>
			<radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
				<stop stop-color="#60A5FA" />
				<stop offset="1" stop-color="#3B82F6" />
			</radialGradient>
		</defs>
	</svg> -->
</div>
