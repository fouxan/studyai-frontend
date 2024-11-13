// components/Header.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image";
// import Logo from "@/assets/logo.svg";
import * as NavigationMenu from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/ui/theme-toggle";

const Header: React.FC = ({ isNotHomePage = false }) => {
	return (
		<header className="text-primary-900 bg-primary-500 py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				{/* Logo on the extreme left */}
				<div className="items-center text-4xl">
					<Link href="#">
						{/* <Image
							src={Logo}
							alt="Mindly Logo"
							className="w-full h-full" // Adjust the size of the logo
						/> */}
						Mind.ly
					</Link>
				</div>

				{/* Navigation links in the middle */}
				<nav className="flex space-x-4 text-font-950">
					<NavigationMenu.NavigationMenu className="gap-2">
						<NavigationMenu.NavigationMenuList className="flex space-x-4">
							<NavigationMenu.NavigationMenuItem>
								<NavigationMenu.NavigationMenuLink href="#">
									Models
								</NavigationMenu.NavigationMenuLink>
							</NavigationMenu.NavigationMenuItem>
							<NavigationMenu.NavigationMenuItem>
								<NavigationMenu.NavigationMenuLink href="#">
									Library
								</NavigationMenu.NavigationMenuLink>
							</NavigationMenu.NavigationMenuItem>
							<NavigationMenu.NavigationMenuItem>
								<NavigationMenu.NavigationMenuLink href="#">
									Courses
								</NavigationMenu.NavigationMenuLink>
							</NavigationMenu.NavigationMenuItem>
						</NavigationMenu.NavigationMenuList>
					</NavigationMenu.NavigationMenu>
				</nav>

				{/* Links on the extreme right */}
				<div className="flex items-center space-x-4">
					<Link href="/auth/login">Login</Link>
					<Link href="/auth/register?membership='free-trial'">Free Trial</Link>
					{isNotHomePage && <ThemeToggle />}
				</div>
			</div>
		</header>
	);
};

export default Header;
