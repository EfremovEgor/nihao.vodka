import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

const PromoVideo = () => {
	const [playing, setPlaying] = useState(false);
	const [playedBefore, setPlayedBefore] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null!);
	const toggleVideoPlayback = () => {
		if (playing) videoRef.current.pause();
		else videoRef.current.play();
		videoRef.current.volume = 1;
		setPlaying(!playing);
		setPlayedBefore(true);
	};

	return (
		<div
			onClick={toggleVideoPlayback}
			className="relative w-full h-fit cursor-pointer"
		>
			{!playedBefore && (
				<img
					src="/images/video_placeholder.png"
					className={`w-full object-cover h-dvh ${playing && "hidden"}`}
				/>
			)}
			<button
				className="hidden lg:block absolute top-1/2 left-1/2 -translate-1/2 text-white"
				onClick={toggleVideoPlayback}
			>
				{playing ? (
					<Icon className="size-16" icon="solar:pause-bold" />
				) : (
					<Icon className="size-16" icon="solar:play-bold" />
				)}
			</button>
			<video
				onPause={() => setPlaying(false)}
				onPlay={() => setPlaying(true)}
				className={`w-full h-dvh object-cover ${!playedBefore ? "hidden" : "lg:block"} `}
				ref={videoRef}
				controls
				src="/videos/promo.mp4"
			></video>
		</div>
	);
};

export default PromoVideo;
