import { ReactNode } from "react";

export type ProjectData = {
	title: string;
	about: string;
	development: string;
	technologies: ReactNode[];
	images: string[];
	githubPath?: string;
	websitePath?: string;
};
