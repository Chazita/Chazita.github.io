import {
	Burger,
	Header,
	MediaQuery,
	Text,
	Anchor,
	useMantineTheme,
	Box,
	Group,
	Container,
} from "@mantine/core";
import { Dispatch, SetStateAction, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TitleContext } from "../contexts/titleContext";
import { ButtonMode } from "./ButtonMode";
import { LanguageSelector } from "../components/LanguageSelector";

type HeaderAppProps = {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
};

function HeaderApp({ opened, setOpened }: HeaderAppProps) {
	const { t } = useTranslation("translation");
	const theme = useMantineTheme();
	const isDark = theme.colorScheme === "dark" ? true : false;

	const { title } = useContext(TitleContext);

	return (
		<Header height={"60"} p="md">
			<Container size={"xl"}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						height: "100%",
						justifyContent: "space-between",
						fontSize: "20px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<MediaQuery largerThan="sm" styles={{ display: "none" }}>
							<Group>
								<Burger
									opened={opened}
									onClick={() => setOpened((o) => !o)}
									size="sm"
									color={theme.colors.gray[6]}
									mr="xl"
								/>
								<Text size={"xl"}>{title}</Text>
							</Group>
						</MediaQuery>

						<LanguageSelector smallerThan={"sm"} />
					</Box>

					<Group spacing={"lg"}>
						<MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
							<Group spacing={"lg"}>
								<Anchor
									component={Link}
									to="/"
									sx={{
										color: isDark ? "whitesmoke" : "black",
									}}
								>
									{t("home")}
								</Anchor>

								<Anchor
									component={Link}
									to="/projects"
									sx={{
										color: isDark ? "whitesmoke" : "black",
									}}
								>
									{t("project")}
								</Anchor>
							</Group>
						</MediaQuery>
						<ButtonMode />
					</Group>
				</div>
			</Container>
		</Header>
	);
}

export default HeaderApp;
