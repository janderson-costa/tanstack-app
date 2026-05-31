import { Link } from "@tanstack/react-router";

const links = [
	{ to: "/" as const, label: "Home", exact: true },
	{ to: "/about" as const, label: "About", exact: false },
	{ to: "/tasks" as const, label: "Tasks", exact: false },
];

export function NavLinks() {
	return (
		<nav className="flex-1 p-3">
			<ul className="space-y-1">
				{links.map((link) => (
					<li key={link.to}>
						<Link
							to={link.to}
							activeOptions={{ exact: link.exact }}
							className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
							activeProps={{
								className:
									"block px-3 py-2 rounded-md text-sm bg-gray-100 font-medium text-gray-900",
							}}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
