import { useState } from "react";
import Button from "../common/Button";
// import useLocalStorage from "@/hooks/useLocalStorge";

const AgeAlert = () => {
	const [value, setValue] = useState(true);
	return (
		value && (
			<div className="w-full z-50 h-full fixed backdrop-blur top-0 bg-black/40 left-0 flex content-center justify-center items-center">
				<div className="bg-red w-full max-w-[720px] min-h-10 p-4 lg:p-16 rounded-4xl">
					<h1 className="uppercase text-2xl lg:text-4xl text-center text-white">
						Вам есть 18?
					</h1>
					<img
						src="/images/loader.png"
						className="max-w-[70px] lg:max-w-24 w-full mx-auto mt-8"
						alt=""
					/>
					<p className="text-center text-white font-extralight  lg:text-xl mt-8">
						Информация на сайте не предназначена для посетителей
						младше 18 лет. Для доступа к ней, подтвердите,
						пожалуйста, свое совершеннолетие.
					</p>
					<Button
						onClick={() => setValue(false)}
						variant={"contactsButton"}
						className="text-lg lg:text-xl mt-8 mx-auto block py-2 px-4"
					>
						Да, мне есть 18
					</Button>
					<button
						onClick={() => window.location.reload()}
						className="cursor-pointer mx-auto block text-white text-lg lg:text-xl mt-4 font-extralight border-dotted border-b-1 border-white px-2 pb-2"
					>
						Нет, я младше
					</button>

					<p className="text-sm text-white/60 text-center font-extralight max-w-3/4 mx-auto mt-8">
						Мы используем файлы cookie для улучшения вашего опыта на
						нашем сайте. Заходя на ресурс, вы соглашаетесь на их
						использование
					</p>
				</div>
			</div>
		)
	);
};

export default AgeAlert;
