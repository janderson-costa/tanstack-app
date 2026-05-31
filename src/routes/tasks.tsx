import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks")({
	staticData: { title: 'Tasks', description: 'Gerenciar tarefas' },
	component: RouteComponent,
});

export function RouteComponent() {
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">Tasks</h1>
		</div>
	);
}
