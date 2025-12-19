import BrandItem from "./BrandItem";
import Button from "../common/Button";

const Brands = () => {
	return (
		<div className="py-8 bg-black gap-4 lg:bg-transparent flex flex-col lg:flex-row lg:items-center lg:justify-around grid-rows-2 min-h-dvh px-5 lg:pl-12 lg:pr-5">
			<div className="flex flex-col gap-4 lg:gap-10">
				<BrandItem
					className="w-[96px] lg:w-[128px] h-auto"
					image="/images/brand/concept.png"
					title={"Бренд разработан\nГК “CONCEPT”"}
				>
					<Button
						className="h-[35px] lg:h-[50px] mt-4"
						variant={"secondaryButton"}
					>
						<a target="_blank" href="https://concept-spirits.ru/">
							УЗНАТЬ БОЛЬШЕ
						</a>
					</Button>
				</BrandItem>

				<BrandItem
					className="w-[96px] lg:w-[111px]"
					image="/images/brand/design.png"
					title="СОВРЕМЕННЫЙ ДИЗАЙН"
				>
					<p className="text-xl/tight text-white font-extralight">
						Современный лаконичный <br /> дизайн с уважением <br />{" "}
						к восточным традициям
					</p>
				</BrandItem>
			</div>
			<div className="flex flex-col gap-4 lg:gap-10">
				<BrandItem
					className="w-[96px] lg:w-[124px]"
					image="/images/brand/tastes.png"
					title="РАЗНООБРАЗИЕ ВКУСОВ"
				>
					<p className="text-xl/tight text-white font-extralight">
						ПКлассическая водочная технология <br /> с
						использованием ароматных спиртов <br /> двойной
						дистилляции, подчеркивающих <br /> вкусовую
						идентиченость Китая
					</p>
				</BrandItem>
				<BrandItem
					className="w-[96px] lg:w-[124px]"
					image="/images/brand/quality.png"
					title="ВЫСОКОЕ КАЧЕСТВО"
				>
					<p className="text-xl/tight text-white font-extralight">
						Качество продукта отмечено <br /> экспертами российских{" "}
						<br /> и международных конкурсов
					</p>
				</BrandItem>
			</div>
		</div>
	);
};

export default Brands;
