import {
	Card,
	Title,
	Text,
	Group,
	Button,
	Anchor,
	Image,
	Modal,
	createStyles,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconBrowser, IconBrandGithub } from "@tabler/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectData } from "./ProjectType";

export type ProjectCardProps = {
	project: ProjectData;
};

const useStyles = createStyles((_theme, _params, getRef) => ({
	controls: {
		ref: getRef("controls"),
		transition: "opacity 150ms ease",
		opacity: 0,
	},

	root: {
		"&:hover": {
			[`& .${getRef("controls")}`]: {
				opacity: 1,
			},
		},
	},
}));

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const { t } = useTranslation("project");
	const { classes } = useStyles();

	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			<Card.Section>
				<Carousel
					classNames={classes}
					withIndicators
					style={{ maxWidth: "100%" }}
				>
					{project.images.map((image, index) => (
						<Carousel.Slide key={index}>
							<Image src={image} withPlaceholder />
						</Carousel.Slide>
					))}
				</Carousel>
			</Card.Section>
			<Title>{project.title}</Title>
			<div style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
				<Title order={2}>{t("about")}</Title>
				<Text>{project.about}</Text>
			</div>
			<div style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
				<Title order={2}>{t("development")}</Title>
				<Text>{project.development}</Text>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<Title order={2}>{t("technologies")}</Title>
				<Group spacing={"xs"} style={{ marginTop: "1rem" }}>
					{project.technologies.map((icons, index) => (
						<React.Fragment key={index}>{icons}</React.Fragment>
					))}
				</Group>
			</div>

			<Group style={{ marginTop: "3rem" }}>
				{project.githubPath !== undefined ? (
					<Anchor href={project.githubPath} target="_blank">
						<Button variant="outline" leftIcon={<IconBrandGithub />}>
							{t("github")}
						</Button>
					</Anchor>
				) : (
					<></>
				)}

				{project.websitePath !== undefined ? (
					<Anchor href={project.websitePath} target="_blank">
						<Button variant="outline" leftIcon={<IconBrowser />}>
							{t("website")}
						</Button>
					</Anchor>
				) : (
					<></>
				)}
			</Group>
		</Card>
	);
};
