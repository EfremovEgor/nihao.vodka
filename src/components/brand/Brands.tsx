import BrandItem from "./BrandItem";
import Button from "../common/Button";

const Brands = () => {
	return (
		<div className="py-8 bg-black gap-4 lg:bg-transparent flex flex-col lg:flex-row lg:items-center justify-around grid-rows-2 min-h-dvh px-5">
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
					className="w-[96px] lg:w-[124px]"
					image="/images/brand/mission.png"
					title="НАША МИССИЯ"
				>
					<p className="text-xl/tight text-white font-extralight">
						Проявить уважение
						<br /> к покупателю, через
						<br /> внешнюю эстетику
						<br /> и качество продукции.
					</p>
				</BrandItem>
			</div>
			<div className="flex flex-col gap-4 lg:gap-10">
				<BrandItem
					className="w-[96px] lg:w-[111px]"
					image="/images/brand/design.png"
					title="ЯРКИЙ ДИЗАЙН"
				>
					<p className="text-xl/tight text-white font-extralight">
						Создание современных, уникальных
						<br /> и востребованных
						<br /> на рынке продуктов
						<br /> - наш приоритет
					</p>
				</BrandItem>
				<BrandItem
					className="w-[96px] lg:w-[124px]"
					image="/images/brand/quality.png"
					title="ЯРКИЙ ДИЗАЙН"
				>
					<p className="text-xl/tight text-white font-extralight">
						Качество выпущенных продуктов
						<br /> является приоритетным свойством
						<br /> и отличительной чертой каждого
						<br />
						выпущенного продукта
					</p>
				</BrandItem>
			</div>
		</div>
	);
};

export default Brands;
