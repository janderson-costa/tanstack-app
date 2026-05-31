import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
	useMatches,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { PageHeader } from "../components/layout/PageHeader";
import { TopBar } from "../components/layout/TopBar";
import { Navigation } from "../components/navigation/Navigation";
import appCss from "../static/styles/styles.css?url";

declare module "@tanstack/react-router" {
	interface StaticDataRouteOption {
		title?: string;
		description?: string;
	}
}

function AppLayout() {
	const matches = useMatches();
	const activeMatch = [...matches]
		.reverse()
		.find((m) => (m.staticData as { title?: string })?.title);
	const title = (activeMatch?.staticData as { title?: string })?.title ?? "TanStack App";
	const description = (activeMatch?.staticData as { description?: string })?.description ?? "";

	return (
		<div className="flex h-screen bg-gray-50">
			<Navigation />
			<main className="flex-1 flex flex-col overflow-hidden">
				<TopBar title={title} />
				<PageHeader title={title} description={description} />
				<div className="flex-1 overflow-y-auto">
					<Outlet />
				</div>
			</main>
		</div>
	);
}

export const Route = createRootRoute({
	component: AppLayout,
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'TanStack App',
			},
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: 'bottom-right',
					}}
					plugins={[
						{
							name: 'Tanstack Router',
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	)
}
