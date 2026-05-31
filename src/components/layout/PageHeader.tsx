interface PageHeaderProps {
	title: string;
	description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
	return (
		<div className="px-8 py-5 border-b border-gray-200 bg-white">
			<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
			{description && (
				<p className="mt-1 text-sm text-gray-500">{description}</p>
			)}
		</div>
	);
}
