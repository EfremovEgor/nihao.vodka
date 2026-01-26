import { createFileRoute } from "@tanstack/react-router";
import Shops from "@/components/Shops";
import AboutBrand from "@/components/AboutBrand";
import Brands from "@/components/brand/Brands";
import AgeAlert from "@/components/modals/AgeAlert";
import PromoVideo from "@/components/PromoVideo";
import ContactUsForm from "@/components/modals/ContactUsForm";
import { useData } from "@/hooks/useDataContext";
import CatalogCarousel from "@/components/Catalog copy";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({ meta: [{ title: "Nihao" }, { description: "Test" }] }),
});

function App() {
	const { contactUsFormShown, hideContactUsForm } = useData();

	return (
		<div>
			<div className="fixed h-screen w-full bg-black -z-23 flex flex-col justify-center items-center">
				<div className="absolute w-full h-full diamond-gradient-white -z-2"></div>
				<img
					className="mx-auto -z-1 w-[157px] h-auto"
					src="/images/items/classic.png"
				/>
			</div>
			<AgeAlert />
			{/* <Faces /> */}
			<PromoVideo />
			<AboutBrand />
			<Brands />
			<CatalogCarousel />
			<Shops />
			<ContactUsForm
				onClose={hideContactUsForm}
				open={contactUsFormShown}
			/>
		</div>
	);
}
