import { useState } from "react";
import Button from "../common/Button";

const ContactUsForm = ({
	open = false,
	onClose = () => {},
}: {
	open?: boolean;
	onClose?: () => void;
}) => {
	const [theme, setTheme] = useState("");
	const [fullname, setFullname] = useState("");
	const [phone, setPhone] = useState("");
	const [comment, setComment] = useState("");
	const [status, setStatus] = useState("");
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setStatus("");

		const formData = new FormData(e.currentTarget);

		try {
			const response = await fetch(
				"https://nihao.vodka/api/mailing.php",
				{
					method: "POST",
					body: formData,
				}
			);

			const result = await response.json();

			if (result.status === "success") {
				alert("Заявка успешно отправлена!");
				e.currentTarget.reset();
			} else {
				console.error("Fetch error:", result.message);
			}
		} catch (error) {
			console.error("Fetch error:", error);
		} finally {
			setLoading(false);
		}
	};
	return (
		open && (
			<div
				onClick={onClose}
				className="w-full z-50 h-full fixed backdrop-blur top-0 bg-black/40 left-0 flex content-center justify-center items-center"
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="bg-red w-full max-w-[660px] min-h-10 p-4 lg:p-16 rounded-4xl"
				>
					<h1 className="uppercase text-xl lg:text-3xl text-center text-white">
						Хотите связаться с нами?
					</h1>

					<form
						onSubmit={handleSubmit}
						className="mt-4 lg:mt-8 flex flex-col gap-4"
					>
						<input
							type="text"
							name="theme"
							value={theme}
							required
							onChange={(e) => setTheme(e.target.value)}
							placeholder="ТЕМА ОБРАЩЕНИЯ"
							className="placeholder-black bg-white px-2 py-2 lg:px-4 lg:py-4 w-full  lg:text-xl"
						/>

						<input
							type="text"
							name="full_name"
							value={fullname}
							required
							onChange={(e) => setFullname(e.target.value)}
							placeholder="ФИО"
							className="placeholder-white border-yellow border-2 px-2 py-2 lg:px-4 lg:py-4 w-full lg:text-xl"
						/>
						<input
							type="tel"
							name="phone"
							required
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder="ТЕЛЕФОН"
							className="placeholder-white border-yellow border-2 px-2 py-2 lg:px-4 lg:py-4 w-full lg:text-xl"
						/>
						<input
							type="text"
							name="comments"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							placeholder="КОММЕНТАРИЙ"
							className="placeholder-white border-yellow border-2 px-2 py-2 lg:px-4 lg:py-4 w-full lg:text-xl"
						/>
						<Button
							disabled={loading}
							variant={"contactsButton"}
							className="py-2 lg:py-4"
						>
							{loading
								? "ОТПРАВКА..."
								: "ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК"}
						</Button>
					</form>
				</div>
			</div>
		)
	);
};

export default ContactUsForm;
