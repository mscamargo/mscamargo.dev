// TODO: replace with a content collection
export const posts = Array.from({ length: 3 }, () => ({
	title: 'Draft Two',
	description: 'Placeholder post — replace this content with your own.',
	date: 'Sep 4, 2026',
	readTime: '1 min read',
	tags: ['draft'],
	href: '/articles',
}));

export const tags = [...new Set(posts.flatMap((p) => p.tags))];
