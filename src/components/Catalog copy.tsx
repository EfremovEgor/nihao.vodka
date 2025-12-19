import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./common/Button";
import VolumeSVG from "./svg/VolumeSVG";
import StrengthSVG from "./svg/StrengthSVG";
import { items } from "@/lib/items";
import GlassSVG from "./svg/GlassSVG";
import { useData } from "@/hooks/useDataContext";

const CatalogCarousel = () => {
	const { showContactUsForm } = useData();
	const [currentItem, setCurrentItem] = useState<keyof typeof items>("lotos");

	const itemOrder: (keyof typeof items)[] = [
		"classic",
		"ganbei",
		"tangerine",
		"hao_chi",
		"lotos",
	];

	const getNeighbours = (item: keyof typeof items) => {
		const currentPos = itemOrder.findIndex((i) => i === item);
		let previousPos =
			currentPos === 0 ? itemOrder.length - 1 : currentPos - 1;
		let nextPos = currentPos === itemOrder.length - 1 ? 0 : currentPos + 1;
		return [itemOrder[previousPos], itemOrder[nextPos]];
	};
	// const [neighbours, setNeighbours] = useState(getNeighbours(currentItem));
	const neighbours = getNeighbours(currentItem);
	// setNeighbours(getNeighbours(currentItem));
	// useEffect(() => {
	// 	setNeighbours(getNeighbours(currentItem));
	// }, [currentItem]);

	return (
		<motion.div
			id="catalog"
			// Добавляем animate для плавного перехода CSS-переменных
			animate={items[currentItem].theme as any}
			transition={{ duration: 0.8, ease: "easeInOut" }} // Настройка скорости смены цвета
			className="diamond-gradient-red bg-black grid grid-cols-1 relative overflow-hidden"
		>
			<div className="mx-auto px-5 xl:max-w-[1200px] w-full">
				<div className="relative overflow-hidden">
					<div className="flex">
						<div className="w-full flex-shrink-0 min-h-dvh grid grid-cols-2 select-none lg:mt-[200px]">
							<AnimatePresence mode="popLayout">
								<motion.div
									key={currentItem}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5 }}
									className="text-white"
								>
									<div className="text-4xl lg:text-7xl uppercase">
										<h1 className="text-[var(--current-color)] transition-colors">
											NIHAO
										</h1>
										<h1 className="uppercase">
											{items[currentItem].name}
										</h1>
									</div>
									<p className="font-extralight text-base lg:text-xl mt-4">
										{items[currentItem].description}
									</p>
									<div className="mt-8 flex flex-col lg:flex-row gap-8">
										<div className="w-fit">
											<VolumeSVG className="h-10 lg:h-14 fill-[var(--current-color)] mx-auto" />
											<p className="font-extralight text-sm lg:text-xl uppercase mt-2">
												Объем{" "}
												{items[currentItem].volume}
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
												Крепость{" "}
												{items[currentItem].strength}%
											</p>
										</div>
									</div>
									<Button
										className={`bg-[var(--current-color)] ${items[currentItem].darkText ? "text-black" : "text-white"} mt-8`}
										onClick={showContactUsForm}
										variant={"mainButton"}
									>
										СВЯЗАТЬСЯ
									</Button>
								</motion.div>
							</AnimatePresence>

							{/* Правая часть с бутылками */}
							<div className="flex flex-row">
								<div className="relative h-fit mx-auto w-fit my-auto">
									<motion.img
										key={currentItem}
										layoutId={currentItem as string}
										src={items[currentItem].image}
										className="z-[2] h-auto w-[70px] lg:w-[157px]"
										transition={{
											type: "spring",
											stiffness: 50,
											damping: 25,
										}}
										draggable="false"
										alt={items[currentItem].name}
									/>
									<AnimatePresence>
										<motion.div
											key={currentItem}
											initial={{
												opacity: 0,
											}}
											animate={{
												opacity: 1,
											}}
											transition={{ duration: 0.5 }}
										>
											{items[currentItem].awarded && (
												<img
													className="h-12 w-12 lg:h-24 lg:w-24 absolute z-2 -right-6 -bottom-6 lg:-bottom-10 lg:-right-14"
													src="/images/items/award.png"
													alt="Награда"
												/>
											)}
											{items[currentItem]
												.mainIngredient &&
												items[currentItem]
													.mainIngredient}
										</motion.div>
									</AnimatePresence>
								</div>

								<div className="flex flex-col justify-around ml-4">
									<div>
										<motion.img
											layout
											key={`thumb-${neighbours[0]}`}
											layoutId={neighbours[0] as string}
											src={items[neighbours[0]].image}
											className="z-[2] h-auto w-[40px] lg:w-[60px] cursor-pointer"
											style={{ filter: "blur(4px)" }}
											onClick={() =>
												setCurrentItem(neighbours[0])
											}
											draggable="false"
											alt={items[neighbours[0]].name}
										/>
									</div>
									<div>
										<motion.img
											layout
											key={`thumb-${neighbours[1]}`}
											layoutId={neighbours[1] as string}
											src={items[neighbours[1]].image}
											className="z-[2] h-auto w-[40px] lg:w-[60px] cursor-pointer"
											style={{ filter: "blur(4px)" }}
											onClick={() =>
												setCurrentItem(neighbours[1])
											}
											draggable="false"
											alt={items[neighbours[1]].name}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					id="coctails"
					className="min-h-dvh w-full text-white flex flex-col items-center justify-center mt-16"
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
		</motion.div>
	);
};

export default CatalogCarousel;
