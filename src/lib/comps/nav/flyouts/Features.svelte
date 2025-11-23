<script lang="ts">
	import { type Snippet } from 'svelte';
	let { children, open = $bindable(false) }: { children: Snippet; open: boolean } = $props();
	import * as Popover from '$lib/comps/ui/popover/index.js';
	import UsersIcon from '@lucide/svelte/icons/users';
	import CalendarDaysIcon from '@lucide/svelte/icons/calendar-days';
	import MessageCircleIcon from '@lucide/svelte/icons/message-circle';
	const youtubeLink = 'https://www.youtube.com/watch?v=PIe6kR3CL6c';
	const bookACallUrl = 'https://cal.com/django-merope-8wwjmi/belcoda-information-call';
</script>

<Popover.Root bind:open>
	<Popover.Trigger
		class="inline-flex items-center gap-x-1 rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white"
	>
		{@render children()}
		<svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5">
			<path
				d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
				clip-rule="evenodd"
				fill-rule="evenodd"
			/>
		</svg>
	</Popover.Trigger>

	<Popover.Content
		class="w-screen max-w-max overflow-visible rounded-3xl bg-white p-0 text-sm/6 shadow-lg transition transition-discrete outline-none [--anchor-gap:--spacing(5)] backdrop:bg-transparent open:flex data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
	>
		<div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl">
			<div class="p-4">
				<div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
					<div
						class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
					>
						<UsersIcon class="size-6 text-gray-600 group-hover:text-indigo-600" />
					</div>
					<div>
						<a href="/features/organizing" class="font-semibold text-gray-900">
							Organizing
							<span class="absolute inset-0"></span>
						</a>
						<p class="mt-1 text-gray-600">Grow your community of people and groups</p>
					</div>
				</div>
				<div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
					<div
						class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
					>
						<MessageCircleIcon class="size-6 text-gray-600 group-hover:text-indigo-600" />
					</div>
					<div>
						<a href="/features/communications" class="font-semibold text-gray-900">
							Communications
							<span class="absolute inset-0"></span>
						</a>
						<p class="mt-1 text-gray-600">Reach people where they are at</p>
					</div>
				</div>
				<div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
					<div
						class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
					>
						<CalendarDaysIcon class="size-6 text-gray-600 group-hover:text-indigo-600" />
					</div>
					<div>
						<a href="/features/events" class="font-semibold text-gray-900">
							Events
							<span class="absolute inset-0"></span>
						</a>
						<p class="mt-1 text-gray-600">Everything you need for effortless events</p>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
				<a
					href={youtubeLink}
					target="_blank"
					class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
				>
					<svg
						viewBox="0 0 20 20"
						fill="currentColor"
						data-slot="icon"
						aria-hidden="true"
						class="size-5 flex-none text-gray-400"
					>
						<path
							d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
							clip-rule="evenodd"
							fill-rule="evenodd"
						/>
					</svg>
					3 minute intro
				</a>
				<a
					href={bookACallUrl}
					target="_blank"
					class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
				>
					<svg
						viewBox="0 0 20 20"
						fill="currentColor"
						data-slot="icon"
						aria-hidden="true"
						class="size-5 flex-none text-gray-400"
					>
						<path
							d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
							clip-rule="evenodd"
							fill-rule="evenodd"
						/>
					</svg>
					Schedule a call
				</a>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
