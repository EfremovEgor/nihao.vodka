import { useRef, useState } from "react";
// import { Icon } from "@iconify/react";

const PromoVideo = () => {
	const [playing, setPlaying] = useState(true);
	const [playedBefore, setPlayedBefore] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null!);
	const handleVideoPause = () => {
		videoRef.current.play();
	};
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
			{/* <button
				className="hidden lg:block absolute top-1/2 left-1/2 -translate-1/2 text-red"
				onClick={(e) => {
					e.stopPropagation();
					toggleVideoPlayback;
				}}
			>
				{playing ? (
					<Icon className="size-16" icon="solar:pause-bold" />
				) : (
					<Icon className="size-16" icon="solar:play-bold" />
				)}
			</button> */}
			<video
				onPause={handleVideoPause}
				// onPlay={() => setPlaying(true)}
				className={`w-full  object-cover ${!playedBefore ? "hidden" : "lg:block"} pointer-events-none`}
				ref={videoRef}
				muted
				playsInline
				loop
				autoPlay
				typeof="video/mp4"
				src="/videos/promo.mp4"
			></video>
		</div>
	);
};

export default PromoVideo;
