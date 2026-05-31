import { NavFooter } from "./NavFooter";
import { NavLinks } from "./NavLinks";
import { NavLogo } from "./NavLogo";

export function Navigation() {
	return (
		<aside className="w-60 flex flex-col border-r border-gray-200 bg-white">
			<NavLogo />
			<NavLinks />
			<NavFooter />
		</aside>
	);
}
