import NihaoSVG from "./svg/NihaoSVG";

const AboutBrand = () => {
	return (
		<div
			id="aboutBrand"
			className="py-16 mt-[250px] min-h-dvh bg-black px-5 mx-auto flex flex-col items-center justify-center"
		>
			<div className="max-w-[970px] space-y-6">
				<NihaoSVG className="fill-red  w-full" />
				<p className="text-white text-sm lg:text-[26px] text-center font-extralight">
					Водка "NIHAO" премиальный продукт, предлагающий
					исключительное качество и изысканный вкус. Она отличается от
					конкурентов своим уникальным вкусовым профилем,
					вдохновленным китайской культурой, и элегантной бутылкой с
					европейским лаконичным дизайном, отражающим китайскую
					эстетику.
				</p>
				<div className="flex flex-row items-center justify-center">
					<a
						className="px-5 bg-red py-3 text-white rounded-[5px] border-transparent border-2 hover:font-bold transition-all font-semibold active:font-bold active:border-white"
						href="#catalog"
					>
						В КАТАЛОГ
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutBrand;
