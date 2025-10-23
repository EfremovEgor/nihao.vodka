export interface Item {
	name: string;
	description: string;
	volume: string;
	strength: number;
	awarded?: boolean;
	image: string;
	mainIngredient?: React.ReactElement;
	theme: React.CSSProperties;
	coctail: Coctail;
	darkText?: boolean;
}

export interface Coctail {
	name: string;
	slogan: string;
	description: string;
	image: string;
	ingredients: string[];
	how_to_make: string[];
}

export const items: {
	[key: string]: Item;
} = {
	classic: {
		name: "Classic",
		description:
			"Водка NIHAO Сlassic – премиальная водка из  чистейшей природной воды и отборного зернового спирта, созданная экспертами с использованием  лучших технологий западного водочного  мастерства и уникальных китайских традиций  гостеприимства.",
		volume: "0,5 / 0,7",
		strength: 40,
		awarded: true,
		mainIngredient: (
			<div className="w-fit absolute z-2 -bottom-12 lg:bottom-0 -left-14 lg:-left-32">
				<img
					className="h-[100px] lg:h-[200px] w-fit mx-auto"
					src="/images/items/ingredients/wheat.png"
				/>
				<h2 className="uppercase text-white font-extralight text-sm lg:text-base">
					Зерновой спирт
				</h2>
			</div>
		),
		image: "/images/items/classic.png",
		theme: {
			"--first-gradient-color": "#B24C35",
			"--second-gradient-color": "#451d14",
			"--third-gradient-color": "#000000",
			"--current-color": "#B24C35",
		} as React.CSSProperties,
		coctail: {
			name: "Jasmine Stir",
			slogan: "Чистый и ароматный",
			description: "Восточная свежесть",
			image: "/images/items/coctails/jasmine_stir.png",
			ingredients: [
				"40 мл водки Nihao Classic",
				"30 мл настоя жасмина",
				"15 мл сахарного сиропа",
				"5 мл свежевыжатого лимонного сока",
			],
			how_to_make: [
				"Наполните бокал для смешивания льдом на 2/3;",
				"Влейте водку, жасмин, сироп и лимонный сок;",
				"Аккуратно перемешайте барной ложкой до охлаждения и равномерного смешения;",
				"Перелейте в предварительно охлажденный бокал Nick&Nora;",
				"Украшение: лепесток жасмина.",
			],
		},
	},

	ganbei: {
		name: "Ganbei",
		description: `Водка NIHAO GanBei  отсылает к китайской ритуальной культуре "Ганбей!" — «До дна!». А также символизирует мост между востоком и западом, подобно древнему Шёлковому пути, который  соединял Китай с Европой. Она отличается от  конкурентов своим уникальным вкусовым профилем,  вдохновленным китайской культурой: чистейшей  природной водой, настоем рисовых хлопьев и  высококачественным спиртом.`,
		volume: "0,5 / 0,7",
		strength: 40,
		awarded: true,
		darkText: true,
		mainIngredient: (
			<div className="w-fit absolute z-2 -bottom-12 lg:bottom-0 -left-14 lg:-left-32">
				<img
					className="h-[60px] lg:h-[120px] w-fit mx-auto"
					src="/images/items/ingredients/rice.png"
				/>
				<h2 className="uppercase text-white font-extralight text-sm lg:text-base text-center">
					Настой риса
				</h2>
			</div>
		),
		image: "/images/items/ganbei.png",
		theme: {
			"--first-gradient-color": "#aaa22d",
			"--second-gradient-color": "#534f19",
			"--third-gradient-color": "#000000",
			"--current-color": "#F1E642",
		} as React.CSSProperties,
		coctail: {
			name: "Ganbei",
			slogan: "Чистый вкус, выдержанный баланс",
			description: "Современная азиатская вариация Dirty Martini",
			image: "/images/items/coctails/ganbei.png",
			ingredients: [
				"35 мл водки Nihao GanBei",
				"35 мл сухого вермута",
				"5 мл оливкового рассола",
			],
			how_to_make: [
				"Наполните бокал для смешивания льдом на 2/3;",
				"Добавьте водку Nihao GanBei, сухой вермут и оливковый рассол;",
				"Перемешайте аккуратно барной ложкой до охлаждения и однородности;",
				"Перелейте в охлажденный бокал Nick & Nora;",
				"Украшение: три зелёные оливки на металлической шпажке",
			],
		},
	},

	tangerine: {
		name: "Tangerine",
		description: `Водка особая создана для ценителей изысканных напитков, любителей китайской культуры и эстетики. Уникальный вкус подчеркивается добавлением ароматного настоя мандарина и особенно ценится профессионалами в сфере гостеприимства, стремящимися предложить своим гостям исключительные напитки.`,
		volume: "0,5 / 0,7",
		strength: 38,
		mainIngredient: (
			<div className="w-fit absolute z-2 -bottom-12 lg:bottom-0 -left-14 lg:-left-32">
				<img
					className="h-[60px] lg:h-[140px] w-fit mx-auto"
					src="/images/items/ingredients/tangerine.png"
				/>
				<h2 className="uppercase text-white font-extralight text-sm lg:text-base text-center">
					Настой <br /> мандарина
				</h2>
			</div>
		),
		image: "/images/items/tangerine.png",
		theme: {
			"--first-gradient-color": "#DE6126",
			"--second-gradient-color": "#66331b",
			"--third-gradient-color": "#000000",
			"--current-color": "#DE6126",
		} as React.CSSProperties,
		coctail: {
			name: "Pomelo Sparkle",
			slogan: "Цитрусовый и игристый",
			description: "Освежающий дневной коктейльс восточной элегантностью",
			image: "/images/items/coctails/pomelo_sparkle.png",
			ingredients: [
				"40 мл водки Nihao Tangerine",
				"40 мл свежевыжатого сока помело",
				"10 мл свежевыжатого лимонного сока",
				"20 мл сахарного сиропа",
				"100 мл игристого вина брют",
			],
			how_to_make: [
				"Наполните шейкер льдом на 2/3;",
				"Добавьте водку Nihao Tangerine, сок помело, лимонный сок и сироп;",
				"Взбейте. Перелейте через стрейнер и сито в винный бокал со льдом;",
				"Добавьте игристое вино и аккуратно перемешайте барной ложкой, сохранив газацию;",
				"Украшение: долька помело и цедра лимона.",
			],
		},
	},

	hao_chi: {
		name: "Hao Chi",
		description: `Водка особой Nihao Hao Chi обладает бархатным послевкусием с приятной фруктовой ноткой. Вкус нежной сочной мякоти слив не оставит никого равнодушным. Понятие “Хао Чи” (“маскарад”) говорит о  том, что люди и в жизни носят маски, а напиток обнажает их истинную сущность.`,
		volume: "0,5 / 0,7",
		strength: 38,
		image: "/images/items/hao_chi.png",
		theme: {
			"--first-gradient-color": "#33522a",
			"--second-gradient-color": "#192b15",
			"--third-gradient-color": "#000000",
			"--current-color": "#508042",
		} as React.CSSProperties,
		mainIngredient: (
			<div className="w-fit absolute z-2 -bottom-12 lg:bottom-0 -left-14 lg:-left-32">
				<img
					className="h-[70px] lg:h-[140px] w-fit mx-auto"
					src="/images/items/ingredients/plum.png"
				/>
				<h2 className="uppercase text-white font-extralight text-sm lg:text-base text-center">
					Мякоть сливы
				</h2>
			</div>
		),
		coctail: {
			name: "Yuzu Plum Sour",
			slogan: "Восточно-фруктовый",
			description: "Яркий и мягкий баланс",
			image: "/images/items/coctails/yuzu_plum_sour.png",
			ingredients: [
				"40 мл водки Nihao Hao Chi",
				"20 мл пюре юдзу",
				"10 мл свежевыжатого лимонного сока",
				"15 мл яичного белка",
			],
			how_to_make: [
				"Наполните шейкер льдом на 2/3;",
				"Добавьте водку Nihao Hao Chi, пюре эдзу, лимонный сок и яичный белок;",
				"Энергично взбейте;",
				"Отфильтруйте через стрейнер и сито в стакан олд фэшн, наполненный льдом;",
				"Украшение: долька  сушеного лимона.",
			],
		},
	},

	lotos: {
		name: "Lotos",
		description: `Водка особая Nihao Lotos создана  для ценителей  изысканных напитков.  Лотосы — пищевые и  лекарственные растения, цветок лотоса необычайно  красив, нежен и романтичен. В Египте, Индии и Китае  лотос — сакральный символ.`,
		volume: "0,5 / 0,7",
		strength: 38,
		darkText: true,
		image: "/images/items/lotos.png",
		mainIngredient: (
			<div className="w-fit absolute z-2 -bottom-12 lg:bottom-0 -left-14 lg:-left-32">
				<img
					className="h-[70px] lg:h-[140px] w-fit mx-auto"
					src="/images/items/ingredients/lotos.png"
				/>
				<h2 className="uppercase text-white font-extralight text-sm lg:text-base text-center">
					настой цветка <br /> лотоса
				</h2>
			</div>
		),
		theme: {
			"--first-gradient-color": "#406379",
			"--second-gradient-color": "#19262f",
			"--third-gradient-color": "#000000",
			"--current-color": "#81BEE5",
		} as React.CSSProperties,
		coctail: {
			name: "Lotus Ginger Fizz",
			slogan: "Освежающий и остро-сладкий",
			description: "Восточная гармония вкусов и цветочная игривость",
			image: "/images/items/coctails/lotus_ginger_fizz.png",
			ingredients: [
				"40 мл водки Nihao Lotus",
				"20 г свежего имбиря (мадл)",
				"160 мл ванильной содовой",
				"10 мл свежевыжатого лимонного сока",
			],
			how_to_make: [
				"Наполните бокал хайбол льдом на 2/3; ",
				"Добавьте свежий имбирь и аккуратно разомните его прямо в бокале;",
				"Затем добавьте водку Nihao Lotus, лимонный сок и ванильную содовую;",
				"Аккуратно перемешайте барной ложкой;",
				"Украшение: слайс свежего имбиря и кусочек медовой соты на бортике.",
			],
		},
	},
};
