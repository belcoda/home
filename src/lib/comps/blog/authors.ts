const authors = [
	{
		name: 'Django Merope',
		avatar:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		title: 'Project lead'
	},
	{
		name: 'Dr. Fabuloso the Fabulous',
		avatar:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		title: 'Senior developer'
	}
] as const satisfies Author[];

export type Author = {
	name: string;
	avatar: string;
	title: string;
};

export default authors;
