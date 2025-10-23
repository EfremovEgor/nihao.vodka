import { useEffect, useRef, useState } from "react";
import Button from "./common/Button";
import VolumeSVG from "./svg/VolumeSVG";
import StrengthSVG from "./svg/StrengthSVG";
import { items } from "@/lib/items";
import GlassSVG from "./svg/GlassSVG";
import { useData } from "@/hooks/useDataContext";

const Catalog = () => {
	const { showContactUsForm } = useData();

	const [currentItem, setCurrentItem] =
		useState<keyof typeof items>("classic");
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [currentTranslate, setCurrentTranslate] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);

	const itemOrder: (keyof typeof items)[] = [
		"classic",
		"ganbei",
		"tangerine",
		"hao_chi",
		"lotos",
	];
	const currentIndex = itemOrder.indexOf(currentItem);

	const nextItem = () => {
		const nextIndex = (currentIndex + 1) % itemOrder.length;
		setCurrentItem(itemOrder[nextIndex]);
	};

	const prevItem = () => {
		const prevIndex =
			(currentIndex - 1 + itemOrder.length) % itemOrder.length;
		setCurrentItem(itemOrder[prevIndex]);
	};

	const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
		setIsDragging(true);
		const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
		setStartX(clientX - currentTranslate);
	};

	const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
		if (!isDragging) return;

		e.preventDefault();
		const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
		const translateX = clientX - startX;
		setCurrentTranslate(translateX);
	};

	const handleTouchEnd = () => {
		if (!isDragging) return;

		setIsDragging(false);

		const swipeThreshold = 70;

		if (currentTranslate < -swipeThreshold) {
			nextItem();
		} else if (currentTranslate > swipeThreshold) {
			prevItem();
		}

		setCurrentTranslate(0);
	};

	const handleMouseDown = (e: React.MouseEvent) => handleTouchStart(e);
	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return;
		handleTouchMove(e);
	};
	const handleMouseUp = () => handleTouchEnd();
	const handleMouseLeave = () => {
		if (isDragging) handleTouchEnd();
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				prevItem();
			} else if (e.key === "ArrowRight") {
				nextItem();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [currentIndex]);

	return (
		<div
			id="catalog"
			className="diamond-gradient-red transition-all bg-black grid grid-cols-1 relative overflow-hidden"
			style={items[currentItem].theme}
		>
			<div className="mx-auto px-5 xl:max-w-[1200px] ">
				<div className="hidden lg:block absolute top-1/4 left-4 transform -translate-y-1/2 z-10">
					<button
						onClick={prevItem}
						className="cursor-pointer bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
						aria-label="Предыдущий продукт"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
				</div>

				<div className="hidden lg:block absolute top-1/4 right-4 transform -translate-y-1/2 z-10">
					<button
						onClick={nextItem}
						className="cursor-pointer bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
						aria-label="Следующий продукт"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>

				<div
					ref={sliderRef}
					className="min-h-dvh w-full grid grid-cols-2 select-none"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseLeave}
					style={{
						transform: `translateX(${currentTranslate}px)`,
						transition: isDragging ? "none" : "transform 0.3s ease",
						cursor: isDragging ? "grabbing" : "grab",
					}}
				>
					<div className="text-white">
						<div className="text-4xl lg:text-7xl uppercas mt-[200px]">
							<h1 className="text-[var(--current-color)] transition-colors">
								NIHAO
							</h1>
							<h1 className="uppercase">
								{items[currentItem].name}
							</h1>
						</div>
						<p className="font-extralight text-base lg:text-xl mt-4 ">
							{items[currentItem].description}
						</p>
						<div className="mt-8 flex flex-col lg:flex-row gap-8">
							<div className="w-fit">
								<VolumeSVG className="h-10 lg:h-14 fill-[var(--current-color)] mx-auto" />
								<p className="font-extralight text-sm lg:text-xl uppercase mt-2">
									Объем {items[currentItem].volume}
								</p>
							</div>
							<div className="w-fit">
								<StrengthSVG
									className="h-10 lg:h-14 fill-[var(--current-color)] mx-auto"
									percentColor={
										items[currentItem].darkText
											? "var(--black)"
											: "var(--white)"
									}
								/>
								<p className="font-extralight text-base lg:text-xl uppercase mt-2">
									Крепость {items[currentItem].strength}%
								</p>
							</div>
						</div>
						<Button
							className={`bg-[var(--current-color)] ${
								items[currentItem].darkText
									? "text-black"
									: "text-white"
							} mt-8`}
							onClick={showContactUsForm}
							variant={"mainButton"}
						>
							СВЯЗАТЬСЯ
						</Button>
					</div>
					<div className="flex justify-center items-center">
						<img
							src={items[currentItem].image}
							className="z-[2] w-[100px] xl:w-auto"
							draggable="false"
							alt={items[currentItem].name}
						/>
					</div>
				</div>
				<div className="transform flex space-x-3 z-10 items-center justify-center my-16 lg:my-0">
					{itemOrder.map((item) => (
						<button
							key={item}
							onClick={() => setCurrentItem(item)}
							className={`cursor-pointer w-3 h-3 rounded-full transition-all ${
								currentItem === item
									? "bg-[var(--current-color)] scale-125"
									: "bg-white/50 hover:bg-white/70"
							}`}
							aria-label={`Перейти к ${items[item].name}`}
						/>
					))}
				</div>
				<div
					id="coctails"
					className="min-h-dvh w-full text-white flex flex-col items-center justify-center"
				>
					<div className="flex flex-col lg:flex-row justify-center items-center w-full gap-16">
						<div className="bg-[var(--current-color)] p-4 w-[300px] lg:w-[360px] ">
							<img
								src={items[currentItem].coctail.image}
								alt=""
							/>
							<div
								className={`${
									items[currentItem].darkText
										? "text-black"
										: "text-white"
								}`}
							>
								<h2 className="text-3xl text-right uppercase">
									{items[currentItem].coctail.name}
								</h2>

								<p className="text-xl font-bold text-right mt-2">
									{items[currentItem].coctail.slogan}
								</p>
								<p className="font-extralight text-right text-base/3 line">
									{items[currentItem].coctail.description}
								</p>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<h2 className="text-3xl lg:text-4xl align-top justify-self-start uppercase">
								Попробуйте напиток в коктейле
							</h2>
							<div className="mt-8">
								<div>
									<h3 className="text-xl font-bold">
										Ингредиенты:
									</h3>
									<ul className="mt-2">
										{items[
											currentItem
										].coctail.ingredients.map((i) => (
											<li className="flex flex-row gap-2 text-xl font-extralight items-center">
												<div className="h-5 w-5">
													<GlassSVG className="h-5 w-5" />
												</div>
												<p>{i}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="mt-8">
								<h3 className="text-xl font-bold">
									Технология приготовления:
								</h3>
								<ul className="mt-2">
									{items[currentItem].coctail.how_to_make.map(
										(i) => (
											<li className="flex flex-row gap-2 text-xl font-extralight items-center">
												<div className="h-5 w-5">
													<GlassSVG className="h-5 w-5" />
												</div>
												<p>{i}</p>
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
