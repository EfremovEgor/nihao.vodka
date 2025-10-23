import React from "react";
export interface Props {
	children?: React.ReactNode;
	title: string;
	image: string;
	className?: string;
}
const BrandItem = ({ image, title, children, className }: Props) => {
	return (
		<div className="flex flex-row gap-2 lg:gap-4 items-center w-full">
			<img className={className} src={image} />
			<div className="flex flex-col justify-center">
				<h2 className="text-white text-xl lg:text-3xl font-semibold whitespace-pre">
					{title}
				</h2>
				{children}
			</div>
		</div>
	);
};

export default BrandItem;
