import { createFileRoute } from "@tanstack/react-router";
import Shops from "@/components/Shops";
import AboutBrand from "@/components/AboutBrand";
import Faces from "@/components/Faces";
import Brands from "@/components/brand/Brands";
import AgeAlert from "@/components/modals/AgeAlert";
import Catalog from "@/components/Catalog";
import PromoVideo from "@/components/PromoVideo";
import ContactUsForm from "@/components/modals/ContactUsForm";
import { useData } from "@/hooks/useDataContext";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({ meta: [{ title: "Nihao" }, { description: "Test" }] }),
});

function App() {
	const { contactUsFormShown, hideContactUsForm } = useData();

	return (
		<div>
			<AgeAlert />
			<Faces />
			<AboutBrand />
			<Brands />
			<PromoVideo />
			<Catalog />
			<Shops />
			<ContactUsForm
				onClose={hideContactUsForm}
				open={contactUsFormShown}
			/>
		</div>
	);
}
