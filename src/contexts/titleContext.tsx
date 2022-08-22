import { createContext, Dispatch, SetStateAction } from "react";

type TitleType = {
	title: string;
	setTitle: Dispatch<SetStateAction<string>>;
};

export const TitleContext = createContext<TitleType>({
	setTitle: () => {},
	title: "",
});

export const TitleProvider = TitleContext.Provider;
