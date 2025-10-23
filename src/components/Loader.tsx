import { useEffect, useState } from "react";

const Loader = ({
	duration = 1000,
	onHide = () => {},
	show = true,
	className = "",
}) => {
	const [visible, setVisible] = useState(show);

	useEffect(() => {
		setVisible(show);
	}, [show]);

	useEffect(() => {
		if (!show) return;

		const timer = setTimeout(() => {
			setVisible(false);
			onHide?.();
		}, duration);

		return () => clearTimeout(timer);
	}, [show, duration, onHide]);

	if (!visible && !show) {
		return null;
	}

	return (
		<div
			className={`
        bg-red 
        z-[1000] fixed top-0 left-0 
        flex items-center justify-center 
        h-full w-full 
        transition-all duration-300 ease-in-out
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        ${className}
        `}
			aria-label="Loading"
			role="status"
		>
			<div className="relative">
				<img
					src="/images/loader.png"
					alt="Loading..."
					className="animate-pulse"
				/>
			</div>
		</div>
	);
};

export default Loader;
