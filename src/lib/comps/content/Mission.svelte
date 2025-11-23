<script lang="ts">
	import ManSingingImg from './assets/man-singing.jpg';
	import OneWorldImg from './assets/one-world.jpg';
	import WalkSignImg from './assets/walk-sign.jpg';
	import WomanMegaphoneImg from './assets/woman-megaphone.jpg';
</script>

<div class="overflow-hidden bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
		<div class="max-w-4xl">
			<div>
				<span
					class="rounded-full bg-blue-300/5 px-3 py-1 text-sm/6 font-semibold text-blue-600/80 ring-1 ring-blue-600/10 ring-inset"
					>Why Belcoda?</span
				>
			</div>
			<h1 class="mt-4 text-4xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl">
				For organizers with a plan to win.
			</h1>
			<p class="mt-6 text-xl/8 text-balance text-gray-700">
				Modern campaigns win by building and mobilizing large, decentralized communities. Not
				through top-down command and control.
			</p>
		</div>
		<section class="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
			<div class="lg:pr-8">
				<h2 class="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
					An opinionated toolkit
				</h2>
				<p class="mt-6 text-base/7 text-gray-600">
					Belcoda is built to support and grow <em>directed networks</em> — distributed organizing campaigns
					which are large, connected, active and aligned.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					We provide the tools to grow your community, drive people towards deeper and more
					meaningful modes of engagement, build cross-network links, while keeping everyone aligned
					on your campaign’s objectives and strategy.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					Belcoda might <em>not</em> be for you if you need top-down control prefer keeping things slow
					and steady.
				</p>
			</div>
			<div class="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
				<div
					class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8"
				>
					<div
						class="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10"
					>
						<img src={ManSingingImg} alt="" class="block size-full object-cover" />
					</div>
					<div
						class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40"
					>
						<img src={OneWorldImg} alt="" class="block size-full object-cover" />
					</div>
					<div
						class="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10"
					>
						<img src={WalkSignImg} alt="" class="block size-full object-cover" />
					</div>
					<div
						class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40"
					>
						<img src={WomanMegaphoneImg} alt="" class="block size-full object-cover" />
					</div>
				</div>
			</div>
			<div class="max-lg:mt-16 lg:col-span-1">
				<h2 class="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
					Built around WhatsApp
				</h2>
				<p class="mt-6 text-base/7 text-gray-600">
					With billions of users and unparalleled engagement, we believe WhatsApp may well be the
					most powerful organizing tool of all time. That’s why Belcoda was built around WhatsApp.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					We have integrated WhatsApp into every part of Belcoda, from community management to event
					registration to action campaigns.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					You can create interactive action threads, send individual messages, and even allow people
					to sign up to events via WhatsApp and WhatsApp QR codes.
				</p>
				<p class="mt-4 text-base/7 text-gray-600">
					We're adding new WhatsApp features all the time.
				</p>
			</div>
		</section>
	</div>
</div>
