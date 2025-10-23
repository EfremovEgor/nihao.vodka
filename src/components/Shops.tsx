import HoverableStore from "./Footer/HoverableStore";

const Shops = () => {
	return (
		<div className="bg-black py-12 text-white px-5" id="whereToBuy">
			<h1 className="text-3xl lg:text-4xl text-center uppercase">
				Ищите нас на полках
			</h1>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-around items-center mt-12">
				<HoverableStore
					hoverImage="/images/shops/perekrestok_hover.png"
					defaultImage="/images/shops/perekrestok.png"
					link="https://www.perekrestok.ru/cat/c/6/vodka"
					text={`Сеть супермаркетов\n"ПЕРЕКРЁСТОК"`}
				/>
				<HoverableStore
					hoverImage="/images/shops/ashan_hover.png"
					defaultImage="/images/shops/ashan.png"
					link="https://www.auchan.ru/catalog/alkogol/krepkiy-alkogol/vodka/"
					text={`Торговая сеть\n"АШАН"`}
				/>
				<HoverableStore
					hoverImage="/images/shops/metro_hover.png"
					defaultImage="/images/shops/metro.png"
					link="https://online.metro-cc.ru/category/alkogolnaya-produkciya/krepkiy-alkogol/vodka"
					text={`Cеть гипермаркетов\n"METRO"`}
				/>
				<HoverableStore
					hoverImage="/images/shops/magnit_hover.png"
					defaultImage="/images/shops/magnit.png"
					link="https://magnit.ru/catalog/41193-vodka_alkogolcorenew?shopCode=992301&shopType=6"
					text={`Гипермаркеты\n"МАГНИТ"`}
				/>
			</div>
		</div>
	);
};

export default Shops;
