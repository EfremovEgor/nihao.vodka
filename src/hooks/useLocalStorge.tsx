import React from "react";

function useLocalStorage<T>(
	storageKey: string,
	fallbackState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const [value, setValue] = React.useState<T>(() => {
		try {
			const item = localStorage.getItem(storageKey);

			if (item && item !== "undefined") {
				return JSON.parse(item);
			}
			return fallbackState;
		} catch (error) {
			console.error(
				`Error reading localStorage key "${storageKey}":`,
				error
			);
			return fallbackState;
		}
	});

	React.useEffect(() => {
		try {
			localStorage.setItem(storageKey, JSON.stringify(value));
		} catch (error) {
			console.error(
				`Error setting localStorage key "${storageKey}":`,
				error
			);
		}
	}, [value, storageKey]);

	return [value, setValue];
}
export default useLocalStorage;
