import React, { createContext, useCallback, useState } from "react";

export interface DataContextType {
	contactUsFormShown: boolean;
	showContactUsForm: () => void;
	hideContactUsForm: () => void;
}
export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	const [contactUsFormShown, setContactUsFormShown] = useState(false);
	const showContactUsForm = useCallback(() => {
		setContactUsFormShown(true);
	}, []);
	const hideContactUsForm = useCallback(() => {
		setContactUsFormShown(false);
	}, []);
	return (
		<DataContext.Provider
			value={{
				contactUsFormShown: contactUsFormShown,
				showContactUsForm,
				hideContactUsForm,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
