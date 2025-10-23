import { useData } from "@/hooks/useDataContext";
import Button from "./common/Button";
import NihaoSVG from "./svg/NihaoSVG";

export default function Header() {
	const { showContactUsForm } = useData();

	return (
		<header className="sticky top-0 h-[60px] bg-red px-5 flex flex-row justify-between items-center z-50">
			<NihaoSVG className="fill-white h-[33px]" />
			<nav>
				<ul className="hidden lg:flex flex-row gap-5 text-white text-[20px] items-center">
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
				<div className="flex flex-row lg:hidden">
					<Button
						onClick={showContactUsForm}
						variant={"contactsButton"}
					>
						Cвязаться
					</Button>
				</div>
			</nav>
		</header>
	);
}
