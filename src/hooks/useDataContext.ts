import { DataContext, type DataContextType } from "@/components/DataContext";
import { useContext } from "react";

export const useData = (): DataContextType => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error("useData must be used within a DataProvider");
	}
	return context;
};
