import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

const PromoVideo = () => {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null!);
	const toggleVideoPlayback = () => {
		if (playing) videoRef.current.pause();
		else videoRef.current.play();
		videoRef.current.volume = 1;
		setPlaying(!playing);
	};

	return (
		<div
			onClick={toggleVideoPlayback}
			className="relative w-full h-fit cursor-pointer"
		>
			<button className="absolute top-1/2 left-1/2 -translate-1/2 text-white">
				{playing ? (
					<Icon className="size-16" icon="solar:pause-bold" />
				) : (
					<Icon className="size-16" icon="solar:play-bold" />
				)}
			</button>

			<video
				className={`w-full h-auto `}
				ref={videoRef}
				src="/videos/promo.mp4"
			></video>
		</div>
	);
};

export default PromoVideo;
