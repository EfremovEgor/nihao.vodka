import { useState } from "react";
interface Props {
	link: string;
	defaultImage: string;
	hoverImage: string;
	text: string;
	className?: string;
}
const HoverableStore = ({
	defaultImage,
	hoverImage,
	link,
	text,
	className,
}: Props) => {
	const [hovered, setHovered] = useState(false);
	return (
		<a
			className="w-full flex flex-col items-center justify-center"
			href={link}
			target="_blank"
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => setHovered(false)}
		>
			<img
				className={className}
				src={hovered ? hoverImage : defaultImage}
			/>
			<p className="text-base lg:text-2xl mt-2 font-extralight text-center whitespace-pre">
				{text}
			</p>
		</a>
	);
};

export default HoverableStore;
