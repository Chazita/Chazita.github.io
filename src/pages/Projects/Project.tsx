import {
	Container,
	createStyles,
	SimpleGrid,
	Title,
	Text,
} from "@mantine/core";
import { ReactNode, useContext, useEffect } from "react";
import { TitleContext } from "../../contexts/titleContext";
import { ProjectCard } from "./ProjectCard";

import { useTranslation } from "react-i18next";
import { ProjectData } from "./ProjectType";

import Api1Image from "../../assets/api_1.png";
import Api2Image from "../../assets/api_2.png";
import Api3Image from "../../assets/api_3.png";
import Api4Image from "../../assets/api_4.png";

import Admin1Image from "../../assets/admin_1.png";
import Admin2Image from "../../assets/admin_2.png";
import Admin3Image from "../../assets/admin_3.png";
import Admin4Image from "../../assets/admin_4.png";

import Ecommerce1Image from "../../assets/ecommerce_1.png";
import Ecommerce2Image from "../../assets/ecommerce_2.png";
import Ecommerce3Image from "../../assets/ecommerce_3.png";
import Ecommerce4Image from "../../assets/ecommerce_4.png";
import Ecommerce5Image from "../../assets/ecommerce_5.png";

const FAST_DRINK_FRONT_TECH: ReactNode[] = [
	<img
		height={"50rem"}
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
	/>,
	<img
		height={"50rem"}
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
	/>,
	<img
		height={"50rem"}
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
	/>,
	<img
		height={"50rem"}
		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
	/>,
];

const useStyles = createStyles((theme) => ({
	grid: {
		[`@media (min-width: ${theme.breakpoints.sm}px)`]: {
			paddingBottom: "1rem",
		},
	},
}));

function Project() {
	const { classes } = useStyles();
	const { t } = useTranslation("project");
	const { setTitle } = useContext(TitleContext);
	useEffect(() => {
		document.title = `Chazarreta Matias - ${t("head")}`;
		setTitle(`${t("head")}`);
	});

	const projectData: ProjectData[] = [
		{
			title: t("fast-drink-ecommerce.title"),
			about: t("fast-drink-ecommerce.about"),
			development: t("fast-drink-ecommerce.development"),
			images: [
				Ecommerce1Image,
				Ecommerce2Image,
				Ecommerce3Image,
				Ecommerce4Image,
				Ecommerce5Image,
			],
			technologies: FAST_DRINK_FRONT_TECH,
			githubPath: "https://github.com/Chazita/fastdrink-frontends",
			websitePath: "https://fastdrink-frontends-ecommerce.vercel.app/",
		},
		{
			title: t("fast-drink-admin.title"),
			about: t("fast-drink-admin.about"),
			development: t("fast-drink-admin.development"),
			images: [Admin1Image, Admin2Image, Admin3Image, Admin4Image],
			technologies: FAST_DRINK_FRONT_TECH,
			githubPath: "https://github.com/Chazita/fastdrink-frontends",
			websitePath: "https://fastdrink-frontends-dashboard.vercel.app/",
		},
		{
			title: t("fast-drink-api.title"),
			about: t("fast-drink-api.about"),
			development: t("fast-drink-api.development"),
			images: [Api1Image, Api2Image, Api3Image, Api4Image],
			technologies: [
				<img
					height={"50rem"}
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
				/>,
				<img
					height={"50rem"}
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
				/>,
			],
			githubPath: "https://github.com/Chazita/fastdrink-backend",
			websitePath: "https://fast-drink-api.herokuapp.com/swagger/index.html",
		},
	];

	return (
		<Container size="sm" px={0}>
			<div style={{ marginBottom: "1rem" }}>
				<Title>{t("title")}</Title>
				<Text>{t("content")}</Text>
			</div>
			<SimpleGrid
				spacing="lg"
				breakpoints={[{ minWidth: "xs", cols: 1 }]}
				className={classes.grid}
			>
				{projectData.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</SimpleGrid>
		</Container>
	);
}

export default Project;
