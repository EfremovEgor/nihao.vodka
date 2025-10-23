import Button from "../common/Button";
import NihaoSVG from "../svg/NihaoSVG";
import { useData } from "@/hooks/useDataContext";

const Footer = () => {
	const { showContactUsForm } = useData();

	return (
		<footer className="">
			<div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-items-start text-white text-sm lg:text-[20px] bg-red py-5 px-5">
				<div>
					<ul className="flex flex-col gap-2 lg:items-center">
						<li>
							<Button
								onClick={showContactUsForm}
								variant={"contactsButton"}
							>
								Cвязаться
							</Button>
						</li>
						<li>
							<a href="#aboutBrand">О бренде</a>
						</li>
						<li>
							<a href="#catalog">Каталог</a>
						</li>
						<li>
							<a href="#coctails">Коктейли</a>
						</li>
						<li>
							<a href="#whereToBuy">Где купить</a>
						</li>
					</ul>
				</div>
				<NihaoSVG className="fill-white h-[33px] lg:justify-self-center" />
				<div className="lg:justify-self-end hidden lg:block">
					<p>
						ООО "Концепт"
						<br />
						г. Москва,
						<br /> ул. Ленинская Слобода 19с1
					</p>
					<p>info@concept-spirits.ru</p>
					<p>+ 7 495 795 55 02</p>
				</div>
				<div className="col-span-2 mt-4">
					<p>ООО "Концепт", г. Москва, ул. Ленинская Слобода 19с1</p>
					<p>info@concept-spirits.ru</p>
					<p>+ 7 495 795 55 02</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
