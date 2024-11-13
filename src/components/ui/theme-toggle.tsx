import { Button } from "./button";
import Image from "next/image";
import ThemeToggleIcon from "@/assets/theme-toggle.svg";

const ThemeToggle: React.FC = () => {
	return (
		<Button className="bg-primary-100 text-primary-500 shadow hover:bg-primary-800 h-9 px-4 py-2 rounded-md">
			<Image
				src={ThemeToggleIcon}
				alt="Dark mode toggle icon"
				className="w-full bg-primary-100"
				width={24}
				height={24}
			></Image>
		</Button>
	);
};

export default ThemeToggle;
