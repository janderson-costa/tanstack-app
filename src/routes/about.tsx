import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
	staticData: { title: 'About', description: 'Sobre esta aplicação' },
	component: RouteComponent,
})

export function RouteComponent() {
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">About</h1>
		</div>
	);
}
