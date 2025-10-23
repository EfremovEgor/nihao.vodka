import Button from "../common/Button";
import useLocalStorage from "@/hooks/useLocalStorge";

const AgeAlert = () => {
	const [value, setValue] = useLocalStorage("ageConfirmed", false);
	return (
		!value && (
			<div className="w-full z-50 h-full fixed backdrop-blur top-0 bg-black/40 left-0 flex content-center justify-center items-center">
				<div className="bg-red w-full max-w-[860px] min-h-10 p-16 rounded-4xl">
					<h1 className="uppercase text-6xl text-center text-white">
						Вам есть 18?
					</h1>
					<img
						src="/images/loader.png"
						className="max-w-32 w-full mx-auto mt-8"
						alt=""
					/>
					<p className="text-center text-white font-extralight text-2xl mt-8">
						Информация на сайте не предназначена для посетителей
						младше 18 лет. Для доступа к ней, подтвердите,
						пожалуйста, свое совершеннолетие.
					</p>
					<Button
						onClick={() => setValue(true)}
						variant={"ageConfirmationButton"}
						className="text-xl mt-8 mx-auto block py-2 px-4"
					>
						Да, мне есть 18
					</Button>
					<button
						onClick={() => setValue(false)}
						className="cursor-pointer mx-auto block text-white text-xl mt-4 font-extralight border-dotted border-b-1 border-white px-2 pb-2"
					>
						Нет, я младше
					</button>

					<p className="text-sm text-white text-center font-extralight max-w-1/2 mx-auto mt-8">
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
