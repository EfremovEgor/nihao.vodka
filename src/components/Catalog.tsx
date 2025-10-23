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
	const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
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
		setIsTransitionEnabled(true);
		const nextIndex = (currentIndex + 1) % itemOrder.length;
		setCurrentItem(itemOrder[nextIndex]);
	};

	const prevItem = () => {
		setIsTransitionEnabled(true);
		const prevIndex =
			(currentIndex - 1 + itemOrder.length) % itemOrder.length;
		setCurrentItem(itemOrder[prevIndex]);
	};

	const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
		setIsTransitionEnabled(false);
		setIsDragging(true);
		const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
		setStartX(clientX);

		if ("touches" in e) {
			e.preventDefault();
		}
	};

	const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
		if (!isDragging) return;

		e.preventDefault();
		const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
		const diffX = clientX - startX;

		const isHorizontalSwipe =
			Math.abs(diffX) >
			Math.abs("touches" in e ? e.touches[0].clientY - startX : 0);

		if (isHorizontalSwipe) {
			e.preventDefault();
		}

		const maxDrag = 200;
		const constrainedTranslate = Math.max(
			Math.min(diffX, maxDrag),
			-maxDrag
		);

		setCurrentTranslate(constrainedTranslate);
	};

	const handleTouchEnd = () => {
		if (!isDragging) return;

		setIsDragging(false);
		setIsTransitionEnabled(true);

		const swipeThreshold = 50; // Уменьшаем порог для более отзывчивого свайпа
		const velocityThreshold = 0.5;

		const swipeVelocity = Math.abs(currentTranslate) / 150;

		if (
			currentTranslate < -swipeThreshold ||
			(currentTranslate < 0 && swipeVelocity > velocityThreshold)
		) {
			nextItem();
		} else if (
			currentTranslate > swipeThreshold ||
			(currentTranslate > 0 && swipeVelocity > velocityThreshold)
		) {
			prevItem();
		}

		setCurrentTranslate(0);
	};

	const getSliderStyle = () => {
		const baseTranslate = -currentIndex * 100; // Базовое положение текущего элемента
		const totalTranslate =
			baseTranslate + (currentTranslate / window.innerWidth) * 100;

		return {
			transform: `translateX(${totalTranslate}%)`,
			transition: isTransitionEnabled
				? "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
				: "none",
		};
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

	// В вашем JSX добавьте стили для контейнера:
	return (
		<div
			id="catalog"
			className="diamond-gradient-red transition-all bg-black grid grid-cols-1 relative overflow-hidden"
			style={items[currentItem].theme}
		>
			<div className="mx-auto px-5 xl:max-w-[1200px] w-full">
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

				<div className="flex lg:hidden flex-row justify-between my-[25px]">
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
					className="relative overflow-hidden touch-pan-y"
					style={{ WebkitOverflowScrolling: "touch" }}
				>
					<div
						ref={sliderRef}
						className="touch-pan-y will-change-transform flex transition-transform duration-300 ease-out"
						style={{
							...getSliderStyle(),
						}}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseLeave}
					>
						{itemOrder.map((item) => (
							<div
								key={item}
								className="w-full flex-shrink-0 min-h-dvh grid grid-cols-2 select-none lg:mt-[200px]"
							>
								<div className="text-white">
									<div className="text-4xl lg:text-7xl uppercase">
										<h1 className="text-[var(--current-color)] transition-colors">
											NIHAO
										</h1>
										<h1 className="uppercase">
											{items[item].name}
										</h1>
									</div>
									<p className="font-extralight text-base lg:text-xl mt-4">
										{items[item].description}
									</p>
									<div className="mt-8 flex flex-col lg:flex-row gap-8">
										<div className="w-fit">
											<VolumeSVG className="h-10 lg:h-14 fill-[var(--current-color)] mx-auto" />
											<p className="font-extralight text-sm lg:text-xl uppercase mt-2">
												Объем {items[item].volume}
											</p>
										</div>
										<div className="w-fit">
											<StrengthSVG
												className="h-10 lg:h-14 fill-[var(--current-color)] mx-auto"
												percentColor={
													items[item].darkText
														? "var(--black)"
														: "var(--white)"
												}
											/>
											<p className="font-extralight text-base lg:text-xl uppercase mt-2">
												Крепость {items[item].strength}%
											</p>
										</div>
									</div>
									<Button
										className={`bg-[var(--current-color)] ${
											items[item].darkText
												? "text-black"
												: "text-white"
										} mt-8`}
										onClick={showContactUsForm}
										variant={"mainButton"}
									>
										СВЯЗАТЬСЯ
									</Button>
								</div>
								<div className="relative h-fit mx-auto w-fit mt-[300px] lg:mt-[100px]">
									<img
										src={items[item].image}
										className="z-[2] h-fit w-[70px] lg:w-auto"
										draggable="false"
										alt={items[item].name}
									/>
									{items[item].awarded && (
										<img
											className="h-12 w-12 lg:h-24 lg:w-24 absolute z-2 -right-6 -bottom-6 lg:-bottom-10 lg:-right-14"
											src="/images/items/award.png"
											alt="Награда"
										/>
									)}
									{items[item].mainIngredient &&
										items[item].mainIngredient}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="transform flex space-x-3 z-10 items-center justify-center my-16 lg:my-0">
					{itemOrder.map((item) => (
						<button
							key={item}
							onClick={() => {
								setIsTransitionEnabled(true);
								setCurrentItem(item);
							}}
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
						<div className="bg-[var(--current-color)] p-4 w-[300px] lg:w-[360px]">
							<img
								src={items[currentItem].coctail.image}
								alt={items[currentItem].coctail.name}
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
										].coctail.ingredients.map(
											(ingredient, index) => (
												<li
													key={index}
													className="flex flex-row gap-2 text-xl font-extralight items-center"
												>
													<div className="h-5 w-5">
														<GlassSVG className="h-5 w-5" />
													</div>
													<p>{ingredient}</p>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
							<div className="mt-8">
								<h3 className="text-xl font-bold">
									Технология приготовления:
								</h3>
								<ul className="mt-2">
									{items[currentItem].coctail.how_to_make.map(
										(step, index) => (
											<li
												key={index}
												className="flex flex-row gap-2 text-xl font-extralight items-center"
											>
												<div className="h-5 w-5">
													<GlassSVG className="h-5 w-5" />
												</div>
												<p>{step}</p>
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
