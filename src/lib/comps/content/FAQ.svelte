<script lang="ts">
	const faqs = $state([
		{
			title: `What are contacts and teams?`,
			answer: `A contact is the record of a person in your organization. Every contact has a name, and other information like email address, phone number, address, and more. Teams are groups of contacts, which can be created and organized any way you want.`,
			open: true
		},
		{
			title: `What is the difference between a user and an admin?`,
			answer: `A user is anyone who can sign into your Belcoda organization. By default, users only have permissions to access and modify contacts, teams, and other information which is assigned to them. Admins are users who have admin permissions, which means they can access and modify everything in the organization.`,
			open: false
		},
		{
			title: `Can I change plans later?`,
			answer: `Yes. You can apply for Supported tier access at any time through the Belcoda Foundation. Partnership tier is available by contacting us.`,
			open: false
		},
		{
			title: `Can I create multiple Belcoda organizations?`,
			answer: `Yes! And you can be logged into multiple organizations at once, and switch between them, too. If you want to set up a network of multiple organizations, get in touch to talk about our Partnership tier.`,
			open: false
		},
		{
			title: `Do you own the data I put into Belcoda?`,
			answer: `No. You keep ownership of all data you put into Belcoda. We only use it to provide you with our services. In GDPR terms, we are a Data Processor on your behalf, you always remain the Data Controller. For more information, check out our Privacy Policy and Security Center.`,
			open: false
		},
		{
			title: `Can I export my data any time?`,
			answer: `Yes, you can export all your data to CSV format at any time.`,
			open: false
		}
	]);
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>
</svelte:head>
<div class="bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
				Frequently asked questions
			</h2>
			<dl class="mt-16 divide-y divide-gray-900/10">
				{#each faqs as faq}
					<div class="py-6 first:pt-0 last:pb-0">
						<dt>
							<button
								type="button"
								onclick={() => (faq.open = !faq.open)}
								class="flex w-full items-start justify-between text-left text-gray-900"
							>
								<span class="text-base/7 font-semibold">{faq.title}</span>
								<span class="ml-6 flex h-7 items-center">
									{#if !faq.open}
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											data-slot="icon"
											aria-hidden="true"
											class="size-6 in-aria-expanded:hidden"
										>
											<path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{:else}
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											data-slot="icon"
											aria-hidden="true"
											class="size-6 not-in-aria-expanded:hidden"
										>
											<path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{/if}
								</span>
							</button>
						</dt>
						{#if faq.open}
							<el-disclosure id="faq-0" class="contents">
								<dd class="mt-2 pr-12">
									<p class="text-base/7 text-gray-600">{faq.answer}</p>
								</dd>
							</el-disclosure>
						{/if}
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
