interface TopBarProps {
	title: string;
}

export function TopBar({ title }: TopBarProps) {
	return (
		<header className="h-12 flex items-center px-6 border-b border-gray-200 bg-white">
			<span className="text-sm text-gray-500">Start App</span>
			<span className="mx-2 text-gray-300">/</span>
			<span className="text-sm font-medium text-gray-900">{title}</span>
		</header>
	);
}
