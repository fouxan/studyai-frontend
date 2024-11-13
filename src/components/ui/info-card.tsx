import React from "react";

// Import an icon for the arrow
import { ArrowRightIcon } from "lucide-react";
// Define the props interface
interface InfoCardProps {
	header: string;
	content: string;
	href?: string; // href is optional
}

// Define the component
const InfoCard: React.FC<InfoCardProps> = React.memo(
	({ header, content, href }) => {
		return (
			<div className="p-6 border-primary-900 rounded-lg shadow-sm bg-primary-500 text-font-950">
				<div className="flex items-center justify-between">
					<h3 className="text-2xl font-medium">{header}</h3>
					{href && (
						<a href={href} className="ml-2 text-font-950 hover:text-font-700">
							<ArrowRightIcon className="h-5 w-5" />
						</a>
					)}
				</div>
				<p className="mt-2">{content}</p>
			</div>
		);
	}
);

InfoCard.displayName = "InfoCard";

export default InfoCard;
