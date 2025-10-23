import Button from "../common/Button";

const ContactUsForm = ({
	open = false,
	onClose = () => {},
}: {
	open?: boolean;
	onClose?: () => void;
}) => {
	return (
		open && (
			<div
				onClick={onClose}
				className="w-full z-50 h-full fixed backdrop-blur top-0 bg-black/40 left-0 flex content-center justify-center items-center"
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="bg-red w-full max-w-[660px] min-h-10 p-16 rounded-4xl"
				>
					<h1 className="uppercase text-3xl text-center text-white">
						Хотите связаться с нами?
					</h1>

					<form action="" className="mt-8 flex flex-col gap-4">
						<input
							type="text"
							name="theme"
							placeholder="ТЕМА ОБРАЩЕНИЯ"
							className="placeholder-black bg-white px-4 py-4 w-full text-xl"
						/>

						<input
							type="text"
							name="full_name"
							placeholder="ФИО"
							className="placeholder-white border-yellow border-2 px-4 py-4 w-full text-xl"
						/>
						<input
							type="tel"
							name="phone"
							placeholder="ТЕЛЕФОН"
							className="placeholder-white border-yellow border-2 px-4 py-4 w-full text-xl"
						/>
						<input
							type="text"
							name="comments"
							placeholder="КОММЕНТАРИЙ"
							className="placeholder-white border-yellow border-2 px-4 py-4 w-full text-xl"
						/>
						<Button variant={"contactsButton"} className="py-4">
							ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
						</Button>
					</form>
				</div>
			</div>
		)
	);
};

export default ContactUsForm;
