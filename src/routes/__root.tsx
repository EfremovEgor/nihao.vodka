import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";

import Header from "../components/Header";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader";
import { DataProvider } from "@/components/DataContext";

export const Route = createRootRoute({
	component: Root,
});

function Root() {
	return (
		<DataProvider>
			<>
				<HeadContent />
				<Header />
				<main>
					<Loader />
					<Outlet />
				</main>
				<Footer />
			</>
		</DataProvider>
	);
}
