import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
	staticData: { title: 'Home', description: 'Página inicial da aplicação' },
	component: RouteComponent,
})

export function RouteComponent() {
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">Home</h1>
		</div>
	);
}
